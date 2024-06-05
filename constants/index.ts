import { EducationItem, ExperienceItem, Link } from "@/types";

export const navLinks: Link[] = [
  {
    label: "Accueil",
    url: "/",
    icon: "Home",
  },
  {
    label: "Compétences",
    url: "/skills",
    icon: "Brain",
  },
  {
    label: "Références",
    url: "/references",
    icon: "BookMarked",
  },
  {
    label: "Contact",
    url: "/contact",
    icon: "Contact",
  },
];

export const socialLinks: Link[] = [
  {
    label: "Github",
    url: "https://github.com/jleveneur/portfolio",
    icon: "GitHub",
  },
  {
    label: "Linkedin",
    url: "https://www.linkedin.com/in/jleveneur/",
    icon: "Linkedin",
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

export const education: EducationItem[] = [
  {
    degree: "Baccalauréat Scientifique",
    dates: "2016 - 2019",
    institution: "Lycée Condorcet, Méru 60110",
    description:
      "Obtention du Baccalauréat Scientifique avec spécialité Sciences de la Vie et de la Terre. Ce cursus a posé les bases scientifiques nécessaires pour ma poursuite d'études en informatique.",
    projects: [],
  },
  {
    degree: "DUT Informatique",
    dates: "2019 - 2021",
    institution: "Institut universitaire de technologie, Amiens 80025",
    description:
      "Spécialité développement Web. Cette formation m'a permis d'acquérir des compétences solides en programmation, développement web et gestion de projets informatiques.",
    projects: [],
  },
  {
    degree: "Licence Professionnelle en Réseaux et Génie Informatique",
    dates: "2021 - 2022",
    institution: "Institut universitaire de technologie, Amiens 80025",
    description:
      "Spécialité Enterprise Resource Planning (ERP). Cette formation m'a permis d'approfondir mes connaissances en matière de réseaux informatiques, de gestion de systèmes d'information et de progiciels ERP.",
    projects: [],
  },
  {
    degree: "Master M.I.A.G.E.",
    dates: "2022 - 2024",
    institution:
      "UFR des Sciences, Université de Picardie Jules-Verne, Amiens 80025",
    description:
      "Parcours Ingénierie à la transformation digitale. Ce cursus me permet d'acquérir des compétences avancées en gestion de projet, développement d'applications métiers et transformation digitale des entreprises.",
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

export const experience: ExperienceItem[] = [
  {
    position: "Stagiaire concepteur et développeur applicatifs",
    dates: "Mars 2021 - Juin 2021 (10 Semaines)",
    location: "CPAM de la Somme, Amiens 80021",
    description:
      "J'ai participé au développement d'une application web d'inventaire de prêt de matériel informatique en utilisant le framework Symfony. Cette application a permis de centraliser la gestion des prêts de petit matériel (souris, clavier, casque, etc.), d'améliorer la traçabilité et de réduire les pertes.",
    projects: [
      {
        title: "Application d'inventaire de prêt de matériel",
        description:
          "Développement d’une application pour inventorier le prêt de petit matériel (souris, clavier, casque, etc.) en utilisant Symfony.",
      },
    ],
  },
  {
    position: "Alternant concepteur et développeur applicatifs",
    dates: "Septembre 2021 - Septembre 2022",
    location: "CPAM de la Somme, Amiens 80021",
    description:
      "J'ai apporté une contribution significative à divers projets clés, comme le développement d'une API RESTful pour la gestion centralisée des informations des agents et la création d'une application web pour le recensement et la gestion des licences des applications métiers. Mon expertise a également permis d'optimiser le processus de déploiement des applications grâce à la mise en place d'outils d'automatisation.",
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
    position: "Alternant développeur full-stack",
    dates: "Septembre 2022 - Mars 2023",
    location: "PIDEV, Camon 80450",
    description:
      "Maîtrisant les technologies Symfony, React.js et WordPress, j'ai apporté une valeur ajoutée significative à PIDEV en contribuant à la maintenance du site web interne, au développement d'une application web pour la gestion des entretiens techniques des véhicules et à la création d'une application interne de suivi de projets.",
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
    position: "Alternant concepteur et développeur web",
    dates: "Avril 2023 - aujourd’hui",
    location: "CPAM de la Somme, Amiens 80021",
    description:
      "En cours de développement d'une application web de revue des habilitations pour garantir la sécurité informatique et d'une application de gestion de projet d'entreprise pour optimiser l'organisation des équipes, je maîtrise les technologies Symfony et React.js pour créer des interfaces web performantes et conviviales.",
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
