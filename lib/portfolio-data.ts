import { PortfolioData } from "@/types/portfolio";

export const portfolioData: PortfolioData = {
  personalInfo: {
    name: "CHARLIE HENIN",
    title: {
      en: "FULL STACK DEVELOPER",
      fr: "DÉVELOPPEUR FULL STACK",
    },
    about: {
      en: "I've been building full-stack web apps since 2013, mostly at startups before joining Stingray. I've helped launch products, fix tricky issues, and keep systems running smoothly as they grew. Lately I've been experimenting with AI tools like Cursor to speed things up and make coding more fun. I try to be a steady contributor, adapt to what the team needs, and help projects evolve and scale smoothly.",
      fr: "Développeur full-stack depuis 2013, j'ai principalement travaillé dans des startups avant de rejoindre Stingray. J'ai participé au lancement de produits, résolu des problèmes techniques et assuré la stabilité des systèmes à mesure qu'ils évoluaient. Aujourd'hui, j'explore les outils d'IA comme Cursor pour rendre le développement plus rapide et agréable. Je m'efforce d'être un contributeur fiable, de m'adapter aux besoins de l'équipe et d'accompagner les projets dans leur croissance.",
    },
  },
  contact: {
    phone: "+33.629.68.53.34",
    email: "charlie.henin@gmail.com",
    website: "www.charliehenin.com",
    linkedin: "charlie-henin",
    github: "kimchicharlie",
  },
  experience: [
    {
      title: {
        en: "Full Stack Software Developer",
        fr: "Développeur Logiciel Full Stack",
      },
      company: "STINGRAY",
      location: {
        en: "Montreal, Canada",
        fr: "Montréal, Canada",
      },
      period: {
        en: "Jul 2024 - Present",
        fr: "Juil 2024 - Présent",
      },
      description: {
        en: [
          "Leverage performance-oriented web technologies (Lightning.js, Service Workers, AudioWorklet, WebAssembly, etc.) to run CPU-intensive applications on low-CPU smart TVs.",
          "Develop and maintain music streaming platform features using React and modern web technologies.",
          "Collaborate with Samsung and develop two Stingray PIRS apps for the Samsung VXT platform.",
        ],
        fr: [
          "Exploiter des technologies web orientées performance (Lightning.js, Service Workers, AudioWorklet, WebAssembly, etc.) pour exécuter des applications de karaoké sur des téléviseurs intelligents à faible CPU.",
          "Développer et maintenir les fonctionnalités de la plateforme de streaming musical avec React et des technologies web modernes.",
          "Collaborer avec Samsung et développer deux applications Stingray PIRS pour la plateforme Samsung VXT.",
        ],
      },
      technologies: [
        "React",
        "TypeScript",
        "JavaScript",
        "Node.js",
        "Next.js",
        "Lightning.js",
        "Service Workers",
        "AudioWorklet",
        "WebAssembly",
      ],
      type: "full-time",
    },
    {
      title: {
        en: "Full Stack Developer",
        fr: "Full Stack Developer",
      },
      company: "BOTPRESS",
      location: {
        en: "Montreal, Canada",
        fr: "Montréal, Canada",
      },
      period: {
        en: "Jun 2023 - Jan 2024",
        fr: "Juin 2023 - Jan 2024",
      },
      description: {
        en: [
          "Own and implement new features on Botpress Studio (where users build their chatbot)",
          "Open source Botpress integrations development",
          "Answer users questions on the Botpress Discord.",
        ],
        fr: [
          "Prendre en charge et implémenter de nouvelles fonctionnalités sur Botpress Studio (l'interface où les utilisateurs créent leur chatbot)",
          "Développement des intégrations open source de Botpress",
          "Répondre aux questions des utilisateurs sur le Discord Botpress.",
        ],
      },
      technologies: [
        "React",
        "Node.js",
        "TypeScript",
        "Next.js",
        "Supabase",
        "Vercel",
        "AWS",
        "Docker",
      ],
      type: "full-time",
    },
    {
      title: {
        en: "Full Stack Developer",
        fr: "Full Stack Developer",
      },
      company: "MAPLR",
      location: {
        en: "Montreal, Canada",
        fr: "Montréal, Canada",
      },
      period: {
        en: "Jan 2023 - Jun 2023",
        fr: "Jan 2023 - Juin 2023",
      },
      description: {
        en: [
          "Develop the frontend of an internal project from scratch",
          "Work as a React/Node developer consultant at Intact Lab.",
        ],
        fr: [
          "Développer le frontend d'un projet interne de zéro",
          "Travailler en tant que consultant React/Node à Intact Lab.",
        ],
      },
      technologies: ["React", "Node.js"],
      type: "full-time",
    },
    {
      title: {
        en: "Full Stack Developer",
        fr: "Full Stack Developer",
      },
      company: "BELLMAN",
      location: {
        en: "Paris, France (Remote)",
        fr: "Télétravail / Paris, France",
      },
      period: {
        en: "Oct 2020 - Jan 2023",
        fr: "Oct 2020 - Jan 2023",
      },
      description: {
        en: [
          "Maintain and improve Lobby, the software used by landlords and property managers.",
          "Build, document and deploy an OCR service to extract essential data from financial documents.",
          "Implement a payment scheduling system using Node, React, Stripe and AWS Step functions.",
          "Build an IVR to dispatch all calls to the Bellman phone number on the right service.",
          "Implement a remote voting system on Lobby to allow landlords to vote for general meetings online.",
        ],
        fr: [
          "Maintenir et améliorer Lobby, le logiciel utilisé par les copropriétaires et gestionnaires de copro.",
          "Développer, documenter et déployer un OCR afin d'extraire des données de documents financiers.",
          "Implémenter un échéancier de prélèvements automatiques en utilisant Stripe + Step Functions.",
          "Développer un IVR pour rediriger toutes les appels vers le numéro de téléphone de Bellman sur le bon service",
          "Implémenter un système de vote à distance sur Lobby pour permettre aux copropriétaires de voter pour les assemblées générales en ligne.",
        ],
      },
      technologies: [
        "Node.js",
        "React",
        "TypeScript",
        "Stripe",
        "AWS Step Functions",
        "OCR",
        "GraphQL",
        "Prisma",
        "Next.js",
      ],
      type: "full-time",
    },
    {
      title: {
        en: "Full Stack Developer",
        fr: "Ingénieur Full Stack",
      },
      company: "SIGFOX",
      location: {
        en: "Labège, France",
        fr: "Labège, France",
      },
      period: {
        en: "Oct 2018 - Oct 2020",
        fr: "Oct 2018 - Oct 2020",
      },
      description: {
        en: [
          "Maintain and improve the Sigfox ecosystem platforms: Buy, Build, Partner, Sens'it, Buy, Support.",
          "Rewrite completely legacy Node.js REST API with Koa.",
          "Migrate applications from OVH custom environment to GCP based Kubernetes infrastructure.",
          "Develop and document a library of React components implementing the Sigfox design system constraints.",
          "Write a mobile first Bingo application to demonstrate a low cost Sigfox device at the Sigfox Connect event in Singapore.",
          "Write and document npm packages from modules reused through our codebases.",
        ],
        fr: [
          "Maintenir et améliorer les plateformes de l'écosystème Sigfox: Buy, Build, Partner, Sens'it, Buy, Support.",
          "Réécrire complètement l'API REST legacy Node.js avec Koa.",
          "Migrer les services depuis un environnement OVH custom vers une infrastructure Kubernetes hébergée sur GCP.",
          "Développer et documenter une librairie de composants React implémentant les contraintes du design system de Sigfox.",
          "Écrire une application mobile Bingo pour démontrer un dispositif Sigfox à faible coût lors de l'événement Sigfox Connect à Singapour.",
          "Écrire et documenter des packages npm à partir de modules réutilisés dans nos codebases.",
        ],
      },
      technologies: [
        "React",
        "Node.js",
        "styled-components",
        "Koa",
        "Kubernetes",
        "MongoDB",
        "Redis",
        "GraphQL",
        "GCP",
        "OVH",
      ],
      type: "full-time",
    },
    {
      title: {
        en: "Full Stack Developer",
        fr: "Développeur Full Stack",
      },
      company: "MAESTRO CORPORATION",
      location: {
        en: "Toulouse, France",
        fr: "Toulouse, France",
      },
      period: {
        en: "Sep 2016 - Oct 2018",
        fr: "Sep 2016 - Oct 2018",
      },
      description: {
        en: [
          "Development of high traffic platforms in the ticketing industry & various business applications.",
        ],
        fr: [
          "Développement de plateformes à fort trafic dans l'industrie de la billetterie et des applications métiers.",
        ],
      },
      technologies: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Redux",
        "Webpack",
        "Docker",
        "Elasticsearch",
      ],
      type: "full-time",
    },
    {
      title: {
        en: "Intern",
        fr: "Stagiaire",
      },
      company: "MAESTRO CORPORATION",
      location: {
        en: "Toulouse, France",
        fr: "Toulouse, France",
      },
      period: {
        en: "Oct 2014 - Oct 2015",
        fr: "Oct 2014 - Oct 2015",
      },
      description: {
        en: [],
        fr: [],
      },
      technologies: [],
      type: "internship",
    },
  ],
  education: [
    {
      degree: {
        en: "Expert of Information Technologies",
        fr: "Expert en Technologies de l'Information",
      },
      institution: "EPITECH",
      location: {
        en: "France",
        fr: "France",
      },
      period: {
        en: "2012 - 2017",
        fr: "2012 - 2017",
      },
      description: {
        en: [
          "Learning programming concepts/paradigms (C, C++, Ocaml, Python, ASM, Java) through the development of multiple small projects.",
          "Courses on various topics including mathematics, network, project management, english, uml, entrepreneurship.",
          'Winning the "Toulouse Défi Numérique" Dataviz Award for the project "Où vont nos impôts ?".',
          "Development of a domotic solution to regulate temperature and brightness through switchable glass for the Epitech Innovative Project.",
          'Vice president of the "BDE" (Students union): animating the campus life by organizing small trips, videogames tournaments, sports games, ...',
        ],
        fr: [
          "Apprentissage des différents concepts et paradigmes de programmation (C, C++, Ocaml, Python, ASM, Java). Pédagogie par projets.",
          "Cours sur divers sujets incluant mathématiques, réseau, gestion de projet, anglais, UML, entrepreneuriat.",
          'Lauréat du prix Dataviz du "Toulouse Défi Numérique" pour le projet "Où vont nos impôts ?".',
          "Développement d'une solution domotique pour réguler température et luminosité par opacité contrôlée dans le cadre du Epitech Innovative Project.",
          'Vice-président du "BDE" (Union des étudiants): animer la vie étudiante en organisant des petits voyages, des tournois de jeux vidéos, des événements sportifs, ...',
        ],
      },
      achievements: {
        en: [
          "Toulouse Défi Numérique Dataviz Award",
          "Epitech Innovative Project",
        ],
        fr: [
          "Prix Dataviz Toulouse Défi Numérique",
          "Epitech Innovative Project",
        ],
      },
    },
    {
      degree: {
        en: "Master 1 in Computer Sc.",
        fr: "Master 1 Computer Sc.",
      },
      institution: "CHUNG-ANG UNIVERSITY",
      location: {
        en: "South Korea",
        fr: "Corée du Sud",
      },
      period: {
        en: "2015 - 2016",
        fr: "2015 - 2016",
      },
      description: {
        en: [
          "Operating system, software engineering, korean culture & korean language courses.",
          "Social, cultural experience, great improvement of english skills.",
          "Activities and societies: Libero Soccer Team, Korea club, ...",
        ],
        fr: [
          "Systèmes d'exploitation, architecture logiciel, culture et langue coréenne.",
          "Expérience sociale, culturelle, grande amélioration des compétences en anglais.",
          "Activités et associations: Libero Soccer Team, Korea club, ...",
        ],
      },
    },
  ],
  technologies: [
    { name: "JavaScript", category: "frontend" },
    { name: "TypeScript", category: "frontend" },
    { name: "React.js", category: "frontend" },
    { name: "Next.js", category: "frontend" },
    { name: "HTML", category: "frontend" },
    { name: "CSS", category: "frontend" },
    { name: "Tailwind", category: "frontend" },
    { name: "Apollo", category: "frontend" },
    { name: "Cypress", category: "frontend" },
    { name: "Service Workers", category: "frontend" },
    { name: "AudioWorklet", category: "frontend" },
    { name: "WebAssembly", category: "frontend" },
    { name: "Styled Components", category: "frontend" },
    { name: "Node.js", category: "backend" },
    { name: "Express", category: "backend" },
    { name: "Koa", category: "backend" },
    { name: "GraphQL", category: "backend" },
    { name: "Prisma", category: "backend" },
    { name: "MongoDB", category: "backend" },
    { name: "SQL", category: "backend" },
    { name: "Redis", category: "backend" },
    { name: "Micro services", category: "backend" },
    { name: "Docker", category: "other" },
    { name: "Kubernetes", category: "other" },
    { name: "AWS", category: "other" },
    { name: "Git", category: "other" },
    { name: "GitHub", category: "other" },
    { name: "Gitlab", category: "other" },
    { name: "Jenkins", category: "other" },
    { name: "Jest", category: "other" },
    { name: "Linux", category: "other" },
    { name: "macOS", category: "other" },
    { name: "Agile", category: "other" },
    { name: "Scrum", category: "other" },
    { name: "Jira", category: "other" },
    { name: "Stripe", category: "other" },
  ],
  hobbies: [
    { name: { en: "Sports", fr: "Sports" }, icon: "⚽" },
    { name: { en: "Hiking", fr: "Randonnées" }, icon: "🥾" },
    { name: { en: "Travels", fr: "Voyages" }, icon: "✈️" },
    { name: { en: "Guitar", fr: "Guitare" }, icon: "🎸" },
    { name: { en: "Singing", fr: "Chanter" }, icon: "🎤" },
    { name: { en: "Video games", fr: "Jeux vidéos" }, icon: "🎮" },
  ],
};
