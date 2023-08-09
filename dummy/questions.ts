import { varStatus } from "@/utils";
import { Question, User, Project } from "@/types";

// { name: "John Doe", platforms: ["Facebook", "Instagram", "Twitter", "GitHub", "YouTube"]}

// Users
export const users: User[] = [
  {
    id: 7094247,
    name: "John Doe",
    about:
      "I am a software engineer with 5 years of experience. I am interested in web development and machine learning.",
    email: "johndoe@example.com",
    position: "Software Engineer",
    fileAttachments: ["resume.pdf"],
    codingLanguages: [
      { language: "JavaScript", proficiency: 80 },
      { language: "Python", proficiency: 95 },
      { language: "Java", proficiency: 65 },
    ],
    isOnline: varStatus(),
    location: "New York",
    company: "ABC Tech",
    skills: ["Web Development", "Machine Learning", "Software Engineering"],
    education: "XYZ University",
    platforms: ["Facebook", "TikTok", "YouTube", "Discord", "Instagram"],
  },
  {
    id: 2425855,
    name: "Jane Doe",
    about:
      "I am a student who is learning to code. I am interested in front-end development and web design.",
    email: "janedoe@example.com",
    position: "Student",
    fileAttachments: [],
    codingLanguages: [
      { language: "HTML", proficiency: 70 },
      { language: "CSS", proficiency: 60 },
      { language: "JavaScript", proficiency: 85 },
    ],
    isOnline: varStatus(),
    location: "Los Angeles",
    company: "XYZ University",
    skills: ["Front-end Development", "Web Design"],
    education: "ABC College",
    platforms: ["Facebook", "Twitter", "Stack Overflow", "TikTok", "Dropbox"],
  },
  {
    id: 6436184,
    name: "Peter Smith",
    about:
      "I am a senior software engineer with 10 years of experience. I am interested in distributed systems and cloud computing.",
    email: "petersmith@example.com",
    position: "Senior Software Engineer",
    fileAttachments: ["portfolio.pdf"],
    codingLanguages: [
      { language: "Java", proficiency: 90 },
      { language: "Python", proficiency: 75 },
      { language: "Go", proficiency: 80 },
    ],
    isOnline: varStatus(),
    location: "San Francisco",
    company: "Tech Solutions Inc.",
    skills: ["Distributed Systems", "Cloud Computing", "Java"],
    education: "XYZ University",
    platforms: ["Twitter", "YouTube", "TikTok", "Reddit", "Codepen"],
  },
  {
    id: 5460166,
    name: "Mary Jones",
    about:
      "I am a junior software engineer with 2 years of experience. I am interested in mobile development and big data.",
    email: "maryjones@example.com",
    position: "Junior Software Engineer",
    fileAttachments: ["cv.pdf"],
    codingLanguages: [
      { language: "Swift", proficiency: 85 },
      { language: "Java", proficiency: 70 },
      { language: "Python", proficiency: 60 },
    ],
    isOnline: varStatus(),
    location: "Chicago",
    company: "Tech Innovators",
    skills: ["Mobile Development", "Big Data", "Swift"],
    education: "ABC College",
    platforms: ["Reddit", "Twitter", "Dropbox", "Twitch", "GitHub"],
  },
  {
    id: 8973098,
    name: "Susan Brown",
    about:
      "I am a self-taught developer who is interested in full-stack development. I am also interested in open source software.",
    email: "susanbrown@example.com",
    position: "Full-Stack Developer",
    fileAttachments: ["projects.pdf"],
    codingLanguages: [
      { language: "JavaScript", proficiency: 70 },
      { language: "Python", proficiency: 85 },
      { language: "Ruby", proficiency: 60 },
    ],
    isOnline: varStatus(),
    location: "Seattle",
    company: "OpenSource Solutions",
    skills: ["Full-Stack Development", "Open Source", "JavaScript"],
    education: "XYZ University",
    platforms: ["Reddit", "Discord", "Dropbox", "Twitch", "Codepen"],
  },
  {
    id: 8446183,
    name: "David Jones",
    about:
      "I am a recent graduate with a degree in computer science. I am interested in artificial intelligence and machine learning.",
    email: "davidjones@example.com",
    position: "Software Engineer Intern",
    fileAttachments: ["transcript.pdf"],
    codingLanguages: [
      { language: "Python", proficiency: 80 },
      { language: "Java", proficiency: 75 },
      { language: "TensorFlow", proficiency: 70 },
    ],
    isOnline: varStatus(),
    location: "Boston",
    company: "AI Solutions",
    skills: ["Artificial Intelligence", "Machine Learning", "Python"],
    education: "ABC College",
    platforms: ["Dropbox", "Facebook", "GitHub", "Stack Overflow", "TikTok"],
  },
  {
    id: 5681446,
    name: "Elizabeth Smith",
    about:
      "I am a web developer with 3 years of experience. I am interested in front-end development and user experience.",
    email: "elizabethsmith@example.com",
    position: "Web Developer",
    fileAttachments: ["portfolio.pdf"],
    codingLanguages: [
      { language: "HTML", proficiency: 75 },
      { language: "CSS", proficiency: 80 },
      { language: "JavaScript", proficiency: 90 },
      { language: "React", proficiency: 70 },
    ],
    isOnline: varStatus(),
    location: "Miami",
    company: "Web Creators",
    skills: ["Front-end Development", "User Experience", "React"],
    education: "XYZ University",
    platforms: ["LinkedIn", "Discord", "YouTube", "Dropbox", "Instagram"],
  },
  {
    id: 7658604,
    name: "Michael Brown",
    about:
      "I am a full-stack developer with 5 years of experience. I am interested in back-end development and cloud computing.",
    email: "michaelbrown@example.com",
    position: "Full-Stack Developer",
    fileAttachments: ["resume.pdf"],
    codingLanguages: [
      { language: "Java", proficiency: 85 },
      { language: "Python", proficiency: 80 },
      { language: "Node.js", proficiency: 70 },
      { language: "AWS", proficiency: 75 },
    ],
    isOnline: varStatus(),
    location: "Denver",
    company: "Cloud Solutions Ltd.",
    skills: ["Full-Stack Development", "Back-end Development", "Java"],
    education: "ABC College",
    platforms: ["Twitch", "Discord", "Codepen", "Twitter", "Medium"],
  },
  {
    id: 1691053,
    name: "Emily Johnson",
    about:
      "I am a front-end developer with a passion for creating beautiful and interactive user interfaces.",
    email: "emilyjohnson@example.com",
    position: "Front-End Developer",
    fileAttachments: ["portfolio.pdf"],
    codingLanguages: [
      { language: "HTML", proficiency: 80 },
      { language: "CSS", proficiency: 70 },
      { language: "JavaScript", proficiency: 85 },
      { language: "React", proficiency: 90 },
    ],
    isOnline: varStatus(),
    location: "Austin",
    company: "UI Designers Inc.",
    skills: ["Front-end Development", "User Interface Design", "React"],
    education: "XYZ University",
    platforms: ["Twitch", "Twitter", "LinkedIn", "YouTube", "TikTok"],
  },
  {
    id: 9601998,
    name: "Robert Wilson",
    about:
      "I am a backend developer specializing in building scalable and efficient server-side applications.",
    email: "robertwilson@example.com",
    position: "Backend Developer",
    fileAttachments: ["resume.pdf"],
    codingLanguages: [
      { language: "Python", proficiency: 90 },
      { language: "Java", proficiency: 75 },
      { language: "Node.js", proficiency: 80 },
      { language: "MongoDB", proficiency: 70 },
    ],
    isOnline: varStatus(),
    location: "San Diego",
    company: "Server Solutions",
    skills: ["Back-end Development", "Server-side Applications", "Python"],
    education: "ABC College",
    platforms: ["GitHub", "Facebook", "LinkedIn", "Twitch", "Medium"],
  },
  {
    id: 9100672,
    name: "Jennifer Lee",
    about:
      "I am a UX/UI designer with a focus on creating delightful user experiences and intuitive interfaces.",
    email: "jenniferlee@example.com",
    position: "UX/UI Designer",
    fileAttachments: ["portfolio.pdf"],
    codingLanguages: [
      { language: "HTML", proficiency: 85 },
      { language: "CSS", proficiency: 75 },
      { language: "JavaScript", proficiency: 70 },
      { language: "Figma", proficiency: 80 },
      { language: "React", proficiency: 50 },
    ],
    isOnline: varStatus(),
    location: "Seattle",
    company: "Design Studios",
    skills: ["UX Design", "UI Design", "Figma"],
    education: "XYZ University",
    platforms: ["TikTok", "Instagram", "Twitch", "LinkedIn", "Discord"],
  },
  {
    id: 3012944,
    name: "Richard Thompson",
    about:
      "I am a data scientist with expertise in analyzing and interpreting complex data sets.",
    email: "richardthompson@example.com",
    position: "Data Scientist",
    fileAttachments: ["resume.pdf"],
    codingLanguages: [
      { language: "Python", proficiency: 90 },
      { language: "R", proficiency: 85 },
      { language: "SQL", proficiency: 70 },
      { language: "TensorFlow", proficiency: 80 },
    ],
    isOnline: varStatus(),
    location: "San Francisco",
    company: "Data Insights",
    skills: ["Data Science", "Data Analysis", "Python"],
    education: "ABC College",
    platforms: ["Stack Overflow", "Medium", "TikTok", "LinkedIn", "Facebook"],
  },
  {
    id: 6081524,
    name: "Lisa Davis",
    about:
      "I am a DevOps engineer experienced in automating and streamlining development processes.",
    email: "lisadavis@example.com",
    position: "DevOps Engineer",
    fileAttachments: ["resume.pdf"],
    codingLanguages: [
      { language: "Python", proficiency: 85 },
      { language: "Bash", proficiency: 75 },
      { language: "Docker", proficiency: 80 },
      { language: "Kubernetes", proficiency: 70 },
    ],
    isOnline: varStatus(),
    location: "Austin",
    company: "DevOps Solutions",
    skills: ["DevOps", "Automation", "Python"],
    education: "XYZ University",
    platforms: ["LinkedIn", "TikTok", "Dropbox", "Facebook", "Reddit"],
  },
  {
    id: 8734925,
    name: "Isabella David",
    about:
      "I'm a coding enthusiast who loves crafting clean and efficient code. I'm constantly exploring new challenges and learning more about the tech world. You can often find me contributing to open-source projects and sharing my coding insights on forums. Let's connect and learn together on this exciting coding journey!",
    email: "isabelladavis@example.com",
    position: "Full Stack Developer",
    fileAttachments: ["cv.pdf"],
    codingLanguages: [
      { language: "JavaScript", proficiency: 90 },
      { language: "Python", proficiency: 85 },
      { language: "React", proficiency: 80 },
      { language: "Node.js", proficiency: 75 },
      { language: "HTML", proficiency: 95 },
      { language: "CSS", proficiency: 90 },
      { language: "Java", proficiency: 70 },
      { language: "SQL", proficiency: 65 },
      { language: "TypeScript", proficiency: 85 },
      { language: "Express.js", proficiency: 70 },
      { language: "Flask", proficiency: 60 },
      { language: "MongoDB", proficiency: 80 },
      { language: "Git", proficiency: 85 },
      { language: "AWS", proficiency: 75 },
      { language: "Azure", proficiency: 70 },
      { language: "Google Cloud", proficiency: 70 },
      { language: "TensorFlow", proficiency: 75 },
    ],
    isOnline: varStatus(),
    location: "San Francisco",
    company: "TechSprint Solutions",
    skills: [
      "Frontend Development",
      "React and React Native",
      "Backend Development",
      "Python Programming",
      "Database Management",
      "Full Stack Web Development",
      "TypeScript",
      "UI/UX Design",
      "Version Control",
      "Test-Driven Development",
      "RESTful APIs",
      "DevOps and CI/CD",
      "Cloud Services",
      "Data Analysis and Visualization",
      "Mobile App Development",
      "Agile Software Development",
      "Docker and Containerization",
      "Machine Learning",
      "Cybersecurity Fundamentals",
      "Software Architecture and Design Patterns",
    ],
    education: "Stanford University",
    platforms: ["Twitch", "GitHub", "YouTube", "Discord", "Medium"],
  },
];

// Questions
export const questions: Question[] = [
  {
    id: 4820825,
    question: "How do I create a new thread in a forum?",
    asker: users[0],
    time: "10:30 AM",
    date: "July 23, 2023",
    isAnswered: varStatus(),
    contributors: [{ user: users[0], contributionTime: "10:35 AM" }],
  },
  {
    id: 9950463,
    question: "How do I format code in a post?",
    asker: users[1],
    time: "10:35 AM",
    date: "July 23, 2023",
    isAnswered: varStatus(),
    contributors: [{ user: users[4], contributionTime: "10:40 AM" }],
  },
  {
    id: 7687595,
    question: "What is the difference between a class and an object?",
    asker: users[2],
    time: "10:40 AM",
    date: "July 23, 2023",
    isAnswered: varStatus(),
    contributors: [
      { user: users[2], contributionTime: "10:45 AM" },
      { user: users[0], contributionTime: "10:50 AM" },
    ],
  },
  {
    id: 5068742,
    question: "How do I debug a JavaScript error?",
    asker: users[3],
    time: "10:45 AM",
    date: "July 23, 2023",
    isAnswered: varStatus(),
    contributors: [{ user: users[2], contributionTime: "10:50 AM" }],
  },
  {
    id: 5387555,
    question: "How do I create a REST API?",
    asker: users[4],
    time: "10:50 AM",
    date: "July 23, 2023",
    isAnswered: varStatus(),
    contributors: [
      { user: users[4], contributionTime: "10:55 AM" },
      { user: users[0], contributionTime: "11:00 AM" },
      { user: users[1], contributionTime: "11:05 AM" },
    ],
  },
  {
    id: 6100185,
    question: "How do I create a mobile app?",
    asker: users[5],
    time: "11:00 AM",
    date: "July 23, 2023",
    isAnswered: varStatus(),
    contributors: [
      { user: users[2], contributionTime: "11:05 AM" },
      { user: users[6], contributionTime: "11:10 AM" },
      { user: users[0], contributionTime: "11:15 AM" },
    ],
  },
  {
    id: 7010497,
    question: "How do I deploy a website to the cloud?",
    asker: users[6],
    time: "11:15 AM",
    date: "July 23, 2023",
    isAnswered: varStatus(),
    contributors: [
      { user: users[5], contributionTime: "11:20 AM" },
      { user: users[3], contributionTime: "11:25 AM" },
    ],
  },
  {
    id: 5368397,
    question: "How do I create a database?",
    asker: users[7],
    time: "11:20 AM",
    date: "July 23, 2023",
    isAnswered: varStatus(),
    contributors: [
      { user: users[1], contributionTime: "11:25 AM" },
      { user: users[7], contributionTime: "11:30 AM" },
      { user: users[4], contributionTime: "11:35 AM" },
    ],
  },
  {
    id: 8862639,
    question:
      "What are the best practices for optimizing a website's performance?",
    asker: users[8],
    time: "11:30 AM",
    date: "July 23, 2023",
    isAnswered: varStatus(),
    contributors: [{ user: users[5], contributionTime: "11:35 AM" }],
  },
  {
    id: 4146265,
    question:
      "How can I secure my web application from common vulnerabilities?",
    asker: users[9],
    time: "11:35 AM",
    date: "July 23, 2023",
    isAnswered: varStatus(),
    contributors: [
      { user: users[4], contributionTime: "11:40 AM" },
      { user: users[9], contributionTime: "11:45 AM" },
    ],
  },
  {
    id: 1299307,
    question: "What are some popular front-end frameworks in 2023?",
    asker: users[10],
    time: "11:40 AM",
    date: "July 23, 2023",
    isAnswered: varStatus(),
    contributors: [{ user: users[8], contributionTime: "11:45 AM" }],
  },
  {
    id: 2021284,
    question: "How do I handle state management in a React application?",
    asker: users[11],
    time: "11:50 AM",
    date: "July 23, 2023",
    isAnswered: varStatus(),
    contributors: [
      { user: users[10], contributionTime: "11:55 AM" },
      { user: users[2], contributionTime: "12:00 PM" },
    ],
  },
  {
    id: 4253932,
    question: "What are the key features of ES12 (ECMAScript 2021)?",
    asker: users[12],
    time: "12:00 PM",
    date: "July 23, 2023",
    isAnswered: varStatus(),
    contributors: [{ user: users[11], contributionTime: "12:05 PM" }],
  },
  {
    id: 6466743,
    question: "How do I implement lazy loading in a web application?",
    asker: users[3],
    time: "12:05 PM",
    date: "July 23, 2023",
    isAnswered: varStatus(),
    contributors: [
      { user: users[12], contributionTime: "12:10 PM" },
      { user: users[5], contributionTime: "12:15 PM" },
    ],
  },
  {
    id: 4458952,
    question: "What are some best practices for version control with Git?",
    asker: users[9],
    time: "12:10 PM",
    date: "July 23, 2023",
    isAnswered: varStatus(),
    contributors: [
      { user: users[6], contributionTime: "12:15 PM" },
      { user: users[4], contributionTime: "12:20 PM" },
    ],
  },
  {
    id: 6320035,
    question:
      "How do I implement real-time communication in a web application?",
    asker: users[0],
    time: "12:20 PM",
    date: "July 23, 2023",
    isAnswered: varStatus(),
    contributors: [
      { user: users[3], contributionTime: "12:25 PM" },
      { user: users[13], contributionTime: "12:30 PM" },
    ],
  },
  {
    id: 2966252,
    question:
      "What are the benefits of using serverless architecture in web development?",
    asker: users[8],
    time: "12:25 PM",
    date: "July 23, 2023",
    isAnswered: varStatus(),
    contributors: [
      { user: users[2], contributionTime: "12:30 PM" },
      { user: users[6], contributionTime: "12:35 PM" },
    ],
  },
  {
    id: 4665325,
    question: "How do I optimize database queries for better performance?",
    asker: users[4],
    time: "12:30 PM",
    date: "July 23, 2023",
    isAnswered: varStatus(),
    contributors: [
      { user: users[5], contributionTime: "12:35 PM" },
      { user: users[1], contributionTime: "12:40 PM" },
    ],
  },
  {
    id: 4598371,
    question:
      "I'm trying to implement a sorting algorithm in Python for a large dataset, but it seems to be taking forever to process. What are some efficient techniques or optimizations I can apply to improve the performance of my sorting algorithm and handle large data sets more efficiently?",
    asker: users[13],
    time: "12:35 PM",
    date: "August 4, 2023",
    isAnswered: varStatus(),
    contributors: [{ user: users[4], contributionTime: "12:40 PM" }],
  },
  {
    id: 9784531,
    question:
      "How can I dynamically update the contents of a select dropdown based on the selected value of another select dropdown using JavaScript?",
    asker: users[0],
    time: "12:40 PM",
    date: "August 5, 2023",
    isAnswered: varStatus(),
    contributors: [],
  },
];

// Projects
export const projects: Project[] = [
  {
    id: 1,
    name: "React Web Application",
    description: "Building a modern web application using React and Redux.",
    startDate: new Date("2023-01-15"),
    endDate: new Date("2023-04-30"),
    status: "completed",
  },
  {
    id: 2,
    name: "Node.js API Development",
    description: "Creating a RESTful API using Node.js, Express, and MongoDB.",
    startDate: new Date("2023-02-10"),
    endDate: new Date("2023-09-30"),
    status: "ongoing",
  },
  {
    id: 3,
    name: "Python Data Analysis",
    description: "Analyzing large datasets with Python and Pandas.",
    startDate: new Date("2023-03-20"),
    status: "ongoing",
  },
  {
    id: 4,
    name: "Angular E-commerce Platform",
    description: "Developing an e-commerce platform using Angular and Firebase.",
    startDate: new Date("2023-04-05"),
    endDate: new Date("2023-06-30"),
    status: "completed",
  },
  {
    id: 5,
    name: "Java Mobile App",
    description: "Creating a mobile app for Android using Java and SQLite.",
    startDate: new Date("2023-05-10"),
    status: "on_hold",
  },
  {
    id: 6,
    name: "Swift iOS Game",
    description: "Designing and coding an iOS game using Swift and SpriteKit.",
    startDate: new Date("2023-06-25"),
    status: "on_hold",
  },
  {
    id: 7,
    name: "Vue.js Single Page App",
    description: "Developing a single-page application using Vue.js and Vuex.",
    startDate: new Date("2023-07-15"),
    status: "ongoing",
  },
  {
    id: 8,
    name: "Django Blog Platform",
    description: "Building a blog platform using Django and PostgreSQL.",
    startDate: new Date("2023-08-10"),
    endDate: new Date("2023-12-31"),
    status: "ongoing",
  },
  {
    id: 9,
    name: "C# Desktop Application",
    description: "Creating a desktop application with C# and WinForms.",
    startDate: new Date("2023-09-20"),
    status: "ongoing",
  },
  {
    id: 10,
    name: "Ruby on Rails API",
    description: "Developing a RESTful API using Ruby on Rails and MySQL.",
    startDate: new Date("2023-10-05"),
    endDate: new Date("2024-03-31"),
    status: "ongoing",
  },
  {
    id: 11,
    name: "Unity3D Game Development",
    description: "Building a 3D game using Unity3D and C# scripting.",
    startDate: new Date("2023-11-10"),
    status: "on_hold",
  },
  {
    id: 12,
    name: "TypeScript Library",
    description: "Creating a reusable library in TypeScript for data manipulation.",
    startDate: new Date("2023-12-25"),
    endDate: new Date("2024-02-28"),
    status: "completed",
  },
  {
    id: 13,
    name: "Machine Learning Research",
    description: "This project aims to conduct in-depth research and experimentation in the field of machine learning. The team will explore various algorithms, models, and techniques to solve real-world problems, such as image recognition, natural language processing, and predictive analytics. The research will involve extensive data analysis, model training, and performance evaluation. The project's goal is to make advancements in machine learning and contribute to the development of intelligent systems.",
    startDate: new Date("2023-07-15"),
    status: "ongoing",
  },
  {
    id: 14,
    name: "IoT Home Automation System",
    description: "In this project, we will design and implement a smart home automation system using Internet of Things (IoT) technologies. The system will integrate various IoT devices, sensors, and actuators to enable remote monitoring and control of home appliances and security features. We will develop a user-friendly mobile app that allows homeowners to manage their smart home remotely. Additionally, the project will emphasize data security and privacy to ensure that the system remains robust and protected against potential cyber threats.",
    startDate: new Date("2023-08-10"),
    endDate: new Date("2023-12-31"),
    status: "ongoing",
  },
  {
    id: 15,
    name: "Blockchain-Based Supply Chain Solution",
    description: "This project aims to create a decentralized supply chain solution using blockchain technology. The goal is to enhance transparency and traceability throughout the supply chain process, reducing fraud and ensuring the authenticity of products. We will leverage blockchain's distributed ledger to record every step of the supply chain, from raw material acquisition to the final product delivery. Smart contracts will automate contract enforcement, payment processing, and other relevant actions. The resulting platform will empower businesses and consumers with trust and reliability in the supply chain ecosystem.",
    startDate: new Date("2023-09-20"),
    status: "ongoing",
  },
  {
    id: 16,
    name: "Augmented Reality Game",
    description: "In this project, we will develop an exciting augmented reality (AR) game that blends the virtual world with the real environment. The game will be compatible with AR-capable smartphones and wearable devices, offering players a unique and immersive gaming experience. Players will embark on thrilling adventures as they interact with virtual characters and objects overlaid on the real-world surroundings. Our team will focus on optimizing the game's performance, designing captivating visuals, and incorporating innovative AR interactions to captivate players and keep them engaged.",
    startDate: new Date("2023-10-05"),
    endDate: new Date("2024-03-31"),
    status: "ongoing",
  },
];

