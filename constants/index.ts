export const navLinks = [
  {
    label: "Home",
    route: "/",
    icon: "/assets/icons/home.svg",
  },
  {
    label: "Projects",
    route: "/projects",
    icon: "/assets/icons/projects.svg",
  },
  {
    label: "About",
    route: "/about",
    icon: "/assets/icons/about.svg",
  },
  {
    label: "Contact",
    route: "/contact",
    icon: "/assets/icons/contact.svg",
  },
];

export const socialLinks = [
  {
    label: "Github",
    url: "https://github.com/jleveneur/portfolio",
    icon: "/assets/icons/github.svg",
  },
  {
    label: "Linkedin",
    url: "https://www.linkedin.com/in/jleveneur/",
    icon: "/assets/icons/linkedin.svg",
  },
];

export const personalInfo = {
  firstName: "Julien",
  name: "Leveneur",
  fullName: "Julien Leveneur",
  birthDate: "16 Mai 2001",
  birthPlace: "Pontoise",
  title: "Full-stack Developer",
  description:
    "Alternant à la CPAM de la Somme à Amiens, je maîtrise les technologies front-end et back-end pour développer des applications web robustes. Passionné par l'innovation, je crée des solutions numériques efficaces.",
  email: "jleveneur.pro@gmail.com",
  location: "Amiens, France",
  phone: "+33 6 59 39 59 44",
  website: "https://jleveneur.pro",
};

export const education = [
  {
    degree: "Baccalauréat Scientifique",
    dates: "2016 - 2019",
    institution: "Lycée Condorcet, Méru 60110",
    projects: [],
  },
  {
    degree: "DUT Information",
    dates: "2019 - 2021",
    institution: "I.U.T d’Amiens",
    projects: [],
  },
  {
    degree: "LP RGI",
    dates: "2021 - 2022",
    institution: "I.U.T d’Amiens",
    projects: [],
  },
  {
    degree: "Master M.I.A.G.E.",
    dates: "2022 - 2024",
    institution: "UFR des Sciences",
    projects: [
      {
        title: "Application de gestion de bar restaurant",
        description:
          "Développement d’une application de gestion d’un bar restaurant, permettant de récupérer les commandes des clients pour les envoyer en cuisine, incluant une gestion des paiements.",
      },
      {
        title: "Application de gestion des dépenses",
        description:
          "Développement d’une application permettant de faire la gestion des dépenses par compte bancaire.",
      },
    ],
  },
];

export const professionalExperience = [
  {
    position: "Concepteur et développeur applicatifs",
    dates: "Mars 2021 - Juin 2021 (10 Semaines)",
    location: "CPAM de la Somme, Amiens",
    projects: [
      {
        title: "Application d'inventaire de prêt de matériel",
        description:
          "Développement d’une application pour inventorier le prêt de petit matériel (souris, clavier, casque, etc.) en utilisant Symfony.",
      },
    ],
  },
  {
    position: "Concepteur et développeur applicatifs",
    dates: "Septembre 2021 - Septembre 2022",
    location: "CPAM de la Somme, Amiens",
    projects: [
      {
        title: "API pour la gestion des agents",
        description:
          "Développement d’une API pour récupérer les agents à partir de l’annuaire, remplaçant l’utilisation de fichiers Excel, en utilisant Symfony.",
      },
      {
        title: "Application de recensement des applications",
        description:
          "Développement d’une application pour recenser les applications utilisées au sein de l’organisme et regrouper la documentation, en utilisant Symfony.",
      },
    ],
  },
  {
    position: "Concepteur et développeur applicatifs",
    dates: "Septembre 2022 - Mars 2023",
    location: "PIDEV, Camon",
    projects: [
      {
        title: "Maintenance du site interne",
        description:
          "Maintenance du site interne de l'entreprise en utilisant Wordpress.",
      },
      {
        title: "Application de suivi des entretiens techniques des véhicules",
        description:
          "Développement d’une application pour suivre les entretiens techniques des véhicules en utilisant Symfony et React.js.",
      },
      {
        title: "Application de suivi des dossiers internes",
        description:
          "Développement d’une application interne pour suivre les dossiers en cours en utilisant Symfony et React.js.",
      },
    ],
  },
  {
    position: "Concepteur et développeur applicatifs",
    dates: "Avril 2023 - aujourd’hui",
    location: "CPAM de la Somme, Amiens",
    projects: [
      {
        title: "Application de revue des habilitations",
        description:
          "Développement d’une application pour effectuer des revues sur les habilitations en utilisant Symfony.",
      },
      {
        title: "Application de gestion de projet d’entreprise",
        description:
          "Développement d’une application pour la gestion des projets d’entreprise en utilisant Symfony.",
      },
    ],
  },
];

export const skillsData = [
  {
    code: "A.6",
    title: "Conception des applications",
    category: "PLANIFIER",
    knowledge: "Je maîtrise",
    experience:
      "J'ai conçu et développé plusieurs applications complexes, en prenant en compte les besoins des utilisateurs ainsi que les contraintes techniques et environnementales.",
    level: "Niveau 3",
    type: "Technique",
    description:
      "Prend en compte ses propres actions et celles des tiers pour s’assurer de l’intégration correcte de l’application dans un environnement complexe en conformité avec les besoins des utilisateurs / clients.",
  },
  {
    code: "A.7",
    title: "Veille technologique",
    category: "PLANIFIER",
    knowledge: "Je maîtrise",
    experience:
      "Je consacre du temps chaque semaine à lire des articles de recherche, des blogs technologiques et des revues spécialisées pour comprendre les dernières avancées et innovations dans mon domaine. Cette pratique me permet de rester informé sur les développements technologiques les plus récents.",
    level: "Niveau 4",
    type: "Transversal",
    description:
      "Mobilise une large gamme de connaissances expertes en nouvelles technologies tout en faisant preuve d’une forte compréhension de l’entreprise pour envisager et formuler des solutions pour le futur. Fournit un point de vue expert pour guider l’équipe dirigeante vers des décisions stratégiques.",
  },
  {
    code: "A.9",
    title: "Innovation",
    category: "PLANIFIER",
    knowledge: "Je sais",
    experience:
      "J'ai été impliqué dans plusieurs projets où j'ai été encouragé à proposer des solutions novatrices pour résoudre des problèmes complexes. Par exemple, j'ai eu l'occasion de repenser l'architecture d'une application existante pour améliorer sa scalabilité et sa performance, en intégrant des technologies émergentes telles que les conteneurs Docker.",
    level: "Niveau 4",
    type: "Transversal",
    description:
      "A une pensée indépendante et une conscience technologique permettant l’intégration de concepts disparates dans des solutions originales.",
  },
  {
    code: "B.1",
    title: "Conception et développement d’applications",
    category: "DÉVELOPPER",
    knowledge: "Je maîtrise",
    experience:
      "Grâce à mes années d'expérience dans le développement logiciel, j'ai acquis une solide compréhension des principes de conception et de développement d'applications. J'ai été impliqué dans la création d'architectures logicielles robustes et évolutives.",
    level: "Niveau 3",
    type: "Technique",
    description:
      "Développe des applications et choisit les options techniques appropriées, de manière créative. Prend part à d’autres activités de développement. Optimise le développement applicatif, sa maintenance et ses performances en suivant des modèles de conception et en réutilisant des éléments de solutions éprouvés.",
  },
  {
    code: "B.2",
    title: "Intégration des systèmes",
    category: "DÉVELOPPER",
    knowledge: "Je sais",
    experience:
      "J'ai souvent été chargé de l'intégration des systèmes dans des environnements variés, en veillant à ce que les composants logiciels et matériels fonctionnent ensemble de manière cohérente.",
    level: "Niveau 2",
    type: "Technique",
    description:
      "Identifie de façon systématique la compatibilité des spécifications matérielles ou logicielles. Documente toute l’activité pendant l’installation et enregistre les écarts et corrections apportées.",
  },
  {
    code: "B.3",
    title: "Tests",
    category: "DÉVELOPPER",
    knowledge: "Je sais",
    experience:
      "Au cours de mon dernier projet, j'ai été chargé de superviser une campagne de tests pour une application web.",
    level: "Niveau 3",
    type: "Technique",
    description:
      "Mobilise des expertises pour superviser des campagnes de tests complexes. Garantit la documentation des tests et des résultats pour fournir des éléments d’information aux responsables concernés du ou des processus tels que les concepteurs, les utilisateurs ou les techniciens en charge de la maintenance. Assure la responsabilité de la conformité avec les procédures de test incluant une traçabilité documentée.",
  },
  {
    code: "B.4",
    title: "Déploiement de solutions",
    category: "DÉVELOPPER",
    knowledge: "Je maîtrise",
    experience:
      "J'ai élaboré des documents détaillés sur les processus de déploiement, y compris les étapes à suivre, les configurations requises et les bonnes pratiques. Ces documents ont été utilisés comme référence par l'équipe pour assurer la cohérence et la conformité lors de chaque déploiement.",
    level: "Niveau 2",
    type: "Technique",
    description:
      "Installe ou désinstalle de manière systématique des éléments du système. identifie les composants défaillants et établit la cause principale de la défaillance au sein du système. Assiste les collègues moins expérimentés",
  },
  {
    code: "B.5",
    title: "Production de la documentation",
    category: "DÉVELOPPER",
    knowledge: "Je sais",
    experience:
      "J'ai participé à la production de la documentation technique pour différents projets de développement logiciel, en décrivant de manière claire et concise l'architecture, les fonctionnalités et les processus de déploiement des applications.",
    level: "Niveau 2",
    type: "Transversal",
    description:
      "Détermine les exigences de la documentation compte-tenu de l’objet et de l’environnement dans lequel elle s’applique.",
  },
  {
    code: "C.4",
    title: "Gestion des problèmes",
    category: "UTILISER",
    knowledge: "Je sais",
    experience:
      "J'ai utilisé des outils de gestion des incidents tels que Gitlab, où j'ai enregistré systématiquement tous les incidents survenus, en suivant un processus structuré pour documenter chaque étape de résolution. ",
    level: "Niveau 2",
    type: "Technique",
    description:
      "Identifie et classe les types d’incidents et les interruptions de service. Consigne les incidents en les répertoriant selon leurs symptômes et leurs résolutions.",
  },
  {
    code: "D.11",
    title: "Identification des besoins",
    category: "FACILITER",
    knowledge: "Je maîtrise",
    experience:
      "Au cours de mes projets précédents, j'ai participé à des réunions avec les parties prenantes internes pour recueillir des informations sur leurs exigences et leurs attentes.",
    level: "Niveau 3",
    type: "Transversal",
    description:
      "Établit des relations de confiance avec les clients et les aide à identifier leurs besoins.",
  },
  {
    code: "E.2",
    title: "Gestion des projets et du portefeuille de projets",
    category: "GÉRER",
    knowledge: "Je sais",
    experience:
      "J'ai participé à des initiatives visant à améliorer les processus de gestion de projet au sein de mon organisation.",
    level: "Niveau 2",
    type: "Transversal",
    description:
      "Comprend et applique les principes de la gestion de projet, met en œuvre les méthodes, les outils et les processus pour gérer des projets simples, optimise les coûts et réduit le gaspillage.",
  },
];

export const knowledgeData = [
  {
    title: "Maîtrise de Java et Spring Boot pour le développement backend.",
    category: "Langages de programmation et Frameworks",
    knowledge: "J’ai appris",
    experience:
      "J'ai développé plusieurs applications backend en utilisant Java et Spring Boot, notamment une application de gestion des dépenses par compte bancaire.",
    level: "Intermédiaire",
    type: "Technique",
  },
  {
    title:
      "Compétence en .NET Core et C# pour des projets utilisant les technologies Microsoft.",
    category: "Langages de programmation et Frameworks",
    knowledge: "J’ai appris",
    experience:
      "J'ai développé des applications web dynamiques en utilisant ASP.NET Core et C#, en tirant parti des fonctionnalités telles que le routage, le middleware et l'injection de dépendances pour créer des solutions robustes.",
    level: "Intermédiaire",
    type: "Technique",
  },
  {
    title:
      "Connaissance de PHP/Symfony pour les projets nécessitant ces technologies.",
    category: "Langages de programmation et Frameworks",
    knowledge: "Je sais",
    experience:
      "Au cours de mes alternances, j'ai développé et maintenu plusieurs applications web utilisant PHP et Symfony comme framework principal.",
    level: "Avancé",
    type: "Technique",
  },
  {
    title:
      "Expérience avec JavaScript et ses frameworks modernes comme React.js, Next.js et Angular pour le développement frontend.",
    category: "Langages de programmation et Frameworks",
    knowledge: "Je sais",
    experience:
      "J'ai créé des interfaces utilisateur interactives en utilisant React, en travaillant sur des fonctionnalités telles que la gestion des états, la navigation et les appels API.",
    level: "Avancé",
    type: "Technique",
  },
  {
    title:
      "Compétences en SQL et en gestion de bases de données relationnelles et non relationnelles.",
    category: "Bases de données",
    knowledge: "Je sais",
    experience:
      "J'ai conçu des schémas de bases de données relationnelles en utilisant SQL, en optimisant les requêtes pour améliorer les performances.",
    level: "Avancé",
    type: "Technique",
  },
  {
    title: "Utilisation de Git pour le contrôle de version.",
    category: "Outils de développement et de collaboration",
    knowledge: "Je sais",
    experience:
      "J'ai collaboré avec une équipe de développement en utilisant Git pour gérer efficacement les versions du code source, en utilisant des branches, des fusions et des révisions pour assurer un flux de travail fluide.",
    level: "Avancé",
    type: "Technique",
  },
  {
    title:
      "Connaissance des outils de CI/CD pour automatiser les déploiements.",
    category: "Outils de développement et de collaboration",
    knowledge: "J’ai appris",
    experience:
      "J'ai configuré des pipelines CI/CD avec des outils tels que Jenkins et Travis CI, en automatisant les tests unitaires, les tests d'intégration et les déploiements sur différents environnements.",
    level: "Débutant",
    type: "Technique",
  },
  {
    title:
      "Utilisation de plateformes comme GitHub pour la gestion de projets et la collaboration.",
    category: "Outils de développement et de collaboration",
    knowledge: "Je sais",
    experience:
      "J'ai géré des projets sur GitHub, en utilisant des issues, des projets et des pull requests pour suivre les tâches, coordonner les efforts et faciliter la revue de code.",
    level: "Avancé",
    type: "Technique",
  },
  {
    title:
      "Compréhension des méthodologies agiles, telles que Scrum et Kanban.",
    category: "Développement Agile",
    knowledge: "J’ai appris",
    experience:
      "J'ai travaillé dans des équipes agiles en suivant les pratiques de Scrum, aux revues de sprint et aux rétrospectives pour améliorer continuellement les processus de développement.",
    level: "Intermédiaire",
    type: "Transversal",
  },
  {
    title:
      "Compétences en communication pour expliquer et justifier les choix techniques.",
    category: "Communication",
    knowledge: "Je sais",
    experience:
      "J'ai communiqué efficacement avec les membres de l'équipe technique et les parties prenantes non techniques, en traduisant les concepts techniques en termes accessibles et en justifiant les décisions prises lors de réunions et de présentations.",
    level: "Avancé",
    type: "Transversal",
  },
  {
    title: "Capacité à rédiger des documents techniques clairs et précis.",
    category: "Communication",
    knowledge: "Je sais",
    experience:
      "J'ai rédigé des documents techniques décrivant l'architecture logicielle, les flux de données et les meilleures pratiques de développement, en veillant à ce qu'ils soient compréhensibles pour différents publics, des développeurs aux décideurs.",
    level: "Avancé",
    type: "Transversal",
  },
];

export const qualitiesData = [
  {
    title:
      "Capacité à travailler de manière autonome et à gérer son temps efficacement.",
    category: "Autonomie",
    knowledge: "Je sais",
    experience:
      "Pendant mon alternance chez la CPAM de la Somme, j'ai mené à bien plusieurs projets de développement web sans supervision directe, en respectant les délais et en gérant les priorités de manière autonome.",
    level: "Avancé",
    type: "Transversale",
  },
  {
    title:
      "Capacité à s'adapter à de nouvelles technologies et à divers environnements de projet.",
    category: "Adaptabilité",
    knowledge: "Je peux",
    experience:
      "J'ai travaillé sur des projets utilisant diverses technologies comme React, Express.js, et Symfony, et je me suis rapidement adapté aux spécificités de chaque framework.",
    level: "Avancé",
    type: "Technique",
  },
  {
    title: "Flexibilité dans le travail sur différents types de projets.",
    category: "Adaptabilité",
    knowledge: "Je sais",
    experience:
      "J'ai été capable de passer de méthodologies de développement traditionnelles comme le cycle en V à des approches plus agiles comme Scrum ou Kanban en fonction des besoins spécifiques de chaque projet et de l'évolution des exigences du client.",
    level: "Avancé",
    type: "Transversale",
  },
  {
    title:
      "Implication dans les projets internes et dans les activités de l'entreprise.",
    category: "Engagement",
    knowledge: "Je suis",
    experience:
      "J'ai contribué à des projets visant à améliorer l'efficacité opérationnelle, la qualité des produits ou services, et la satisfaction des clients.",
    level: "Intermédiaire",
    type: "Transversale",
  },
  {
    title: "Une véritable passion pour le développement et l'informatique.",
    category: "Passion et Curiosité",
    knowledge: "Je suis",
    experience:
      "J'ai créé plusieurs projets personnels en dehors du travail, pour approfondir mes compétences en développement.",
    level: "Avancé",
    type: "Transversale",
  },
  {
    title: "Désir constant d'apprendre et de tester de nouvelles technologies.",
    category: "Passion et Curiosité",
    knowledge: "Je suis",
    experience:
      "J'ai suivi des cours en ligne et obtenu des certifications en nouvelles technologies, que j'ai ensuite appliquées dans des projets personnels.",
    level: "Avancé",
    type: "Technique",
  },
  {
    title: "Aptitude à travailler en équipe et à s'entraider.",
    category: "Esprit d'équipe et Collaboration",
    knowledge: "Je sais",
    experience:
      "J'ai collaboré étroitement avec un collègue développeur sur plusieurs projets, assurant une communication fluide et une répartition efficace des tâches.",
    level: "Avancé",
    type: "Transversale",
  },
  {
    title:
      "Volonté de partager ses connaissances et ses expériences avec ses collègues",
    category: "Esprit d'équipe et Collaboration",
    knowledge: "Je suis",
    experience:
      "J'ai participé à plusieurs réunion en interne pour partager mes connaissances en développement web avec mon collègue, facilitant ainsi sa montée en compétence.",
    level: "Avancé",
    type: "Transversale",
  },
];
