# Déploiement AWS S3 — RY Architecture

## Prérequis
- AWS CLI installé et configuré (`aws configure`)
- Bucket S3 avec hébergement de site statique activé
- CloudFront distribution (optionnel mais recommandé)

## 1. Créer le bucket S3

```bash
aws s3 mb s3://ry-architecture.ma --region eu-west-3
```

## 2. Activer l'hébergement statique

```bash
aws s3 website s3://ry-architecture.ma \
  --index-document index.html \
  --error-document 404.html
```

## 3. Configurer la politique de bucket (accès public)

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::ry-architecture.ma/*"
    }
  ]
}
```

```bash
aws s3api put-bucket-policy \
  --bucket ry-architecture.ma \
  --policy file://bucket-policy.json
```

## 4. Build et déploiement

```bash
# Build
npm run build

# Déployer (sync avec invalidation cache)
aws s3 sync dist/ s3://ry-architecture.ma \
  --delete \
  --cache-control "public, max-age=31536000, immutable" \
  --exclude "*.html" \
  --exclude "sitemap*" \
  --exclude "robots.txt"

# HTML files: no-cache pour permettre les mises à jour
aws s3 sync dist/ s3://ry-architecture.ma \
  --delete \
  --cache-control "public, max-age=0, must-revalidate" \
  --include "*.html" \
  --include "sitemap*" \
  --include "robots.txt"
```

## 5. Routing S3 pour sous-dossiers /en/ et /ar/

S3 sert nativement `index.html` dans les sous-dossiers si l'URL se termine par `/`.
Exemple : `https://ry-architecture.ma/en/` → `en/index.html` ✅

Si vous utilisez des URLs sans trailing slash (ex: `/en`), configurez une règle de redirection dans S3.

## 6. CloudFront (recommandé pour HTTPS + performance)

```bash
# Créer une distribution CloudFront pointant vers le bucket S3
# Default root object: index.html
# Error pages: 404 → /404.html (HTTP 404)
```

Dans les paramètres CloudFront > Error Pages :
- HTTP Error Code: 404
- Response Page Path: /404.html
- HTTP Response Code: 404

## 7. Invalidation CloudFront après déploiement

```bash
aws cloudfront create-invalidation \
  --distribution-id YOUR_DISTRIBUTION_ID \
  --paths "/*"
```

## Notes de sécurité
- Activez "Block Public Access" si vous utilisez CloudFront uniquement
- Configurez HTTPS obligatoire via CloudFront
- Ajoutez des headers de sécurité via CloudFront Functions ou Lambda@Edge
