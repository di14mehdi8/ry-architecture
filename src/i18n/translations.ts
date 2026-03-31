export type Lang = 'fr' | 'en' | 'ar';

export const translations = {
  fr: {
    lang: 'fr',
    dir: 'ltr',
    locale: 'fr-MA',
    fontBody: 'DM Sans',
    fontHeading: 'Cormorant Garamond',

    // Meta
    metaTitle: 'RY Architecture — Architecte à Marrakech | Yassir Rafi',
    metaDescription:
      'RY Architecture, cabinet d\'architecture fondé par Yassir Rafi à Marrakech. 15 ans d\'expertise en architecture résidentielle, commerciale, hôtelière et patrimoniale au Maroc.',
    metaKeywords: 'architecte Marrakech, architecture Maroc, Yassir Rafi, riad, architecture de luxe, cabinet architecture',

    // Nav
    navServices: 'Services',
    navPortfolio: 'Réalisations',
    navAbout: 'À propos',
    navContact: 'Contact',
    navLang: 'Langue',

    // Hero
    heroEyebrow: 'Architecture · Marrakech',
    heroTitle: 'L\'Architecture\ncomme Art de Vivre',
    heroSubtitle: 'Nous créons des espaces qui transcendent le temps — où la rigueur de la forme rencontre la chaleur des matières.',
    heroCta: 'Découvrir nos réalisations',
    heroScroll: 'Défiler',

    // Numbers
    statsProjects: 'Projets réalisés',
    statsYears: 'Années d\'expertise',
    statsClients: 'Clients satisfaits',
    statsProjectsNum: '120+',
    statsYearsNum: '15',
    statsClientsNum: '100%',

    // Services
    servicesEyebrow: 'Notre savoir-faire',
    servicesTitle: 'Des espaces conçus\navec intention',
    servicesSubtitle: 'De la première esquisse à la livraison, chaque projet est traité avec la même rigueur et le même soin du détail.',
    services: [
      {
        icon: 'home',
        title: 'Architecture Résidentielle',
        desc: 'Villas, riads et demeures privées alliant le savoir-faire traditionnel marocain aux standards de vie contemporains.',
      },
      {
        icon: 'building',
        title: 'Architecture Commerciale',
        desc: 'Espaces de bureau, commerces et showrooms pensés pour refléter l\'identité et l\'ambition de votre marque.',
      },
      {
        icon: 'hotel',
        title: 'Hôtellerie & Hospitalité',
        desc: 'Riads-hôtels, boutique-hôtels et resorts qui offrent une expérience immersive ancrée dans la culture locale.',
      },
      {
        icon: 'city',
        title: 'Urbanisme & Aménagement',
        desc: 'Conception de quartiers, plans d\'aménagement et espaces publics qui tissent des liens entre tradition et modernité.',
      },
      {
        icon: 'restore',
        title: 'Restauration Patrimoniale',
        desc: 'Réhabilitation de bâtisses historiques et médinas classées avec une approche respectueuse du patrimoine architectural marocain.',
      },
      {
        icon: 'interior',
        title: 'Architecture Intérieure',
        desc: 'Design d\'intérieur sur-mesure qui habille chaque espace d\'une identité unique, entre luxe discret et authenticité.',
      },
    ],

    // Portfolio
    portfolioEyebrow: 'Réalisations',
    portfolioTitle: 'Un regard sur\nnos créations',
    portfolioSubtitle: 'Chaque projet raconte une histoire unique, forgée par le lieu, le client et notre vision partagée.',
    portfolioViewAll: 'Voir toutes les réalisations',
    portfolioCta: 'Voir le projet',
    projects: [
      { title: 'Villa Palmeraie', category: 'Résidentiel', year: '2024', location: 'Palmeraie, Marrakech' },
      { title: 'Riad Zitoun', category: 'Hôtellerie', year: '2023', location: 'Médina, Marrakech' },
      { title: 'Tour Atlas Business', category: 'Commercial', year: '2023', location: 'Guéliz, Marrakech' },
      { title: 'Résidence Agdal', category: 'Résidentiel', year: '2022', location: 'Agdal, Marrakech' },
      { title: 'Dar El Bacha Spa', category: 'Restauration', year: '2022', location: 'Médina, Marrakech' },
      { title: 'Eco-Lodge Atlas', category: 'Hôtellerie', year: '2021', location: 'Asni, Marrakech' },
    ],

    // About
    aboutEyebrow: 'Le fondateur',
    aboutTitle: 'Yassir Rafi',
    aboutSubtitle: 'Architecte · Marrakech',
    aboutBio1: 'Diplômé de l\'École Nationale d\'Architecture de Rabat, Yassir Rafi fonde RY Architecture avec une conviction profonde : l\'architecture marocaine contemporaine doit puiser dans son héritage millénaire pour projeter des espaces d\'une beauté intemporelle.',
    aboutBio2: 'Fort de 15 ans d\'expérience entre Marrakech, Casablanca et les grandes capitales européennes, il développe une signature architecturale reconnaissable — minimaliste dans la forme, généreuse dans les matières, toujours ancrée dans son territoire.',
    aboutBio3: 'Chaque projet est pour lui un dialogue entre le passé et le présent, entre la lumière et l\'ombre, entre la sérénité de la Médina et les aspirations d\'un Maroc en mouvement.',
    aboutQuote: '« L\'architecture la plus noble est celle qui ne se remarque pas — elle se ressent. »',
    aboutQuoteAuthor: '— Yassir Rafi',
    aboutCredentials: [
      { label: 'Formation', value: 'École Nationale d\'Architecture, Tunis' },
      { label: 'Basé à', value: 'Marrakech, Maroc' },
      { label: 'Expérience', value: '15 ans · 120+ projets' },
    ],

    // Philosophy / AEO FAQ
    philosophyEyebrow: 'Notre philosophie',
    philosophyTitle: 'L\'art de construire\nau Maroc',
    philosophySubtitle: 'Questions essentielles sur l\'architecture contemporaine marocaine.',
    faqs: [
      {
        q: 'Qu\'est-ce que l\'architecture de riad moderne ?',
        a: 'Le riad moderne réinterprète l\'architecture palatiale islamique — son plan centré autour d\'un patio, sa relation à l\'eau et à la végétation, sa façade aveugle sur rue — à travers le prisme du confort et de la durabilité contemporaine. Chez RY Architecture, nous préservons l\'âme du riad tout en intégrant des technologies passives de ventilation, d\'isolation thermique et de lumière naturelle.',
      },
      {
        q: 'Comment construire une villa de luxe à Marrakech ?',
        a: 'Construire à Marrakech requiert une connaissance approfondie du terroir : orientation solaire, matériaux locaux (tadelakt, zellige, bois de cèdre), contraintes réglementaires et climatiques. Notre processus débute par une immersion dans le site et la vision du client, avant de dérouler phases de conception, permis et suivi de chantier, de A à Z.',
      },
      {
        q: 'Quelle est la différence entre un architecte traditionnel et un architecte de riad ?',
        a: 'Au-delà de la qualification DPLG, l\'architecte spécialisé en riad maîtrise les techniques artisanales marocaines (maâlems), les matériaux traditionnels et la logique spatiale des médinas classées UNESCO. Cette expertise permet de créer des espaces authentiques qui répondent également aux exigences d\'habitabilité modernes.',
      },
      {
        q: 'Quels sont les matériaux nobles pour une construction de luxe au Maroc ?',
        a: 'Le tadelakt (enduit à la chaux poli), le zellige (mosaïque de faïence), le bois de cèdre de l\'Atlas, la pierre de Boukraa et le marbre de Midelt constituent la palette matière de l\'architecture de prestige marocaine. Ces matériaux locaux offrent une pérennité exceptionnelle tout en reflétant l\'identité du pays.',
      },
      {
        q: 'Combien de temps dure un projet d\'architecture à Marrakech ?',
        a: 'Un projet résidentiel standard — de la conception aux clés — prend entre 18 et 30 mois selon la complexité. Les projets de restauration patrimoniale ou les développements hôteliers nécessitent un délai plus long en raison des procédures de classement et des techniques artisanales spécifiques. Nous accompanons chaque client tout au long de ce parcours.',
      },
    ],

    // Contact
    contactEyebrow: 'Commencez votre projet',
    contactTitle: 'Construisons\nensemble',
    contactSubtitle: 'Chaque grand projet commence par une conversation. Partagez votre vision — nous vous écoutons.',
    contactNameLabel: 'Votre nom',
    contactNamePlaceholder: 'Jean Dupont',
    contactEmailLabel: 'Adresse e-mail',
    contactEmailPlaceholder: 'jean@exemple.com',
    contactProjectLabel: 'Votre projet',
    contactProjectPlaceholder: 'Décrivez votre projet en quelques mots...',
    contactSubmit: 'Envoyer le message',
    contactOr: 'ou',
    contactEmail: 'contact@ry-architecture.ma',
    contactPhone: '+212 5XX-XXXXXX',
    contactAddress: 'Bd Yacoub El Mansour, Cité Bokar\nRésid. Drarga, Bur. 53\n40000 Marrakech, Maroc',

    // Footer
    footerTagline: 'Architecture de prestige à Marrakech.',
    footerLinks: 'Navigation',
    footerContact: 'Contact',
    footerCopy: '© 2024 RY Architecture — Tous droits réservés',
    footerLegal: 'Mentions légales',

    // 404
    notFoundTitle: 'Page introuvable',
    notFoundText: 'La page que vous cherchez n\'existe pas.',
    notFoundCta: 'Retour à l\'accueil',
  },

  en: {
    lang: 'en',
    dir: 'ltr',
    locale: 'en-US',
    fontBody: 'DM Sans',
    fontHeading: 'Cormorant Garamond',

    metaTitle: 'RY Architecture — Architect in Marrakech | Yassir Rafi',
    metaDescription:
      'RY Architecture, an architecture firm founded by Yassir Rafi in Marrakech. 15 years of expertise in residential, commercial, hospitality and heritage architecture in Morocco.',
    metaKeywords: 'architect Marrakech, architecture Morocco, Yassir Rafi, riad, luxury architecture, architecture firm',

    navServices: 'Services',
    navPortfolio: 'Portfolio',
    navAbout: 'About',
    navContact: 'Contact',
    navLang: 'Language',

    heroEyebrow: 'Architecture · Marrakech',
    heroTitle: 'Architecture\nas a Way of Life',
    heroSubtitle: 'We create spaces that transcend time — where the rigor of form meets the warmth of materials.',
    heroCta: 'Explore our work',
    heroScroll: 'Scroll',

    statsProjects: 'Completed Projects',
    statsYears: 'Years of Expertise',
    statsClients: 'Satisfied Clients',
    statsProjectsNum: '120+',
    statsYearsNum: '15',
    statsClientsNum: '100%',

    servicesEyebrow: 'Our Expertise',
    servicesTitle: 'Spaces designed\nwith intention',
    servicesSubtitle: 'From first sketch to final delivery, every project is handled with the same rigor and attention to detail.',
    services: [
      {
        icon: 'home',
        title: 'Residential Architecture',
        desc: 'Villas, riads and private residences blending traditional Moroccan craftsmanship with contemporary living standards.',
      },
      {
        icon: 'building',
        title: 'Commercial Architecture',
        desc: 'Office spaces, retail environments and showrooms designed to reflect the identity and ambition of your brand.',
      },
      {
        icon: 'hotel',
        title: 'Hospitality & Hotels',
        desc: 'Riad-hotels, boutique hotels and resorts offering an immersive experience rooted in local culture.',
      },
      {
        icon: 'city',
        title: 'Urban Planning',
        desc: 'Neighborhood designs, master plans and public spaces weaving connections between tradition and modernity.',
      },
      {
        icon: 'restore',
        title: 'Heritage Restoration',
        desc: 'Rehabilitation of historic buildings and UNESCO-listed medinas with a respectful approach to Moroccan architectural heritage.',
      },
      {
        icon: 'interior',
        title: 'Interior Architecture',
        desc: 'Bespoke interior design that gives each space a unique identity, between discreet luxury and authentic materiality.',
      },
    ],

    portfolioEyebrow: 'Portfolio',
    portfolioTitle: 'A glimpse into\nour creations',
    portfolioSubtitle: 'Each project tells a unique story, shaped by place, client and our shared vision.',
    portfolioViewAll: 'View all projects',
    portfolioCta: 'View project',
    projects: [
      { title: 'Palmeraie Villa', category: 'Residential', year: '2024', location: 'Palmeraie, Marrakech' },
      { title: 'Riad Zitoun', category: 'Hospitality', year: '2023', location: 'Medina, Marrakech' },
      { title: 'Atlas Business Tower', category: 'Commercial', year: '2023', location: 'Guéliz, Marrakech' },
      { title: 'Agdal Residence', category: 'Residential', year: '2022', location: 'Agdal, Marrakech' },
      { title: 'Dar El Bacha Spa', category: 'Restoration', year: '2022', location: 'Medina, Marrakech' },
      { title: 'Atlas Eco-Lodge', category: 'Hospitality', year: '2021', location: 'Asni, Marrakech' },
    ],

    aboutEyebrow: 'The Founder',
    aboutTitle: 'Yassir Rafi',
    aboutSubtitle: 'Architect · Marrakech',
    aboutBio1: 'A graduate of the École Nationale d\'Architecture in Rabat, Yassir Rafi founded RY Architecture with a deep conviction: contemporary Moroccan architecture must draw from its millennial heritage to project spaces of timeless beauty.',
    aboutBio2: 'With 15 years of experience across Marrakech, Casablanca and major European capitals, he has developed a recognizable architectural signature — minimal in form, generous in materiality, always rooted in its territory.',
    aboutBio3: 'Every project is for him a dialogue between past and present, between light and shadow, between the serenity of the Medina and the aspirations of a Morocco in motion.',
    aboutQuote: '"The most noble architecture is the one that goes unnoticed — it is felt."',
    aboutQuoteAuthor: '— Yassir Rafi',
    aboutCredentials: [
      { label: 'Education', value: 'École Nationale d\'Architecture, Tunis' },
      { label: 'Based in', value: 'Marrakech, Morocco' },
      { label: 'Experience', value: '15 years · 120+ projects' },
    ],

    philosophyEyebrow: 'Our Philosophy',
    philosophyTitle: 'The art of building\nin Morocco',
    philosophySubtitle: 'Essential questions about contemporary Moroccan architecture.',
    faqs: [
      {
        q: 'What is modern riad architecture?',
        a: 'Modern riad architecture reinterprets Islamic palatial design — its plan centered around a courtyard, its relationship with water and vegetation, its blind street facade — through the lens of contemporary comfort and sustainability. At RY Architecture, we preserve the soul of the riad while integrating passive ventilation, thermal insulation and natural light technologies.',
      },
      {
        q: 'How to build a luxury villa in Marrakech?',
        a: 'Building in Marrakech requires deep knowledge of the terroir: solar orientation, local materials (tadelakt, zellige, cedar wood), regulatory and climatic constraints. Our process begins with an immersion in the site and the client\'s vision, before unfolding design, permitting and construction supervision phases from A to Z.',
      },
      {
        q: 'What noble materials are used in luxury construction in Morocco?',
        a: 'Tadelakt (polished lime plaster), zellige (faience mosaic), Atlas cedar wood, Boukraa stone and Midelt marble constitute the material palette of prestigious Moroccan architecture. These local materials offer exceptional durability while reflecting the identity of the country.',
      },
      {
        q: 'How long does an architecture project in Marrakech take?',
        a: 'A standard residential project — from design to handover — takes between 18 and 30 months depending on complexity. Heritage restoration projects or hotel developments require longer timelines due to classification procedures and specific artisanal techniques. We accompany every client throughout this journey.',
      },
      {
        q: 'What makes Moroccan architecture unique?',
        a: 'Moroccan architecture synthesizes Berber, Arab, Andalusian and French influences into a unique visual language. Its defining characteristics — geometric patterns (zellige), ornate carved stucco (gebs), intricate woodwork (mashrabiyya) and the inward-looking courtyard typology — create architecture that is simultaneously intimate, grand and deeply rooted in place.',
      },
    ],

    contactEyebrow: 'Start your project',
    contactTitle: 'Let\'s build\ntogether',
    contactSubtitle: 'Every great project begins with a conversation. Share your vision — we are listening.',
    contactNameLabel: 'Your name',
    contactNamePlaceholder: 'John Smith',
    contactEmailLabel: 'Email address',
    contactEmailPlaceholder: 'john@example.com',
    contactProjectLabel: 'Your project',
    contactProjectPlaceholder: 'Describe your project in a few words...',
    contactSubmit: 'Send message',
    contactOr: 'or',
    contactEmail: 'contact@ry-architecture.ma',
    contactPhone: '+212 5XX-XXXXXX',
    contactAddress: 'Bd Yacoub El Mansour, Cité Bokar\nRésid. Drarga, Bureau 53\n40000 Marrakech, Morocco',

    footerTagline: 'Prestige architecture in Marrakech.',
    footerLinks: 'Navigation',
    footerContact: 'Contact',
    footerCopy: '© 2024 RY Architecture — All rights reserved',
    footerLegal: 'Legal',

    notFoundTitle: 'Page not found',
    notFoundText: 'The page you are looking for does not exist.',
    notFoundCta: 'Back to home',
  },

  ar: {
    lang: 'ar',
    dir: 'rtl',
    locale: 'ar-MA',
    fontBody: 'IBM Plex Sans Arabic',
    fontHeading: 'Amiri',

    metaTitle: 'RY Architecture — مكتب هندسة معمارية في مراكش | ياسر رافعي',
    metaDescription:
      'RY Architecture، مكتب هندسة معمارية تأسس على يد ياسر رافعي في مراكش. 15 عاماً من الخبرة في الهندسة المعمارية السكنية والتجارية والضيافة والتراثية في المغرب.',
    metaKeywords: 'مهندس معماري مراكش، هندسة معمارية المغرب، ياسر رافعي، رياض، هندسة فاخرة، مكتب هندسة',

    navServices: 'الخدمات',
    navPortfolio: 'الأعمال',
    navAbout: 'من نحن',
    navContact: 'اتصل بنا',
    navLang: 'اللغة',

    heroEyebrow: 'الهندسة المعمارية · مراكش',
    heroTitle: 'الهندسة المعمارية\nفن الحياة',
    heroSubtitle: 'نبتكر فضاءات تتجاوز الزمن — حيث تلتقي صرامة الشكل بدفء المواد.',
    heroCta: 'اكتشف أعمالنا',
    heroScroll: 'انزلق',

    statsProjects: 'مشروع منجز',
    statsYears: 'سنوات من الخبرة',
    statsClients: 'عميل راضٍ',
    statsProjectsNum: '+120',
    statsYearsNum: '15',
    statsClientsNum: '100%',

    servicesEyebrow: 'خبرتنا',
    servicesTitle: 'فضاءات مصممة\nبنية وإتقان',
    servicesSubtitle: 'من الرسم الأول حتى التسليم النهائي، يُعامَل كل مشروع بنفس الدقة والاهتمام بالتفاصيل.',
    services: [
      {
        icon: 'home',
        title: 'الهندسة المعمارية السكنية',
        desc: 'فيلات وريادات ومنازل خاصة تجمع بين الحرف التقليدية المغربية ومعايير المعيشة المعاصرة.',
      },
      {
        icon: 'building',
        title: 'الهندسة المعمارية التجارية',
        desc: 'مكاتب وتجارة ومعارض مصممة لتعكس هوية علامتك التجارية وطموحاتها.',
      },
      {
        icon: 'hotel',
        title: 'الضيافة والفنادق',
        desc: 'فنادق الرياض وبوتيك هوتيل ومنتجعات تقدم تجربة غامرة متجذرة في الثقافة المحلية.',
      },
      {
        icon: 'city',
        title: 'التخطيط العمراني',
        desc: 'تصميم الأحياء والمخططات العمرانية والفضاءات العامة التي تنسج روابط بين التراث والحداثة.',
      },
      {
        icon: 'restore',
        title: 'ترميم التراث',
        desc: 'إعادة تأهيل المباني التاريخية والمدن العتيقة المصنفة من اليونسكو باحترام كامل للإرث المعماري المغربي.',
      },
      {
        icon: 'interior',
        title: 'التصميم الداخلي',
        desc: 'تصميم داخلي مخصص يمنح كل فضاء هوية فريدة، بين الفخامة الخفية والأصالة المادية.',
      },
    ],

    portfolioEyebrow: 'الأعمال',
    portfolioTitle: 'نظرة على\nإبداعاتنا',
    portfolioSubtitle: 'كل مشروع يروي قصة فريدة، تشكّلها المكان والعميل ورؤيتنا المشتركة.',
    portfolioViewAll: 'عرض جميع المشاريع',
    portfolioCta: 'عرض المشروع',
    projects: [
      { title: 'فيلا النخيل', category: 'سكني', year: '2024', location: 'النخيل، مراكش' },
      { title: 'رياض الزيتون', category: 'ضيافة', year: '2023', location: 'المدينة القديمة، مراكش' },
      { title: 'برج أطلس للأعمال', category: 'تجاري', year: '2023', location: 'جيليز، مراكش' },
      { title: 'أكدال ريزيدانس', category: 'سكني', year: '2022', location: 'أكدال، مراكش' },
      { title: 'دار الباشا سبا', category: 'ترميم', year: '2022', location: 'المدينة القديمة، مراكش' },
      { title: 'إيكو لودج أطلس', category: 'ضيافة', year: '2021', location: 'أسني، مراكش' },
    ],

    aboutEyebrow: 'المؤسس',
    aboutTitle: 'ياسر رافعي',
    aboutSubtitle: 'مهندس معماري · مراكش',
    aboutBio1: 'خريج المدرسة الوطنية للهندسة المعمارية في الرباط، أسس ياسر رافعي مكتب RY Architecture بقناعة راسخة: يجب على الهندسة المعمارية المغربية المعاصرة أن تستقي من إرثها الألفي لتُبدع فضاءات ذات جمال خارج الزمن.',
    aboutBio2: 'بفضل 15 عاماً من الخبرة بين مراكش والدار البيضاء وكبريات العواصم الأوروبية، طوّر بصمة معمارية مميزة — بسيطة في الشكل، سخية في المواد، متجذرة دائماً في أرضها.',
    aboutBio3: 'كل مشروع بالنسبة له حوار بين الماضي والحاضر، بين الضوء والظل، بين هدوء المدينة القديمة وطموحات المغرب في حركة دائمة.',
    aboutQuote: '«إن أنبل هندسة معمارية هي تلك التي لا تُلاحَظ — بل تُحسّ.»',
    aboutQuoteAuthor: '— ياسر رافعي',
    aboutCredentials: [
      { label: 'التكوين', value: 'المدرسة الوطنية للهندسة المعمارية، تونس' },
      { label: 'مقر العمل', value: 'مراكش، المغرب' },
      { label: 'الخبرة', value: '15 سنة · 120+ مشروع' },
    ],

    philosophyEyebrow: 'فلسفتنا',
    philosophyTitle: 'فن البناء\nفي المغرب',
    philosophySubtitle: 'أسئلة جوهرية حول الهندسة المعمارية المغربية المعاصرة.',
    faqs: [
      {
        q: 'ما هي هندسة الرياض الحديثة؟',
        a: 'تُعيد هندسة الرياض الحديثة تفسير التصميم القصري الإسلامي — مخططه المتمحور حول الفناء الداخلي، علاقته بالماء والنباتات، واجهته العمياء على الشارع — من خلال منظور الراحة والاستدامة المعاصرة. في RY Architecture، نحافظ على روح الرياض مع دمج تقنيات التهوية السلبية والعزل الحراري والضوء الطبيعي.',
      },
      {
        q: 'كيف تبني فيلا فاخرة في مراكش؟',
        a: 'يتطلب البناء في مراكش معرفة عميقة بالموروث المحلي: التوجه الشمسي، المواد المحلية (التادلكت، الزليج، خشب الأرز)، القيود التنظيمية والمناخية. تبدأ عمليتنا بالانغماس في الموقع ورؤية العميل، قبل الانطلاق في مراحل التصميم والتراخيص والإشراف على البناء، من الألف إلى الياء.',
      },
      {
        q: 'ما هي المواد النبيلة للبناء الفاخر في المغرب؟',
        a: 'التادلكت (الجير المصقول)، الزليج (فسيفساء الخزف)، خشب أرز الأطلس، حجر بوكراع ورخام ميدلت — هذه هي لوحة المواد المعمارية الراقية المغربية. تتميز هذه المواد المحلية بمتانة استثنائية مع إيصال هوية البلد الأصيلة.',
      },
      {
        q: 'كم يستغرق مشروع معماري في مراكش؟',
        a: 'يستغرق مشروع سكني عادي — من التصميم إلى التسليم — ما بين 18 و30 شهراً تبعاً للتعقيد. تستلزم مشاريع ترميم التراث أو التطوير الفندقي فترة أطول نظراً لإجراءات التصنيف والتقنيات الحرفية الخاصة. نرافق كل عميل طوال هذه الرحلة.',
      },
      {
        q: 'ما الذي يجعل الهندسة المعمارية المغربية فريدة من نوعها؟',
        a: 'تجمع الهندسة المعمارية المغربية بين المؤثرات الأمازيغية والعربية والأندلسية والفرنسية في لغة بصرية فريدة. خصائصها المميزة — الأنماط الهندسية (الزليج)، الجص المنقوش (الجبس)، الأعمال الخشبية الدقيقة (المشربية) ونمط الفناء الداخلي — تخلق هندسة حميمية وفخمة في آنٍ واحد، متجذرة بعمق في مكانها.',
      },
    ],

    contactEyebrow: 'ابدأ مشروعك',
    contactTitle: 'لنبني معاً',
    contactSubtitle: 'كل مشروع عظيم يبدأ بمحادثة. شارك رؤيتك — نحن نصغي إليك.',
    contactNameLabel: 'اسمك',
    contactNamePlaceholder: 'أحمد المنصوري',
    contactEmailLabel: 'البريد الإلكتروني',
    contactEmailPlaceholder: 'ahmed@example.com',
    contactProjectLabel: 'مشروعك',
    contactProjectPlaceholder: 'صف مشروعك ببضع كلمات...',
    contactSubmit: 'إرسال الرسالة',
    contactOr: 'أو',
    contactEmail: 'contact@ry-architecture.ma',
    contactPhone: '+212 5XX-XXXXXX',
    contactAddress: 'شارع يعقوب المنصور، حي البوكر\nرياض الدراقة، مكتب 53\n40000 مراكش، المغرب',

    footerTagline: 'هندسة معمارية راقية في مراكش.',
    footerLinks: 'التصفح',
    footerContact: 'اتصل بنا',
    footerCopy: '© 2024 RY Architecture — جميع الحقوق محفوظة',
    footerLegal: 'الشروط القانونية',

    notFoundTitle: 'الصفحة غير موجودة',
    notFoundText: 'الصفحة التي تبحث عنها غير موجودة.',
    notFoundCta: 'العودة إلى الرئيسية',
  },
} as const;

export type Translations = typeof translations.fr;

export function t(lang: Lang): Translations {
  return translations[lang] as unknown as Translations;
}

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang === 'en' || lang === 'ar') return lang;
  return 'fr';
}

export function getLocalePath(lang: Lang, path = '', base = ''): string {
  const b = base.replace(/\/$/, '');
  if (lang === 'fr') return `${b}/${path}`;
  return `${b}/${lang}/${path}`;
}
