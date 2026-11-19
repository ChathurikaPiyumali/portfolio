import { 
  ProjectProps, 
  CertificateProps, 
  SkillProps, 
  SkillCategoryProps,
  EducationProps, 
  ServiceProps,
  ExperienceProps,
  ResearchProjectProps,
  ExtracurricularProps,
  ReferenceProps
} from '../types';

export const personalInfo = {
  fullName: 'U. Chathurika Piyumali Unagalle',
  displayName: 'Chathurika Unagalle',
  title: 'Data Science Undergraduate & Software Developer',
  email: 'chathurikapiyumali01@gmail.com',
  phone: '+94 706375577',
  location: 'Colombo, Sri Lanka',
  linkedIn: 'https://www.linkedin.com/in/chathurika-unagalle-10a937284/',
  github: 'https://github.com/ChathurikaPiyumali',
  portfolioUrl: 'https://chathurika.vercel.app',
  profileImage: '/sliit.jpg',
  resumePdf: '/chathurika_unagalle.pdf',
  bio: 'Final Year Data Science undergraduate with one year of industry experience as a Trainee Software Developer at Toyota Lanka. Skilled in Python, SQL, machine learning, data analytics, and modern full-stack development (React, TypeScript, Node.js). Passionate about applying AI and digital phenotyping techniques to solve real-world problems.',
  summary: 'Final Year Data Science undergraduate with one year of industry experience as a Trainee Software Developer at Toyota Lanka. Skilled in Python, SQL, data analysis, software development, and problem-solving. Passionate about applying data science and machine learning techniques to solve real-world business problems. Seeking an entry-level Data Scientist or Data Analyst role where I can contribute while continuing to grow professionally.'
};

export const skills: SkillProps[] = [
  { name: 'Python & Scikit-learn', percentage: 90, category: 'AI & Data Science' },
  { name: 'Machine Learning & Digital Phenotyping', percentage: 85, category: 'AI & Data Science' },
  { name: 'SQL & Data Warehousing (SSMS, SSIS, SSAS)', percentage: 85, category: 'Data & BI' },
  { name: 'Power BI & Business Intelligence', percentage: 88, category: 'Data & BI' },
  { name: 'React & TypeScript', percentage: 85, category: 'Web Development' },
  { name: 'Node.js, Express & NestJS', percentage: 80, category: 'Web Development' },
  { name: 'MongoDB, MySQL & Firebase', percentage: 82, category: 'Databases' },
  { name: 'IoT (ESP32, MQTT, InfluxDB, Grafana)', percentage: 78, category: 'Cloud & IoT' },
];

export const skillCategories: SkillCategoryProps[] = [
  {
    category: 'Machine Learning & AI',
    description: 'Predictive modeling, anomaly detection & digital phenotyping',
    skills: [
      { name: 'Python', featured: true },
      { name: 'Scikit-learn', featured: true },
      { name: 'Pandas & NumPy', featured: true },
      { name: 'R', featured: false },
    ]
  },
  {
    category: 'Full-Stack & Web',
    description: 'Modern reactive UIs, microservices & REST APIs',
    skills: [
      { name: 'React', featured: true },
      { name: 'TypeScript', featured: true },
      { name: 'JavaScript', featured: false },
      { name: 'Node.js', featured: true },
      { name: 'NestJS', featured: true },
      { name: 'Spring Boot', featured: false },
      { name: 'Tailwind CSS', featured: true },
    ]
  },
  {
    category: 'Data & Databases',
    description: 'Relational, NoSQL, data warehousing & BI reporting',
    skills: [
      { name: 'SQL', featured: true },
      { name: 'Power BI', featured: true },
      { name: 'MySQL', featured: false },
      { name: 'MongoDB', featured: true },
      { name: 'Firebase', featured: false },
    ]
  },
  {
    category: 'Programming Core',
    description: 'Object-oriented programming and algorithmic foundations',
    skills: [
      { name: 'Java', featured: true },
      { name: 'C / C++', featured: false },
    ]
  },
  {
    category: 'IoT & Telemetry',
    description: 'Embedded systems, time-series data & dashboards',
    skills: [
      { name: 'ESP32 & MQTT', featured: true },
      { name: 'Grafana', featured: true },
    ]
  }
];

export const services: ServiceProps[] = [
  {
    title: 'Machine Learning & Predictive AI',
    description: 'Designing end-to-end ML pipelines: anomaly detection, feature engineering, predictive analytics, digital phenotyping, and NLP solutions.',
    icon: undefined,
    tags: ['Scikit-learn', 'One-Class SVM', 'Pandas', 'Flask API']
  },
  {
    title: 'Data Analytics & Power BI Dashboards',
    description: 'Transforming raw enterprise metrics into actionable interactive dashboards, executive BI reports, and multi-dimensional OLAP analysis.',
    icon: undefined,
    tags: ['Power BI', 'DAX', 'SSRS', 'Data Modeling']
  },
  {
    title: 'Full-Stack Software Engineering',
    description: 'Developing high-performance, responsive enterprise web applications with React, TypeScript, Node.js, NestJS, and RESTful architectures.',
    icon: undefined,
    tags: ['React', 'TypeScript', 'Node.js', 'Tailwind CSS']
  },
  {
    title: 'Data Warehousing & ETL Pipelines',
    description: 'Architecting robust relational databases, Snowflake/Star schemas, automated ETL pipelines, and high-throughput data extraction/scraping.',
    icon: undefined,
    tags: ['SSIS', 'SSAS', 'SQL Server', 'Python Scraping']
  },
];

export const workExperience: ExperienceProps[] = [
  {
    id: 'toyota-lanka',
    role: 'Intern - Software Developer',
    company: 'Toyota Lanka (Pvt) Ltd',
    location: 'Hyde Park, Colombo, Sri Lanka',
    period: 'July 2025 – July 2026',
    type: 'Full-Time Internship (1 Year)',
    badge: 'Industry Experience',
    description: [
      'Developed and maintained enterprise web applications using React, TypeScript, Node.js, NestJS, Express, and SQL, contributing to business-critical systems.',
      'Contributed to the successful delivery and enhancement of 8+ enterprise applications, including vehicle marketplace, CRM, valuation, HR, and project management systems.',
      'Performed automated data collection, preprocessing, and web scraping using Python to support vehicle valuation and market analytics solutions.',
      'Built and integrated RESTful APIs, implemented CRUD operations, role-based authentication, and optimized database interactions for scalable web applications.',
      'Designed responsive user interfaces and reusable frontend component libraries, significantly boosting usability and consistency across applications.',
      'Collaborated within an Agile development lifecycle, actively participating in requirements analysis, code reviews, automated testing, and production deployment.'
    ],
    skills: ['React', 'TypeScript', 'Node.js', 'NestJS', 'Express', 'SQL', 'Python Web Scraping', 'REST APIs', 'Agile']
  }
];

export const flagshipResearchProject: ResearchProjectProps = {
  title: 'Pre-Stress Detection Using Smartphone-Based Behavioral Digital Phenotyping',
  role: 'Lead Data Science & Machine Learning Researcher',
  period: 'January 2026 – Present',
  tag: 'Flagship Research Project',
  overview: 'A pioneering, privacy-preserving mental health monitoring framework that continuously captures smartphone behavioral digital phenotypes to detect subtle pre-stress deviations before emotional distress peaks.',
  keyContributions: [
    'Engineered a 25-feature behavioral digital phenotype extraction engine utilizing smartphone interactions, typing rhythm, app transitions, and contextual mobility data.',
    'Benchmarked 14 anomaly detection algorithms on CMU, StudentLife, and SWELL-KW benchmark datasets, determining One-Class SVM as the highest-performing architecture.',
    'Formulated an early pre-stress detection model using behavioral deviation (Z-score) analysis to capture sub-clinical indicators before peak stress episodes occur.',
    'Implemented multi-modal sensor fusion and continual learning using Exponential Moving Average (EMA) to adapt dynamically to evolving individual behavioral baselines.',
    'Engineered an end-to-end production prototype integrating Android Accessibility Services, lightweight Flask REST APIs, and Firebase for real-time inference and passive collection.',
    'Developed a privacy-aware architecture combining on-device preprocessing, secure token authentication, and cloud machine learning.'
  ],
  technologies: ['Python', 'One-Class SVM', 'Scikit-learn', 'Flask', 'Firebase', 'Android Accessibility', 'Z-score Anomaly', 'EMA Continual Learning'],
  datasets: ['CMU Dataset', 'StudentLife Dataset', 'SWELL-KW Dataset']
};

export const keyResearchProject = flagshipResearchProject;

export const education: EducationProps[] = [
  {
    degree: 'BSc (Hons) in Information Technology Specialising in Data Science',
    institution: 'Sri Lanka Institute of Information Technology (SLIIT)',
    period: 'Feb 2023 – Present',
    grade: 'CGPA 3.0 / 4.0',
    description: 'Specializing in Machine Learning, Statistical Analysis, Big Data Analytics, Predictive Modeling, and Distributed Computing.',
    location: 'Malabe, Sri Lanka'
  },
  {
    degree: 'Higher Diploma in Information Technology',
    institution: 'Sri Lanka Institute of Information Technology (SLIIT)',
    period: 'Feb 2023 – Nov 2024',
    description: 'Comprehensive software engineering foundation covering Object-Oriented Programming, Database Management Systems, Data Structures & Algorithms, and Web Development.',
    location: 'Malabe, Sri Lanka'
  },
  {
    degree: 'Diploma in Information Technology (Distinction)',
    institution: 'ESOFT Metro Campus',
    period: '2022 – 2023',
    description: 'Fundamental computer science concepts, basic programming principles, and software office applications.',
    location: 'Sri Lanka'
  },
  {
    degree: 'G.C.E. Advanced Level – Biological Sciences',
    institution: 'Anula Vidyalaya',
    period: '2022',
    description: 'Biology: B, Chemistry: B, Physics: C. Developed strong analytical and empirical problem-solving capabilities.',
    location: 'Nugegoda, Sri Lanka'
  }
];

export const projects: ProjectProps[] = [
  {
    id: 'project-flagship',
    title: 'Pre-Stress Detection via Digital Phenotyping',
    subtitle: 'Lead ML Researcher • Academic Research Project',
    category: 'AI & Data Science',
    image: '/HealthMate.png',
    technologies: ['Python', 'One-Class SVM', 'Flask', 'Firebase', 'Android', 'Scikit-learn'],
    description: 'Designed a 25-feature behavioral digital phenotyping engine using smartphone interaction patterns and context data. Evaluated 14 anomaly detection models and formulated Z-score early stress prediction.',
    highlights: [
      'Evaluated 14 anomaly detection algorithms across CMU, StudentLife & SWELL-KW datasets',
      'One-Class SVM selected as top performer with continual learning (EMA)',
      'Built end-to-end pipeline: Android Accessibility Service + Flask API + Firebase'
    ],
    github: 'https://github.com/ChathurikaPiyumali',
    isFeatured: true
  },
  {
    id: 'project-deforestation',
    title: 'Multi-Agentic System for Deforestation Impact AI',
    subtitle: 'Autonomous AI Agents & Geospatial Intelligence',
    category: 'AI & Data Science',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1000&q=80',
    technologies: ['Python', 'Google Earth Engine', 'LLMs', 'NLP', 'Satellite Imagery'],
    description: 'Autonomous multi-agent AI system that interfaces with Google Earth Engine satellite imagery and environmental NLP documents to detect deforestation trends and predict climate impacts.',
    highlights: [
      'Multi-agent architecture coordinating data extraction, vision inspection, and impact reporting',
      'Integrated Google Earth Engine API for real-time vegetation index tracking',
      'Utilized LLMs with prompt orchestration to generate comprehensive ecological vulnerability briefs'
    ],
    github: 'https://github.com/ChathurikaPiyumali',
    isFeatured: true
  },
  {
    id: 'project-crop-analyzer',
    title: 'Micro-Climate Based Crop Suitability Analyzer',
    subtitle: 'IoT Hardware & Time-Series Data Intelligence',
    category: 'IoT & Cloud',
    image: 'https://images.unsplash.com/photo-1586771107445-d3ca888129ff?auto=format&fit=crop&w=1000&q=80',
    technologies: ['ESP32', 'MQTT', 'InfluxDB', 'Grafana', 'Arduino IDE', 'Python'],
    description: 'Precision agriculture IoT platform streaming micro-climate parameters (soil moisture, temperature, humidity, light) to evaluate dynamic crop suitability metrics.',
    highlights: [
      'Configured ESP32 embedded sensors transmitting telemetry via MQTT protocol',
      'Optimized InfluxDB time-series database for temporal data storage and trend queries',
      'Engineered interactive Grafana dashboards for farmers with alerts and crop suitability index'
    ],
    github: 'https://github.com/ChathurikaPiyumali',
    isFeatured: true
  },
  {
    id: 'project-dw',
    title: 'Retail Sales Data Warehouse & BI Solution',
    subtitle: 'End-to-End Enterprise Business Intelligence',
    category: 'AI & Data Science',
    image: '/DW.jpeg',
    technologies: ['SSMS', 'SSAS', 'SSRS', 'Power BI', 'Excel OLAP', 'SQL'],
    description: 'End-to-end retail data warehouse implemented with a Snowflake Schema. Includes OLAP multi-dimensional cubes, automated SSIS ETL routines, SSRS paginated reports, and executive Power BI dashboards.',
    highlights: [
      'Designed Snowflake Schema in SQL Server Management Studio (SSMS)',
      'Built multi-dimensional OLAP cubes in Visual Studio / SSAS for drill-down analytics',
      'Created interactive executive Power BI reports and Excel pivot cube integrations'
    ],
    github: 'https://github.com/ChathurikaPiyumali/SalesAnalytics-DW-BI.git',
    isFeatured: true
  },
  {
    id: 'project-toyota',
    title: 'Vehicle Parts Inventory Management System',
    subtitle: 'Enterprise Full-Stack Application for Toyota Lanka',
    category: 'Web Development',
    image: '/toyota.jpeg',
    technologies: ['Spring Boot', 'React', 'MongoDB', 'Postman', 'Tailwind CSS'],
    description: 'Full-stack enterprise application designed to manage automotive spare parts inventories with instant stock lookup, dynamic multi-attribute filtering, and transactional CRUD operations.',
    highlights: [
      'Developed robust RESTful backend microservices with Java Spring Boot and MongoDB',
      'Built responsive, high-speed catalog interface with React and Tailwind CSS',
      'Implemented role-based inventory tracking, transaction audit trails, and low-stock alarms'
    ],
    github: 'https://github.com/ChathurikaPiyumali/vehicle-parts-inventory-chathurika.git'
  },
  {
    id: 'project-growsphere',
    title: 'GrowSphere: Sustainable Agriculture Platform',
    subtitle: 'Community & Agritech Web Application',
    category: 'Web Development',
    image: '/gardening_.jpg',
    technologies: ['Spring Boot', 'React', 'MongoDB', 'REST API', 'GitHub'],
    description: 'Web application promoting eco-friendly agriculture and urban gardening. Features user garden logs, interactive tutorials with multimedia uploads, community discussions, and gamified growth badges.',
    highlights: [
      'Implemented the Gardening Tutorial module with multimedia storage and progress tracking',
      'Automated digital completion certificate generation for learners',
      'Integrated RESTful services with MongoDB document collections'
    ],
    github: 'https://github.com/weharaSliit/-Gardening-Sustainable-Agriculture-.git'
  },
  {
    id: 'project-breetas',
    title: 'Hotel Breetas Garden Management System',
    subtitle: 'Full-Stack Hospitality Management Platform',
    category: 'Web Development',
    image: '/Hotel.jpg',
    technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Tailwind CSS'],
    description: 'Comprehensive hospitality management system for a renowned tourist resort in Sri Lanka. Handles online room reservations, customer profiling, and real-time inventory control.',
    highlights: [
      'Designed and engineered the central Stock & Inventory Management module',
      'Implemented role-based dashboard for front-desk staff and warehouse managers',
      'Built seamless responsive UI with Tailwind CSS and React hooks'
    ],
    github: 'https://github.com/ChathurikaPiyumali/breetas-hotel-management-system.git'
  },
  {
    id: 'project-ecopilot',
    title: 'Urban Mobility AI Solution (EcoPilot)',
    subtitle: 'SLIIT Codefest Designthon Merit Award Winner',
    category: 'UI/UX & Mobile',
    image: '/EcoPilot.png',
    technologies: ['Figma', 'AI Prototyping', 'UI/UX Design', 'Design Thinking'],
    description: 'Award-winning AI-driven mobile navigation concept that optimizes urban commuting, reducing traffic congestion and emissions in Sri Lankan metropolitan areas.',
    highlights: [
      'Honored with the Merit Award at Designthon – Codefest 2024 organized by SLIIT',
      'Designed user-centric mobile prototypes with predictive congestion routing and ride-pooling',
      'Presented design system and architectural vision to an industry jury'
    ],
    figma: 'https://www.figma.com/design/Zg5kAsAdBrpk2LOpJSNwQL/Devfest?node-id=0-1&t=5efmzW8E99vGCii1-1'
  },
  {
    id: 'project-taskmanager',
    title: 'Enterprise Task Manager System',
    subtitle: 'Collaborative Project & Workflow Tracking',
    category: 'Web Development',
    image: '/task.jpeg',
    technologies: ['Angular', 'Spring Boot', 'MongoDB', 'Express', 'Node.js'],
    description: 'Collaborative task management web application enabling cross-functional teams to organize workflows, assign sprint milestones, and monitor project burn-down rates.',
    highlights: [
      'Frontend built with Angular with responsive data tables and drag-and-drop state boards',
      'Modular backend services handling user authentication and task status notifications'
    ],
    github: 'https://github.com/ChathurikaPiyumali/taskManager.git'
  },
  {
    id: 'project-employee',
    title: 'Online Employee Management System',
    subtitle: 'Java OOP Enterprise Desktop & Web System',
    category: 'Web Development',
    image: '/Employee.png',
    technologies: ['Java OOP', 'MySQL Workbench', 'JavaScript', 'Eclipse IDE'],
    description: 'Robust employee management system providing comprehensive personnel records, daily attendance tracking, payroll computation, and administrative security roles.',
    highlights: [
      'Reinforced core Object-Oriented Programming (OOP) paradigms and JDBC database connectivity',
      'Structured normalized relational schema in MySQL Workbench with transaction safety'
    ],
    github: 'https://github.com/ChathurikaPiyumali/Employee-Management-System.git'
  },
  {
    id: 'project-medical',
    title: 'Suwasetha Online Medical Portal',
    subtitle: 'Healthcare Patient Management Portal',
    category: 'Web Development',
    image: '/medical.jpeg',
    technologies: ['PHP', 'SQL Server', 'HTML5', 'CSS3', 'JavaScript'],
    description: 'Healthcare booking and consultation portal allowing patients to schedule clinic appointments, view doctor specializations, and access medical consultation records.',
    highlights: [
      'Designed intuitive front-end appointment booking flow with responsive forms',
      'Built secure SQL Server database queries with input sanitization and verification'
    ]
  },
  {
    id: 'project-portfolio',
    title: 'Modern Developer Portfolio & Interactive CV',
    subtitle: 'High-Performance Web Portfolio',
    category: 'Web Development',
    image: '/portfolio.png',
    technologies: ['React 18', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vite'],
    description: 'Personal web platform showcasing data science research, software engineering achievements, interactive certificates, and live resume download. Deployed on Vercel.',
    highlights: [
      'Custom Starfield particle background with responsive interactive canvas',
      'Fluid tab switching, animated metrics, and responsive mobile-first architecture'
    ],
    github: 'https://github.com/ChathurikaPiyumali/portfolio.git',
    demo: 'https://chathurika.vercel.app'
  }
];

export const certificates: CertificateProps[] = [
  {
    id: 'cert-codefest',
    title: 'Merit Award – Designthon, Codefest 2024',
    issuer: 'SLIIT (Faculty of Computing)',
    date: '2024',
    badge: 'National Competition Award',
    image: '/certificatess/AIML1.png',
    url: 'https://www.linkedin.com/in/chathurika-unagalle-10a937284/'
  },
  {
    id: 'cert-ibm-git',
    title: 'Getting Started with Git and GitHub',
    issuer: 'IBM / Coursera',
    date: 'March 2025',
    badge: 'Verified Credential',
    image: '/certificatess/IBM_Git.png',
    url: 'https://www.coursera.org/account/accomplishments/verify/O7H4GKN2R2BU'
  },
  {
    id: 'cert-ibm-python',
    title: 'Python for Data Science, AI & Development',
    issuer: 'IBM / Coursera',
    date: 'March 2025',
    badge: 'Verified Credential',
    image: '/certificatess/IBM_Python.png',
    url: 'https://www.coursera.org/account/accomplishments/verify/PJ8KLTG1NGSA'
  },
  {
    id: 'cert-sliit-aiml2',
    title: 'AI/ML Engineer Course - Stage 2',
    issuer: 'SLIIT Uni',
    date: 'December 2024',
    badge: 'Advanced Specialization',
    image: '/certificatess/AIML2.png',
    url: 'https://code.sliit.org/certificates/phelajy7mo'
  },
  {
    id: 'cert-sliit-aiml1',
    title: 'AI/ML Engineer Course - Stage 1',
    issuer: 'SLIIT Uni',
    date: 'November 2024',
    badge: 'Foundational Certification',
    image: '/certificatess/AIML1.png',
    url: 'https://code.sliit.org/certificates/0qi1ftwvbo'
  },
  {
    id: 'cert-ibm-ml',
    title: 'Machine Learning Introduction for Everyone',
    issuer: 'IBM / Coursera',
    date: 'December 2024',
    badge: 'Verified Credential',
    image: '/certificatess/IBM_ML.png',
    url: 'https://www.coursera.org/account/accomplishments/verify/6Q2B3NC1VBXG'
  },
  {
    id: 'cert-linkedin-ds',
    title: 'Learning Data Science: Understanding the Basics',
    issuer: 'LinkedIn Learning',
    date: 'December 2024',
    badge: 'Industry Certification',
    image: '/certificatess/Linkedin_DS.png',
    url: 'https://www.linkedin.com/in/chathurika-unagalle-10a937284/details/certifications/'
  },
  {
    id: 'cert-uom-python',
    title: 'Python for Beginners',
    issuer: 'University of Moratuwa - FOE',
    date: 'March 2025',
    badge: 'Academic Certification',
    image: '/certificatess/UoM_Python.png',
    url: 'https://www.linkedin.com/in/chathurika-unagalle-10a937284/details/certifications/'
  },
  {
    id: 'cert-uom-web',
    title: 'Web Design for Beginners',
    issuer: 'University of Moratuwa (FOE)',
    date: '2024 - 2025',
    badge: 'Academic Certification',
    image: '/certificatess/IBM_Git.png',
    url: 'https://www.linkedin.com/in/chathurika-unagalle-10a937284/details/certifications/'
  },
  {
    id: 'cert-devtown',
    title: 'Front End Web Development Bootcamp',
    issuer: 'DevTown in Collaboration with Tech Giants',
    date: '2024',
    badge: 'Bootcamp Certificate',
    image: '/certificatess/AIML2.png',
    url: 'https://www.linkedin.com/in/chathurika-unagalle-10a937284/details/certifications/'
  }
];

export const extracurricularActivities: ExtracurricularProps[] = [
  {
    title: 'Presidential Award of Excellence',
    organization: "LEGACY' 24 AIESEC in SLIIT",
    awardType: 'Award',
    description: 'Conferred for outstanding commitment, high-impact organizational leadership, and driving youth empowerment initiatives across international student exchanges.'
  },
  {
    title: 'Best Performing oGTA Leader – Nominee',
    organization: "LEGACY' 24 AIESEC in SLIIT",
    awardType: 'Award',
    description: 'Nominated for top performance in leading outgoing Global Talent and Teacher youth mobility exchanges, maintaining stellar partnership coordination.'
  },
  {
    title: 'Organizing Committee Vice President – Delegates',
    organization: 'Corporate Connect 2025',
    awardType: 'Leadership',
    description: 'Spearheaded corporate relations and managed delegate operations, hosting leading industry executives and university delegates in a flagship summit.'
  },
  {
    title: 'Team Leader',
    organization: 'AIESEC in SLIIT',
    awardType: 'Leadership',
    description: 'Led cross-functional student teams, mentored incoming members, managed project timelines, and coordinated regional youth development programs.'
  },
  {
    title: 'Active Community Member',
    organization: 'Data Science Student Community – SLIIT Faculty of Computing',
    awardType: 'Community',
    description: 'Active contributor in peer knowledge sharing, datathons, workshops on ML algorithms, and data science research discussions.'
  },
  {
    title: 'Junior Prefect',
    organization: 'Anula Vidyalaya',
    awardType: 'Leadership',
    description: 'Elected student leader responsible for upholding discipline, organizing inter-school events, and coordinating student body governance.'
  }
];

export const extracurriculars = extracurricularActivities;

export const references: ReferenceProps[] = [
  {
    name: 'Mr. Naotaka Takeda',
    designation: 'Department Head',
    department: 'Value Chain and Mobility Service',
    organization: 'Toyota Lanka (Pvt) Ltd',
    phone: '+94 77 793 9656',
    email: 'naotaka_takeda@toyota.lk'
  },
  {
    name: 'Ms. K.G.M. Lakmali',
    designation: 'Senior Lecturer',
    department: 'Department of Mathematics and Statistics, Faculty of Humanities and Sciences',
    organization: 'Sri Lanka Institute of Information Technology (SLIIT)',
    phone: '+94 71 719 2341',
    email: 'malika.l@sliit.lk'
  }
];

export const projectCategories = [
  'All',
  'AI & Data Science',
  'Web Development',
  'IoT & Cloud',
  'UI/UX & Mobile',
];
