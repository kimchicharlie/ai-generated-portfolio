import { PortfolioData } from "@/types/portfolio";

export const portfolioData: PortfolioData = {
  personalInfo: {
    name: "CHARLIE HENIN",
    title: {
      en: "FULL STACK DEVELOPER",
      fr: "DÉVELOPPEUR FULL STACK",
    },
    about: {
      en: "Confirmed Full Stack Developer with 7+ years experience implementing web services in agile environments. I love frontend & backend development as much as DevOps.",
      fr: "Développeur Full Stack avec 7 ans d'expérience dans le développement de services web dans des environnements agiles. J'aime le frontend/backend et le DevOps.",
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
        en: "Software Developer",
        fr: "Développeur Full Stack",
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
          "Develop and maintain music streaming platform features using React and modern web technologies.",
          "Collaborate with cross-functional teams to deliver high-quality user experiences.",
          "Implement responsive designs and optimize application performance.",
        ],
        fr: [
          "Développer et maintenir les fonctionnalités de la plateforme de streaming musical avec React et des technologies web modernes.",
          "Collaborer avec des équipes pluridisciplinaires pour offrir des expériences utilisateur de haute qualité.",
          "Implémenter des designs responsive et optimiser les performances des applications.",
        ],
      },
      technologies: ["React", "TypeScript", "JavaScript", "Node.js"],
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
          "Maintain and improve Botpress Studio, the interface used by users to build chatbots.",
          "Answer users questions on the Botpress Discord.",
        ],
        fr: [
          "Maintenir et améliorer Studio, l'interface Botpress de création de bots.",
          "Répondre aux questions des utilisateurs sur le Discord Botpress.",
        ],
      },
      technologies: ["Botpress"],
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
        en: ["Work as a React/Node developer consultant at Intact Lab."],
        fr: ["Travailler en tant que consultant React/Node à Intact Lab."],
      },
      technologies: ["React", "Node.js"],
      type: "contract",
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
        ],
        fr: [
          "Maintenir et améliorer Lobby, le logiciel utilisé par les copropriétaires et gestionnaires de copro.",
          "Développer, documenter et déployer un OCR afin d'extraire des données de documents financiers.",
          "Implémenter un échéancier de prélèvements automatiques en utilisant Stripe + Step Functions.",
        ],
      },
      technologies: ["Bellman"],
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
          "Maintain and improve the Sigfox ecosystem platforms (see services list below).",
          "Migrate applications from OVH custom environment to GCP based Kubernetes infrastructure.",
          "Develop and document a library of React components implementing the Sigfox design system constraints.",
        ],
        fr: [
          "Maintenir et améliorer les plateformes de l'écosystème Sigfox.",
          "Migrer les services depuis un environnement OVH custom vers une infrastructure Kubernetes hébergée sur GCP.",
          "Développer et documenter une librairie de composants React implémentant les contraintes du design system de Sigfox.",
        ],
      },
      technologies: [
        "Build",
        "Partner",
        "Buy",
        "Support",
        "Sens'it",
        "Taxonomies",
        "Flive",
        "Bingo",
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
      technologies: ["Live Booker", "Next Concert", "Hey Alex"],
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
          'Winning the "Toulouse Défi Numérique" Dataviz Award for the project "Où vont nos impôts ?".',
          "Development of a domotic solution to regulate temperature and brightness through switchable glass for the Epitech Innovative Project.",
        ],
        fr: [
          "Apprentissage des différents concepts et paradigmes de programmation (C, C++, Ocaml, Python, ASM, Java). Pédagogie par projets.",
          'Lauréat du prix Dataviz du "Toulouse Défi Numérique" pour le projet "Où vont nos impôts ?".',
          "Développement d'une solution domotique pour réguler température et luminosité par opacité contrôlée dans le cadre du Epitech Innovative Project.",
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
          "Operating system, software Developering, korean culture & korean language courses.",
        ],
        fr: [
          "Systèmes d'exploitation, architecture logiciel, culture et langue coréenne.",
        ],
      },
    },
  ],
  technologies: [
    { name: "JavaScript", category: "frontend" },
    { name: "TypeScript", category: "frontend" },
    { name: "React.js", category: "frontend" },
    { name: "Next.js", category: "frontend" },
    { name: "HTML5", category: "frontend" },
    { name: "CSS3", category: "frontend" },
    { name: "TailwindCSS", category: "frontend" },
    { name: "Apollo", category: "frontend" },
    { name: "Node.js", category: "backend" },
    { name: "Express", category: "backend" },
    { name: "Koa", category: "backend" },
    { name: "GraphQL", category: "backend" },
    { name: "Prisma", category: "backend" },
    { name: "MongoDB", category: "database" },
    { name: "SQL", category: "database" },
    { name: "Redis", category: "database" },
    { name: "Docker", category: "tools" },
    { name: "Kubernetes", category: "tools" },
    { name: "AWS", category: "tools" },
    { name: "Heroku", category: "tools" },
    { name: "Git", category: "tools" },
    { name: "GitHub", category: "tools" },
    { name: "Jenkins", category: "tools" },
    { name: "Jest", category: "tools" },
    { name: "Cypress", category: "tools" },
    { name: "Webpack", category: "tools" },
    { name: "Linux", category: "other" },
    { name: "macOS", category: "other" },
    { name: "Micro services", category: "other" },
    { name: "Agile", category: "other" },
    { name: "Scrum", category: "other" },
    { name: "Jira", category: "other" },
  ],
  hobbies: [
    { name: { en: "Sports", fr: "Sports" }, icon: "⚽" },
    { name: { en: "Hiking", fr: "Randonnées" }, icon: "🥾" },
    { name: { en: "Travels", fr: "Voyages" }, icon: "✈️" },
    { name: { en: "Guitar", fr: "Guitare" }, icon: "🎸" },
    { name: { en: "Coding", fr: "Programmation" }, icon: "💻" },
    { name: { en: "Video games", fr: "Jeux vidéos" }, icon: "🎮" },
  ],
};
