export const personalInfo = {
  name: "Saurabh Yadav",
  title: "Computer Science Undergraduate | Full-Stack Developer | Software Engineer",
  email: "saurabhyadav082005@gmail.com",
  phone: "+91-8052680534",
  location: "Ghaziabad, Uttar Pradesh, India",
  profileImage: "/saurabh_profile.jpg",
  professionalSummary: "Computer Science undergraduate and aspiring Software Engineer with experience in full-stack and backend development using Java, JavaScript, React.js, Node.js, Express.js, MongoDB, MySQL, and REST APIs. Proficient in Data Structures Algorithms, OOP, DBMS, algorithm design, time and space complexity, and computational optimization. Built secure, scalable web applications featuring JWT authentication, role-based authorization, real-time communication, and database-driven REST APIs.",
  education: {
    degree: "Bachelor of Technology in Computer Science Engineering",
    college: "IMS Engineering College",
    location: "Ghaziabad, Uttar Pradesh",
    duration: "October 2023 – July 2027"
  },
  social: {
    github: "https://github.com/saurabh-yadav16",
    linkedin: "https://www.linkedin.com/in/saurabh-yadav-599b6a42b/",
    email: "mailto:saurabhyadav082005@gmail.com"
  },
  targetRoles: [
    "Software Engineer",
    "Full-Stack Developer",
    "Backend Developer"
  ],
  resumeUrl: "/Saurabh_Yadav_Resume.pdf"
};

export const heroContent = {
  heading: "Building secure, scalable web applications with real-time communication & AI integration.",
  supportingText: "Hi, I'm Saurabh Yadav — a Computer Science undergraduate and aspiring Software Engineer with hands-on experience building full-stack applications using React.js, Node.js, Express.js, MongoDB, MySQL, and REST APIs.",
  primaryCta: "View Projects",
  secondaryCta: "Download Resume",
  badges: ["React.js", "Node.js", "Express.js", "MongoDB", "OpenAI API", "MySQL", "TypeScript", "Socket.IO"]
};

export const aboutContent = {
  heading: "Professional Summary & Background",
  paragraphs: [
    "Computer Science undergraduate and aspiring Software Engineer with experience in full-stack and backend development using Java, JavaScript, React.js, Node.js, Express.js, MongoDB, MySQL, and REST APIs.",
    "Proficient in Data Structures Algorithms, OOP, DBMS, algorithm design, time and space complexity, and computational optimization. Built secure, scalable web applications featuring JWT authentication, role-based authorization, real-time communication, and database-driven REST APIs."
  ]
};

export const principles = [
  {
    id: "full-stack",
    title: "Full-Stack & Backend Development",
    description: "Building complete web applications using React.js, Node.js, Express.js, MongoDB, MySQL, Prisma, REST APIs, and bcrypt encryption.",
    icon: "Layers"
  },
  {
    id: "ai-systems",
    title: "AI Systems & OpenAI API",
    description: "Integrating OpenAI API for personalized mock interviews, resume-based question generation, ATS analysis, and 5-metric scoring.",
    icon: "Bot"
  },
  {
    id: "real-time",
    title: "Real-Time Systems",
    description: "Architecting real-time applications using Socket.IO for synchronized YouTube playback (10+ users) and role-specific donation status tracking.",
    icon: "Zap"
  },
  {
    id: "secure-backend",
    title: "Security & RBAC Authorization",
    description: "Configuring secure REST API workflows with JWT authentication, Role-Based Access Control (RBAC), bcrypt hashing, and GitHub OAuth.",
    icon: "ShieldCheck"
  }
];

export const projects = [
  {
    id: "syncparty",
    title: "SyncParty",
    subtitle: "Real-Time Synced YouTube Watch Platform",
    featured: true,
    description: "Built a full-stack MERN application with synchronized YouTube playback and real-time chat using Socket.IO, supporting 10+ concurrent users across shared watch rooms.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.IO", "Tailwind CSS", "JWT"],
    github: "https://github.com/saurabh-yadav16",
    liveDemo: "https://syncparty-demo.vercel.app",
    features: [
      "Built a full-stack MERN application with synchronized YouTube playback and real-time chat using Socket.IO, supporting 10+ concurrent users across shared watch rooms.",
      "Implemented JWT authentication, password-protected rooms, and RBAC across 2 user roles (Host and Participant), with 4 MongoDB data models for persistent session and chat data.",
      "Created a responsive React.js + Tailwind CSS interface with dark mode, room management, and real-time event handling across 3+ core interactive features."
    ],
    caseStudy: {
      overview: "SyncParty is a full-stack MERN watch-party platform engineered to synchronize YouTube playback state and real-time multi-user communication.",
      problem: "Co-watching video content remotely usually results in playback desynchronization and high bandwidth overhead with standard screen sharing.",
      solution: "Engineered a Socket.IO event system broadcasting play, pause, and seek vectors across room participants with instant state sync.",
      myRole: "Full-Stack Developer — Built Socket event handlers, 4 MongoDB data models, JWT auth, and React player UI.",
      architecture: [
        "React Frontend -> Socket.IO Client -> Embedded YouTube iFrame API",
        "Express Backend -> Socket.IO Server -> Room Controller Service",
        "MongoDB -> 4 Data Models for Persistent Session & Chat Data"
      ],
      challenges: [
        "Eliminating playback drift across 10+ concurrent users during rapid seek commands.",
        "Role-based control enforcement for Hosts versus Participants."
      ]
    }
  },
  {
    id: "foodcare",
    title: "FoodCare",
    subtitle: "Real-Time Food Redistribution & Donation Platform",
    featured: true,
    description: "Architected a full-stack MERN food redistribution platform connecting 3 user roles—restaurants, NGOs, and volunteers through role-based donation, acceptance, and delivery workflows.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Mongoose", "Socket.IO", "JWT", "REST APIs", "GeoJSON", "Vite"],
    github: "https://github.com/saurabh-yadav16/Food-Waste-Management-System",
    liveDemo: "https://food-waste-management-system-seven.vercel.app/",
    features: [
      "Architected a full-stack MERN food redistribution platform connecting 3 user roles—restaurants, NGOs, and volunteers through role-based donation, acceptance, and delivery workflows.",
      "Secured REST APIs with Express.js, JWT, RBAC, and Socket.IO, enabling real-time donation updates across 3 role-specific dashboards.",
      "Integrated MongoDB GeoJSON geospatial queries into a 4+ stage workflow covering donation creation, NGO matching, pickup, and delivery with notifications and status tracking."
    ],
    caseStudy: {
      overview: "FoodCare is a real-time MERN food redistribution platform linking restaurants, NGOs, and volunteers for efficient surplus food delivery.",
      problem: "Tons of edible surplus food are wasted daily due to inefficient communication and lack of spatial proximity dispatch between donors and charities.",
      solution: "Integrated MongoDB GeoJSON geospatial queries for location matching and Socket.IO for instant donation claim dispatches.",
      myRole: "Full-Stack Engineer — Implemented MongoDB GeoJSON spatial queries, Express REST endpoints, and 3 role-specific dashboards.",
      architecture: [
        "React.js + Vite Frontend -> REST & Socket.IO Client",
        "Express.js Backend -> JWT RBAC Middleware -> GeoJSON Query Controller",
        "MongoDB Atlas -> GeoSpatial Collections & Real-Time Event Engine"
      ],
      challenges: [
        "Optimizing MongoDB GeoJSON queries across 4+ workflow stages (creation, matching, pickup, delivery).",
        "Managing real-time status updates across 3 role-specific dashboards."
      ]
    }
  },
  {
    id: "ai-interview-coach",
    title: "AI Interview Coach",
    subtitle: "Smart AI-Powered Technical Mock Interview & ATS Platform",
    featured: true,
    description: "Designed a full-stack MERN AI Interview Coach integrating the OpenAI API for 3 core AI features: personalized mock interviews, resume-based question generation, and ATS analysis.",
    technologies: ["React.js", "Vite", "Node.js", "Express.js", "REST APIs", "OpenAI API", "MongoDB", "JWT", "bcrypt", "MongoDB Atlas"],
    github: "https://github.com/saurabh-yadav16/AI-Interview-Coach",
    liveDemo: "https://ai-interview-coach-eta-sandy.vercel.app/",
    features: [
      "Designed a full-stack MERN AI Interview Coach integrating the OpenAI API for 3 core AI features: personalized mock interviews, resume-based question generation, and ATS analysis.",
      "Implemented an AI evaluation system across 5 performance metrics—correctness, technical depth, completeness, relevance, and clarity—to generate structured interview feedback and scoring.",
      "Configured secure REST API workflows using JWT and bcrypt with MongoDB Atlas, enabling performance analytics, progress tracking, and personalized 7-day improvement plans."
    ],
    caseStudy: {
      overview: "AI Interview Coach is a full-stack MERN SaaS platform integrating the OpenAI API for automated, rubric-driven technical interview evaluations and ATS resume analysis.",
      problem: "Software engineering applicants lack affordable, instant technical mock interview feedback calibrated to real hiring rubrics.",
      solution: "Integrated OpenAI API to evaluate candidate answers across 5 performance metrics and parse resumes for personalized 7-day improvement plans.",
      myRole: "Full-Stack Developer — Built OpenAI API integration, JWT + bcrypt REST APIs, MongoDB Atlas schema, and Vite dashboard.",
      architecture: [
        "React.js + Vite Frontend -> REST API Client -> Radar Analytics Chart UI",
        "Node.js + Express.js Backend -> OpenAI API Integration -> 5-Metric Evaluator",
        "MongoDB Atlas -> User Analytics & 7-Day Plan Store"
      ],
      challenges: [
        "Structuring OpenAI API prompts for consistent 5-metric scoring (correctness, depth, completeness, relevance, clarity).",
        "Securing REST API workflows using JWT, bcrypt password hashing, and MongoDB Atlas."
      ]
    }
  }
];

export const techStackCategories = [
  {
    category: "Languages",
    skills: ["Java", "JavaScript", "TypeScript", "C", "SQL", "HTML5", "CSS3"]
  },
  {
    category: "Frontend",
    skills: ["React.js", "Tailwind CSS", "EJS", "Responsive Web Design"]
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express.js", "REST APIs", "Socket.IO"]
  },
  {
    category: "Databases",
    skills: ["MongoDB", "MySQL", "MongoDB Atlas", "Mongoose", "Prisma", "Database Design"]
  },
  {
    category: "Authentication & Security",
    skills: ["JWT", "Role-Based Access Control (RBAC)", "GitHub OAuth", "bcrypt"]
  },
  {
    category: "Tools & Environment",
    skills: ["Git", "GitHub", "VS Code", "Postman", "IntelliJ IDEA", "Vite"]
  },
  {
    category: "Core CS",
    skills: ["Data Structures Algorithms (Java)", "Object-Oriented Programming (OOP)", "Database Management Systems (DBMS)", "Operating Systems", "Computer Networks"]
  }
];

export const skillBadges = [
  "Java", "JavaScript", "TypeScript", "C", "SQL", "HTML5", "CSS3",
  "React.js", "Node.js", "Express.js", "MongoDB", "MySQL", "MongoDB Atlas", "Mongoose", "Prisma",
  "Socket.IO", "JWT", "RBAC", "GitHub OAuth", "bcrypt", "OpenAI API",
  "Git", "GitHub", "VS Code", "Postman", "IntelliJ IDEA", "Vite"
];

export const certifications = [
  {
    id: "eda-nasscom",
    title: "Exploratory Data Analysis",
    issuer: "NASSCOM",
    year: "2026",
    description: "Certified in data analysis techniques, statistical data manipulation, and exploratory visualization best practices.",
    icon: "BarChart3"
  },
  {
    id: "mern-nasscom",
    title: "Full Stack Development with MERN",
    issuer: "NASSCOM Foundation",
    year: "2026",
    description: "Comprehensive certification covering MongoDB, Express.js, React.js, Node.js, REST API design, and modern web deployment.",
    icon: "Code2"
  }
];
