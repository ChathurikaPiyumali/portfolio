import { ProjectProps, CertificateProps, SkillProps, EducationProps, ServiceProps } from '../types';

export const skills: SkillProps[] = [
  { name: 'MERN Stack', percentage: 80 },
  { name: 'Power BI', percentage: 85 },
  { name: 'Data Analysis', percentage: 80 },
  { name: 'Machine Learning', percentage: 70 },
  { name: 'R, Python, SQL', percentage: 75 },
];

export const services: ServiceProps[] = [
  {
    title: 'Data Analysis',
    description: 'Comprehensive data analysis services including data cleaning, visualization, and insights generation.',
    icon: undefined
  },
  {
    title: 'Dashboard Development (Power BI)',
    description: 'Creating interactive Power BI dashboards to visualize complex data in intuitive ways.',
    icon: undefined
  },

  {
    title: 'Statistical Analysis',
    description: 'Applying statistical methods to extract meaningful patterns and predictions from data.',
    icon: undefined
  },
    {
    title: 'Data Management',
    description: 'Expertise in data management, including ETL processes and data warehousing.',
    icon: undefined
  },
    {
    title: 'MERN Stack Applications',
    description: 'Developing full-stack applications using MongoDB, Express, React, and Node.js.',
    icon: undefined
  },



];

export const education: EducationProps[] = [
  {
    degree: 'BSc (Hons) in IT - Data Science',
    institution: 'SLIIT',
    period: '2022–2026',
    description: 'Currently pursuing with focus on machine learning and data analytics',
  },
  {
    degree: 'Higher Diploma in IT',
    institution: 'SLIIT',
    period: '2022–2024',
  },
  {
    degree: 'Diploma in IT (Distinction)',
    institution: 'ESOFT',
    period: '2022–2023',
  },
];

export const projects: ProjectProps[] = [
{
    id: 'project4',
    title: 'Toyota Lanka: Vehicle Parts Inventory Management System',
    category: 'Web Development',
    image: '/toyota.jpeg',
    technologies: ['Spring Boot', 'React', 'MongoDB', 'Postman'],
    github: 'https://github.com/ChathurikaPiyumali/vehicle-parts-inventory-chathurika.git',
    description: 'Toyota Lanka is a web-based application designed to manage vehicle parts inventory efficiently.I got the opportunity to build as part of a practical test for Toyota Lanka.It was a full-stack web app with search,filtering, and CRUD functionality .',
  },

    {
    id: 'project1',
    title: 'Portfolio Website',
    category: 'Web Development',
    image: '/portfolio.png',
    technologies: ['TypeScript', 'React', 'Tailwind CSS', 'Framer Motion' , '.....'],
    github: 'https://github.com/ChathurikaPiyumali/portfolio.git',
    description: 'The Portfolio Website is a personal website designed to showcase my skills, projects, education, and contact information. The website was developed using React for dynamic content, Tailwind CSS for modern and responsive styling, and Framer Motion for smooth animations. It was deployed on Vercel for fast and reliable hosting. The website serves as a comprehensive online representation of my expertise and achievements. It also provides easy navigation to learn more about me and my work and connect with me.',
  },

    {
    id: 'project5',
    title: 'Retail Sales Data Warehouse & BI Solution',
    category: 'Data Science',
    image: '/DW.jpeg',
    technologies: ['SSMS', 'SSAS', 'SSRS', 'Power BI', 'Excel'],
    github:'https://github.com/ChathurikaPiyumali/SalesAnalytics-DW-BI.git',
    description: 'This project demonstrates a complete end-to-end Business Intelligence (BI) workflow using a Snowflake Schema for a retail sales scenario. It includes: ⚙️ Data Warehouse design and implementation (via SSMS) 📊 OLAP Cube creation (via Visual Studio/SSAS) 📝 SSRS Reports 📈 Power BI dashboards 📁 Excel-based OLAP operations.',
  },

  {
    id: 'project2',
    title: 'GrowSphere: Gardening & Sustainable Agriculture Platform',
    category: 'Web Development',
    image: '/gardening_.jpg',
    technologies: ['Spring Boot', 'React', 'MongoDB', 'Postman'],
    github: 'https://github.com/weharaSliit/-Gardening-Sustainable-Agriculture-.git',
    description: 'GrowSphere is a Spring-based web application designed to promote eco-friendly gardening and sustainable agriculture practices. The platform helps users plan, manage, and optimize gardens while fostering community engagement. Key features include User Profiles & Garden Logs, Gardening Tutorials, Community Discussions, and Growth Challenges with a leaderboard system to motivate participation. As the contributor for the Gardening Tutorial module, I implemented tutorial creation with media handling, progress tracking, and certificate generating.',
  },

    {
    id: 'project3',
    title: 'Hotel Breetas Garden',
    category: 'Web Development',
    image: '/Hotel.jpg',
    technologies: ['MongoDB', 'Express', 'React', 'Node.js','Tailwind CSS'],
    github:'https://github.com/ChathurikaPiyumali/breetas-hotel-management-system.git',
    description: 'Website designed for a famous tourist hotel located in Ginigathhena, Sri Lanka.I implemented the hotel stock management component using MERN stack, which includes a user-friendly interface for managing room bookings, customer details, and inventory. The project showcases my skills in full-stack development and database management, providing a seamless experience for hotel staff to handle operations efficiently.',
  },



  {
    id: 'project6',
    title: 'Online Employee Management System',
    category: 'Web Development',
    image: '/Employee.png',
    technologies: ['Java OOP', 'MySQL Workbench', 'JavaScript', 'Eclipse IDE'],
    github: 'https://github.com/ChathurikaPiyumali/Employee-Management-System.git',
    description: ' It includes features like employee profiles, attendance, and admin control panels. This project strengthened my backend logic development, JDBC integration, and relational database skills.',
  },

      {
    id: 'project10',
    title: 'HealthMate AI-Your Personal AI Wellbeing Assistant',
    category: 'App Development',
    image: '/HealthMate.png',
    technologies: ['Kotlin', 'Android Studio', 'XML'],
    figma: 'https://www.figma.com/proto/jBPsCetkW1W6qUByexnN0q/HealthMate---PixelPaws?node-id=0-1&t=5OB4w0PMvqYUlJug-1',
    description: 'Health Mate is a comprehensive well-being app designed to address the mental, physical, and academic challenges undergraduate students face.By integrating AI-driven support and personalized features like goal setting, meditation, and emergency assistance, the app provides a seamless and accessible solution for improving student wellbeing.',
  },

  {
    id: 'project8',
    title: 'Task Manager System',
    category: 'Web Development',
    image: '/task.jpeg',
    technologies: ['Angular', 'MongoDB', 'Express', 'Node.js'],
    github:'https://github.com/ChathurikaPiyumali/taskManager.git',
    description: 'A task management application with collaborative features.',
  },
    {
    id: 'project9',
    title: 'Urban Mobility AI Solution in Sri Lanka',
    category: 'App Development',
    image: '/EcoPilot.png',
    technologies: ['Figma', 'AI', 'UI/UX'],
    figma:'https://www.figma.com/design/Zg5kAsAdBrpk2LOpJSNwQL/Devfest?node-id=0-1&t=5efmzW8E99vGCii1-1',
    description: 'Awarded Merit at Designthon – Codefest 2024 Organized by SLIIT university, this app prototype (designed in Figma) aimed to optimize traffic and transport solutions in Sri Lanka using AI-based route recommendations. While it was a UI/UX and conceptual project, I collaborated with cross-functional teams and presented it to a jury, refining my design thinking and prototyping skills.',
  },

  {
    id: 'project7',
    title: 'Suwasetha Online Medical Portal',
    category: 'Web Development',
    image: '/medical.jpeg',
    technologies: ['PHP', 'SQL Server', 'HTML', 'CSS', 'JavaScript'],
    description: 'This is a front-end-driven healthcare portal. It allows patients to book appointments and view doctor profiles. This project helped me improve UI layout design, SQL query writing, and form validation techniques.A medical portal for patient management and appointment scheduling.',
  },
  
  {
    id: 'project11',
    title: 'Multi-Feature Productivity Mobile App',
    category: 'App Development',
    image: 'https://images.pexels.com/photos/6393013/pexels-photo-6393013.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    technologies: ['Kotlin', 'Android Studio', 'XML'],
    description: 'Developed a mobile application using Kotlin and XML in Android Studio that includes to-do lists, reminders, and time tracking. I explored Android app lifecycle, data persistence, and modern UI components. This project gave me my first exposure to mobile development.',
  },
];






export const certificates: CertificateProps[] = [
  {
    id: 'cert1',
    title: 'Python for Data Science',
    issuer: 'IBM / Coursera',
    date: 'May 2023',
    image: 'https://images.pexels.com/photos/6238297/pexels-photo-6238297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'cert2',
    title: 'Machine Learning',
    issuer: 'Coursera',
    date: 'August 2023',
    image: 'https://images.pexels.com/photos/7792804/pexels-photo-7792804.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'cert3',
    title: 'Frontend Development',
    issuer: 'DevTown',
    date: 'November 2022',
    image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'cert4',
    title: 'Diploma in IT',
    issuer: 'ESOFT',
    date: 'December 2023',
    image: 'https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'cert5',
    title: 'Web Design',
    issuer: 'UoM',
    date: 'March 2023',
    image: 'https://images.pexels.com/photos/326424/pexels-photo-326424.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'cert6',
    title: 'Python with NumPy',
    issuer: 'Eduonix',
    date: 'January 2023',
    image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
];

export const projectCategories = [
  'All',
  'Web Development',
  'Data Science',
  'App Development',
];