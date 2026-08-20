export const personalInfo = {
  name: "Saurabh Yadav",
  title: "Computer Science Undergraduate | Full-Stack Developer | Software Engineer",
  email: "saurabhyadav082005@gmail.com",
  phone: "+91-8052680534",
  location: "Ghaziabad, Uttar Pradesh, India",
  profileImage: "/saurabh_profile.jpg",
  professionalSummary: "Computer Science undergraduate with hands-on experience building full-stack web applications using React, TypeScript, Node.js, Express.js, MySQL, and Prisma. Seeking Software Engineer and Full-Stack Developer roles, with a strong foundation in Data Structures and Algorithms, Object-Oriented Programming, Database Management Systems, and problem solving. Built AI powered developer tools with secure authentication, GitHub integration, and reliable backend workflows.",
  education: {
    degree: "B.Tech in Computer Science Engineering",
    college: "IMS Engineering College",
    location: "Ghaziabad, Uttar Pradesh",
    duration: "October 2023 – July 2027"
  },
  social: {
    github: "https://github.com/saurabh-yadav16",
    linkedin: "https://www.linkedin.com/in/saurabh-yadav-082005/",
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
  heading: "Building scalable full-stack applications with real-time experiences & AI developer tools.",
  supportingText: "Hi, I'm Saurabh Yadav — a Computer Science undergraduate and Full-Stack Developer with hands-on experience building full-stack web applications using React, TypeScript, Node.js, Express.js, MySQL, and Prisma.",
  primaryCta: "View Projects",
  secondaryCta: "Download Resume",
  badges: ["React.js", "Node.js", "Express.js", "MongoDB", "AI Engine", "MySQL", "TypeScript", "Socket.IO"]
};

export const aboutContent = {
  heading: "Professional Summary & Background",
  paragraphs: [
    "Computer Science undergraduate with hands-on experience building full-stack web applications using React, TypeScript, Node.js, Express.js, MySQL, and Prisma. Seeking Software Engineer and Full-Stack Developer roles, with a strong foundation in Data Structures and Algorithms, Object-Oriented Programming, Database Management Systems, and problem solving.",
    "Built AI powered developer tools with secure authentication, GitHub integration, and reliable backend workflows. Proficient in designing secure REST APIs, real-time WebSocket communications with Socket.IO, and geospatial location querying with MongoDB GeoJSON."
  ]
};

export const principles = [
  {
    id: "full-stack",
    title: "Full-Stack Development",
    description: "Building complete web applications using React, TypeScript, Node.js, Express.js, MySQL, MongoDB, Prisma, REST APIs, and authentication.",
    icon: "Layers"
  },
  {
    id: "ai-systems",
    title: "AI-Powered Systems",
    description: "Engineering intelligent multi-metric evaluation engines, ATS resume analyzers, and automated technical interview coaching tools.",
    icon: "Bot"
  },
  {
    id: "real-time",
    title: "Real-Time Systems",
    description: "Developing real-time experiences using Socket.IO, including synchronized YouTube playback, live chat, and donation status tracking.",
    icon: "Zap"
  },
  {
    id: "secure-backend",
    title: "Secure Backend Development",
    description: "Implementing REST APIs, JWT authentication, role-based access control (RBAC), GitHub OAuth, and reliable backend workflows.",
    icon: "ShieldCheck"
  }
];

export const projects = [
  {
    id: "ai-interview-coach",
    title: "AI Interview Coach",
    subtitle: "Smart AI-Powered Technical Mock Interview & ATS Platform",
    featured: true,
    description: "Built a production-ready full-stack MERN platform that helps software engineers prepare for technical interviews using AI question evaluation, ATS resume analysis, and custom performance feedback.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "AI Engine", "Tailwind CSS", "JWT", "REST API", "Vite"],
    github: "https://github.com/saurabh-yadav16/AI-Interview-Coach",
    liveDemo: "https://ai-interview-coach-eta-sandy.vercel.app/",
    features: [
      "Implemented a 5-dimension AI rubric scoring engine evaluating candidate responses on Correctness (30%), Technical Depth (25%), Completeness (20%), Relevance (15%), and Clarity (10%).",
      "Built ATS resume analyzer & parser to extract candidate skills, generate role-specific mock questions, and create custom 7-day interview improvement roadmaps.",
      "Designed a sleek glassmorphic MERN SaaS interface with JWT authentication, real-time analytics radar charts, and MongoDB data persistence."
    ],
    caseStudy: {
      overview: "AI Interview Coach is a full-stack MERN SaaS platform engineered to deliver automated, rubric-driven technical interview evaluations and ATS resume feedback.",
      problem: "Software engineering applicants lack affordable, instant technical mock interview feedback calibrated to real hiring rubrics.",
      solution: "Engineered a 5-metric AI evaluation engine coupled with an ATS resume parser to grade candidate answers and generate personalized 7-day technical prep roadmaps.",
      myRole: "Full-Stack Developer — Built Express AI rubric engine, ATS parser pipeline, JWT auth middleware, and React SaaS dashboard.",
      architecture: [
        "React + Vite Frontend -> Axios REST Client -> Radar Analytics Chart UI",
        "Express Backend -> AI Evaluation Engine -> ATS Resume Parser",
        "MongoDB -> Candidate Session & Rubric Scoring Store"
      ],
      challenges: [
        "Designing deterministic 5-metric rubric scoring prompts to avoid AI scoring variance.",
        "Extracting clean text and technical skills from diverse PDF and DOCX resume layouts."
      ]
    }
  },
  {
    id: "syncparty",
    title: "SyncParty",
    subtitle: "Real-Time Synced YouTube Watch Platform",
    featured: true,
    description: "Built a full-stack MERN watch-party platform with synchronized YouTube playback and real-time chat.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.IO", "Tailwind CSS", "JWT"],
    github: "https://github.com/saurabh-yadav16",
    liveDemo: "#",
    features: [
      "Built a full-stack MERN watch-party platform with synchronized YouTube playback and real-time chat.",
      "Implemented JWT authentication, password-protected rooms, and role-based access control for hosts and participants.",
      "Designed MongoDB persistence for users, rooms, chat history, and collaboration data to support reliable multi-user sessions.",
      "Developed a responsive React and Tailwind CSS interface with dark mode, room management, and real-time Socket.IO events."
    ],
    caseStudy: {
      overview: "SyncParty is a full-stack MERN watch-party platform engineered to synchronize YouTube playback state and real-time multi-user communication.",
      problem: "Co-watching video content remotely usually results in playback desynchronization and high bandwidth overhead with standard screen sharing.",
      solution: "Engineered a Socket.IO event system broadcasting play, pause, and seek vectors across room participants with instant state sync.",
      myRole: "Full-Stack Developer — Built Socket event handlers, MongoDB room persistence, JWT authentication, and React player UI.",
      architecture: [
        "React Frontend -> Socket.IO Client -> Embedded YouTube iFrame API",
        "Express Backend -> Socket.IO Server -> Room Controller Service",
        "MongoDB -> Auth & Room Metadata Persistence Store"
      ],
      challenges: [
        "Eliminating playback drift across high-latency clients during rapid seek commands.",
        "Role-based control enforcement for room hosts versus guest participants."
      ]
    }
  },
  {
    id: "food-waste-management",
    title: "Food Waste Management System",
    subtitle: "Real-Time Food Redistribution & Donation Platform",
    featured: true,
    description: "Developed a real-time food waste management platform connecting restaurants, NGOs, and volunteers to streamline food donation and redistribution.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Mongoose", "Socket.IO", "JWT", "REST API", "GeoJSON", "Vite"],
    github: "https://github.com/saurabh-yadav16/Food-Waste-Management-System",
    liveDemo: "https://food-waste-management-system-seven.vercel.app/",
    features: [
      "Developed a real-time food waste management platform connecting restaurants, NGOs, and volunteers to streamline food donation and redistribution.",
      "Implemented JWT authentication, Role-Based Access Control (RBAC), REST APIs, and Socket.IO for secure access and real-time donation and status updates.",
      "Built geospatial food matching using MongoDB GeoJSON, enabling NGOs and volunteers to discover nearby available food donations efficiently.",
      "Designed an end-to-end donation-to-delivery workflow with real-time notifications, status tracking, and role-specific actions for restaurants, NGOs, and volunteers."
    ],
    caseStudy: {
      overview: "Real-time food waste management platform linking restaurants, NGOs, and volunteers for efficient surplus meal redistribution.",
      problem: "Tons of edible surplus food are wasted daily due to inefficient communication and lack of spatial proximity dispatch between donors and charities.",
      solution: "Utilized MongoDB GeoJSON geospatial indexing for location matching and Socket.IO for instant donation claim dispatches.",
      myRole: "Full-Stack Engineer — Implemented MongoDB GeoJSON spatial queries, Express REST endpoints, and role-specific dashboards.",
      architecture: [
        "React + Vite Frontend -> Axios REST & Socket.IO Client",
        "Node.js + Express Backend -> JWT RBAC Middleware -> GeoJSON Query Controller",
        "MongoDB Atlas -> GeoSpatial Collections & Event Engine"
      ],
      challenges: [
        "Optimizing geospatial queries for instant proximity calculation without server lag.",
        "Managing multi-role status transitions (Listed -> Claimed -> Delivered)."
      ]
    }
  },
  {
    id: "forkfu-food",
    title: "Forkfu-Food Web",
    subtitle: "Responsive Food Ordering & Profile Management Web Application",
    featured: true,
    description: "Developed a responsive food-ordering application using React, Redux Toolkit, and React Router.",
    technologies: ["React 19", "Redux Toolkit", "React Router", "JavaScript", "HTML5", "CSS3", "Vite"],
    github: "https://github.com/saurabh-yadav16",
    liveDemo: "#",
    features: [
      "Developed a responsive food-ordering application using React, Redux Toolkit, and React Router.",
      "Implemented menu search and filters, cart management, checkout validation, authentication, and editable user profiles.",
      "Created user-specific order history and persistent cart and account data using Local Storage."
    ],
    caseStudy: {
      overview: "Responsive food ordering application with centralized Redux Toolkit state management and persistent cart ordering workflows.",
      problem: "Frequent page reloads causing state loss and choppy cart updates on mobile web apps.",
      solution: "Built a zero-reload SPA with React Router v6, Redux Toolkit centralized slices, and dynamic Local Storage synchronization.",
      myRole: "Frontend Developer — Structured Redux store slices, built cart persistence middleware, and created user profile modules.",
      architecture: [
        "React 19 UI Components -> Redux Toolkit Centralized Store",
        "Local Storage Sync Engine -> React Router v6 Route Guards"
      ],
      challenges: [
        "Cart state synchronization across browser tabs and refreshes.",
        "Designing responsive layouts for low-resolution mobile devices."
      ]
    }
  }
];

export const techStackCategories = [
  {
    category: "Languages",
    skills: ["C", "Java", "JavaScript", "TypeScript", "Data Structures & Algorithms with Java"]
  },
  {
    category: "Frontend",
    skills: ["React.js", "Tailwind CSS", "HTML5", "CSS3", "EJS", "Responsive UI Development"]
  },
  {
    category: "Backend & AI",
    skills: ["Node.js", "Express.js", "REST APIs", "Socket.IO", "AI Evaluation Engines"]
  },
  {
    category: "Databases",
    skills: ["MongoDB", "MySQL", "Prisma", "Database Design", "Persistent Storage"]
  },
  {
    category: "Authentication",
    skills: ["JWT", "GitHub OAuth"]
  },
  {
    category: "Tools & Platforms",
    skills: ["Git", "GitHub", "VS Code", "Postman", "IntelliJ IDEA"]
  },
  {
    category: "Coursework & Core CS",
    skills: ["Object-Oriented Programming", "Database Management Systems", "Operating Systems", "Computer Networks"]
  }
];

export const skillBadges = [
  "React.js", "TypeScript", "Node.js", "Express.js", "MongoDB", "MySQL", "Prisma",
  "Java", "C", "JavaScript", "Socket.IO", "JWT", "AI Evaluation Engine", "GitHub OAuth",
  "Git", "GitHub", "Tailwind CSS", "REST APIs", "Data Structures & Algorithms", "OOP", "DBMS"
];

export const certifications = [
  {
    id: "eda-nasscom",
    title: "Exploratory Data Analysis",
    issuer: "Nasscom",
    year: "2026",
    description: "Certified in data analysis techniques, statistical data manipulation, and exploratory visualization best practices.",
    icon: "BarChart3"
  },
  {
    id: "mern-nasscom",
    title: "Full Stack Development with MERN",
    issuer: "Nasscom Foundation",
    year: "2026",
    description: "Comprehensive certification covering MongoDB, Express.js, React.js, Node.js, REST API design, and modern web deployment.",
    icon: "Code2"
  }
];
