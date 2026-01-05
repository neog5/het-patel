// // import {
// //   AboutSectionType,
// //   ContactSectionType,
// //   ExperienceSectionType,
// //   FooterSectionType,
// //   HeroSectionType,
// //   NavbarSectionType,
// //   ProjectsSectionType,
// //   SkillsSectionType,
// //   SocialSectionType,
// // } from "../types/sections";
// // import { StringKeyValueType } from "../types";
// // import { resumeFileName } from "./config";
// // import { getId } from "./helper";

// /*
//  * =========================
//  * AUTHOR INFO
//  * =========================
//  */

// export const socialLinks = {
//   instagram: "https://www.instagram.com/gauravv1902",
//   github: "https://github.com/neog5",
//   linkedin: "https://www.linkedin.com/in/het-dilip-patel/",
// };

export const author = {
  name: "Het Patel",
  email: "het.dilippatel20@gmail.com",
};

// // export const seoData = {
// //   title: "Het | Full-Stack Developer",
// //   description:
// //     "Het Patel is a full-stack developer who specializes in building (and occasionally designing) exceptional visual interfaces.",
// //   author: author.name,
// //   image:
// //     "https://user-images.githubusercontent.com/85820227/231264058-df236c47-a8d2-4077-9fa6-3577aa18e8ca.png",
// //   url: "",
// //   keywords: [
// //     "Gaurav",
// //     "Gaurav Sarage",
// //     "@Gaurav Sarage",
// //     "Gaurav Sarage",
// //     "Portfolio",
// //     "Gaurav Portfolio ",
// //     "Gaurav Sarage Portfolio",
// //   ],
// // };

// /*
//  * =========================
//  * SECTIONS
//  * =========================
//  */

const resumeFileName = "Het_Patel_Resume.pdf";
// Navbar Section

export const navbarSection = {
  navLinks: [
    { name: "about", url: "/#about" },
    { name: "experience", url: "/#experience" },
    { name: "projects", url: "/#projects" },
    { name: "skills", url: "/#skills" },
    { name: "contact", url: "/#contact" },
  ],
  cta: {
    title: "resume",
    url: `/${resumeFileName}`,
  },
};

// // * Hero Section

export const heroSection = {
  subtitle: "Hello, my name is ",
  title: "Het Patel.",
  tagline: "I create applications that solve normal day problems.",
  description:
    "I'm a passionate Fullstack Web Developer having an experience of creating web applications. With React and Next.js being my recent favorites.",
  specialText: "Recent Graduate from UCI",

  cta: {
    title: "see my resume",
    url: `/${resumeFileName}`,
    hideInDesktop: true,
  },
};

// // * About Section

export const aboutSection = {
  title: "about me",
  list: {
    title: "Here are a few technologies I’ve been working with recently:",
    items: [
      "Next.js",
      "React.js",
      "TailwindCSS",
      "JavaScript",
      "TypeScript",
      "ColdFusion",
      "FastAPI",
      "Python",
    ],
  },
  img: "/het-patel.jpg",
};

// // * Skills Section

// Skills
export const skillsData = [
  {
    name: "HTML",
    icon: "/skills/html.png",
  },
  {
    name: "CSS",
    icon: "/skills/css.png",
  },
  {
    name: "JavaScript",
    icon: "/skills/js.png",
  },
  {
    name: "Flutter",
    icon: "/skills/flutter.png",
  },
  {
    name: "Python",
    icon: "/skills/python.png",
  },
  {
    name: "Coldfusion",
    icon: "/skills/coldfusion.png",
  },
  {
    name: "VS Code",
    icon: "/skills/vscode.png",
  },
  {
    name: "TailwindCSS",
    icon: "/skills/tailwind.png",
  },
  {
    name: "ReactJS",
    icon: "/skills/react.png",
  },
  {
    name: "TypeScript",
    icon: "/skills/ts.png",
  },
  {
    name: "Framer Motion",
    icon: "/skills/framer.png",
  },
  {
    name: "PostgreSQL",
    icon: "/skills/postgresql.png",
  },
  {
    name: "NextJS",
    icon: "/skills/nextjs.png",
  },
  {
    name: "NodeJS",
    icon: "/skills/nodejs.png",
  },
  {
    name: "MongoDB",
    icon: "/skills/mongodb.png",
  },
  {
    name: "Github",
    icon: "/skills/github.png",
  },
];

// // Experience
// export const experienceData = [
//   {
//     year: 1,
//     title: "Foundation and Basics",
//     education:
//       "High School Diploma: Focus on computer science, mathematics, and art/design courses.",
//     experience: [
//       "Basic HTML/CSS: Learn through online tutorials and courses.",
//       "Personal Projects: Create simple personal websites or blogs.",
//     ],
//   },
//   {
//     year: 2,
//     title: "Advanced Learning and Early Experience",
//     education:
//       "Associate’s Degree in Web Development or Design: Enroll in a 2-year program covering web development and design principles.",
//     experience: [
//       "Freelance Work: Take on small freelance projects to build a portfolio.",
//       "Online Courses and Certifications: Learn JavaScript, responsive design, and UX/UI design.",
//     ],
//   },
//   {
//     year: 3,
//     title: "Specialized Education and Real-World Application",
//     education:
//       "Online Courses and Bootcamps: Focus on specialized areas like front-end frameworks (React, Angular) and back-end technologies (Node.js).",
//     experience: [
//       "Internships: Secure internships with tech companies or design agencies.",
//       "Contribute to Open Source: Collaborate on open-source projects.",
//     ],
//   },
//   {
//     year: 4,
//     title: "Building Expertise and Expanding Skills",
//     education:
//       "Certifications: Obtain certifications in advanced web technologies.",
//     experience: [
//       "Full-Time Position: Work as a junior web developer or designer.",
//       "Portfolio Development: Continuously update your portfolio with professional and personal projects.",
//     ],
//   },
//   {
//     year: 5,
//     title: "Mastery and Leadership",
//     education:
//       "Workshops and Conferences: Attend industry events to stay updated.",
//     experience: [
//       "Senior Position: Aim for a senior web developer or lead designer role, mentoring junior colleagues.",
//       "Freelance and Consulting: Consider starting a freelance business or consulting practice.",
//     ],
//   },
// ];

// export const timeline = [
//   {
//     year: "Aug 2019 - Aug 2023",
//     title: "B.E. in Computer Science",
//     description:
//       "Completed my Bachelor's in Computer Science at The National Institute of Engineering (NIE), Mysore. Built my first 'Hello World' and never looked back! Graduated with a 3.92 GPA.",
//     icon: "👩🏽‍🎓",
//     coursework: [
//       "Data Structures and Algorithms",
//       "Database Management Systems",
//       "Computer Networks",
//       "Operating Systems",
//       "Software Engineering",
//       "Computer Architecture",
//     ],
//   },
//   {
//     year: "October 2021",
//     title: "First Open Source Contribution",
//     description:
//       "Participated in Hacktoberfest and made my first contribution. Explored codebases, submitted pull requests, and collaborated with developers worldwide. I'm still learning and growing!",
//     icon: "🌍",
//     funFact: "My first PR was merged at 2am and I couldn't sleep after!",
//   },
//   {
//     year: "May 2023 - Jun 2024",
//     title: "Professional Journey",
//     description:
//       "Started working on real-world projects, learning from amazing developers and building cool stuff. Every bug I fixed and feature I built made me better at what I did.",
//     icon: "💻",
//     funFact: "Realized that 'it works on my machine' is a universal truth!",
//   },
//   {
//     year: "Sept 2024 - Dec 2025",
//     title: "Master of Computer Science",
//     description:
//       "Back to being a student, but this time with real-world experience! Pursuing my Master's at University of California, Irvine. Ready to tackle new challenges and see where this journey takes me.",
//     icon: "🎓",
//     coursework: [
//       "Operating Systems",
//       "Data Structures",
//       "Artificial Intelligence",
//       "Machine Learning",
//       "Parallel and Distributed Computing",
//     ],
//   },
// ];

export const timelineData = [
  {
    year: "Aug 2018 - Aug 2022",
    title: "B.E. in Information Technology",
    place: "Savitribai Phule Pune University, Pune",
    description:
      "Graduated with a 3.94 GPA. Built strong foundations in Data Structures, Algorithms, and System Design.",
    icon: "🎓",
    tags: ["C++", "OS", "DBMS"],
  },
  {
    year: "Jan 2022 - Jul 2022",
    title: "Full Stack Development Intern",
    place: "udChalo, Pune",
    description:
      "First time working on an enterprise-scale project. Contributed to both frontend and backend using Angular and Node.js.",
    icon: "📋",
    tags: ["Angular", "Git", "Collaboration"],
  },
  {
    year: "Aug 2022 - Jul 2024",
    title: "Software Engineer",
    place: "SLB (Schlumberger)",
    description:
      "Working on building scalable web applications. Gained experience in handling real-world challenges and collaborating in a team.",
    icon: "💼",
    tags: ["ColdFusion", "Databases", "Azure"],
  },
  {
    year: "Sept 2024 - Dec 2025",
    title: "Master of Computer Science",
    place: "University of California, Irvine",
    description:
      "Specialized in Distributed Systems and AI. Graduated recently ready for full-time opportunities.",
    icon: "🎓",
    tags: ["AI/ML", "Distributed Systems"],
  },
  {
    year: "Present",
    title: "Building the Future",
    place: "Open to Work",
    description:
      "Building portfolio projects with Next.js and applying for Software Engineering roles.",
    icon: "🚀",
    tags: ["Next.js", "React", "Typescript"],
  },
];

// export const skillsSection = {
//   title: "what i do",
//   skills: [
//     {
//       id: 1,
//       title: "full stack development",
//       // animation lottie file: https://lottiefiles.com/
//       lottie: {
//         light: "/lotties/frontend.json",
//         dark: "/lotties/frontend-dark.json",
//       },
//       points: [
//         "Building responsive static websites using Next.js",
//         "Building responsive Single Page Apps in React.js",
//         "Building RESTful APIs in Express",
//       ],
//       softwareSkills: [
//         // iconify icons: https://icon-sets.iconify.design/
//         { name: "HTML5", icon: "vscode-icons:file-type-html" },
//         { name: "CSS3", icon: "vscode-icons:file-type-css" },
//         { name: "javaScript", icon: "vscode-icons:file-type-js-official" },
//         {
//           name: "typeScript",
//           icon: "vscode-icons:file-type-typescript-official",
//         },
//         { name: "node.js", icon: "logos:nodejs-icon" },
//         { name: "react.js", icon: "logos:react" },
//         { name: "next.js", icon: "logos:nextjs-icon" },
//         { name: "tailwind CSS", icon: "logos:tailwindcss-icon" },
//         { name: "redux", icon: "logos:redux" },
//         { name: "database", icon: "vscode-icons:file-type-sql" },
//       ],
//     },
//     {
//       id: 2,
//       title: "blockchain development",
//       lottie: {
//         light: "/lotties/ethereum.json",
//         dark: "/lotties/ethereum-dark.json",
//       },
//       points: [
//         "Experience in developing Smart Contract using Solidity & Ethereum",
//         "Developing NFT Smart Contracts using ERC-721 Token Standard",
//         "Building Dapps with React.js & Solidity using Web3.js",
//       ],
//       softwareSkills: [
//         { name: "ethereum", icon: "logos:ethereum" },
//         { name: "solidity", icon: "logos:solidity" },
//         { name: "metamask", icon: "logos:metamask-icon" },
//       ],
//     },
//   ],
// };

// // * Experience Section

// export const experienceSection = {
//   title: "My experience and volunteering",
//   experiences: [
//     {
//       company: "AirMenus",
//       companyUrl: "https://about.airmenus.in",
//       role: "Frontend Developer Intern",
//       started: "Oct 2022",
//       upto: "Present",
//       tasks: [
//         "Built 15+ dynamic web applications using React and Next.js, resulting in a 15% increase in user engagement.                      Collaborated closely 'with' the design team to implement pixel-perfect UI/UX designs, consistently delivering projects           on-time.",
//         "Developed and maintained responsive web applications for clients in the food and hospitality industry, enhancing their           online presence and customer engagement. Implemented Tailwind CSS to streamline the development process, reducing CSS            codebase by 20%",
//         "Collaborated with clients to gather project requirements and translate them into actionable technical tasks, ensuring            client expectations were met or exceeded.",
//       ],
//     },
//     {
//       company: "StarkCon",
//       companyUrl: "https://starkcon.com",
//       role: "StarkCon Cairo Fellow",
//       started: "January 2023",
//       upto: "March 2023",
//       tasks: [
//         "Selected for the first cohort of StarkCon Cairo Fellow program and got trained on blockchain, Cairo and started building on StarkNet. ",
//         "Underwent a 5 week program under mentorship of professionals from StarkNet ecosystem. ",
//         "Learnt how to setup Cairo environment, blockchain, basics of ZK and Cairo, writing smart contracts and Starklings.",
//         "Earned an exclusive NFT as proof of completion and custom swag kit.",
//       ],
//     },
//     {
//       company: "Yellow Fryum",
//       companyUrl: "https://yellowfryum.com",
//       role: "Frontend Developer & Research Intern",
//       started: "March 2022",
//       upto: "May 2022",
//       tasks: [
//         "Spearheaded the design and development of a responsive landing page using ReactJS and Tailwind CSS, resulting in a               40% increase in page load speed",
//         "Worked closely with a cross-functional team of 5 interns to ideate and implement UI/UX improvements, resulting in a 20%          boost in user engagement and a 15% increase in conversion rates.",
//         "Conducted user research and usability testing, gathering feedback from over 100+ users, which directly influenced                design decisions and led to a 30% improvement in user satisfaction scores.",
//         "Met project deadlines consistently, delivering good-quality code and designs on time.",
//       ],
//     },
//     {
//       company: "Google Cloud India",
//       companyUrl: "https://cloud.google.com/",
//       role: "Google Cloud Ready Facilitator",
//       started: "March 2022",
//       upto: "June 2022",
//       tasks: [
//         "Selected as Google Cloud Facilitator for my institution.",
//         "Enrolled 600+ students from mine as well as students all across India.",
//         "Trained and helped them complete skill badges and quests in the domains of Cloud Infrastructure, Cloud Native Application Development, Big Data and Machine Learning, Security, Machine Learning & AI",
//         "At the end of program, approximately 550 students completed their milestones and gained significant knowledge in their respective tracks",
//         "The institution as a whole achieved Milestone 3 out of 4 which is a big feat with its first year in the GCRF program.",
//       ],
//     },
//     // {
//     //   company: '',
//     //   companyUrl: '',
//     //   role: '',
//     //   started: '',
//     //   upto: '',
//     //   tasks: [

//     //   ],
//     // },
//   ],
// };

// // * Projects Section

// export const projectsSection = {
//   title: "my projects",
//   projects: [
//     {
//       id: 1,
//       name: "Instant AI",
//       url: "https://github.com/gaurav-sarage/InstantAI",
//       repo: "https://github.com/gaurav-sarage/InstantAI",
//       img: "",
//       year: 2023,
//       tags: ["NextJS", "Typescript", "Shadcn", "Prisma"],
//     },
//     {
//       id: 2,
//       name: "ShopTronics - eCommerce",
//       url: "https://github.com/gaurav-sarage/shopTronics-ecommerce",
//       repo: "https://github.com/gaurav-sarage/shopTronics-ecommerce",
//       img: "https://user-images.githubusercontent.com/85820227/231495891-ec7c33c6-7f36-41fe-8efd-3e992d5b800d.png",
//       year: 2023,
//       tags: ["React", "Scss", "HTML", "Strapi", "Stripe Payment Gateway"],
//     },
//     {
//       id: 3,
//       name: "ProShop MERN eCommerce",
//       url: "https://github.com/gaurav-sarage/ecommerce",
//       repo: "https://github.com/gaurav-sarage/ecommerce",
//       img: "https://user-images.githubusercontent.com/85820227/231498672-64b2e2ff-d987-45a3-bca6-5d8d89759360.png",
//       year: 2022,
//       tags: ["React", "Redux", "Express", "MongoDB"],
//     },
//     {
//       id: 4,
//       name: "Photo Gallery App (React)",
//       url: "https://gsierra19-photo-gallery-app.web.app/",
//       repo: "https://github.com/gaurav-sarage/photo-gallery-app",
//       img: "https://user-images.githubusercontent.com/85820227/250177861-cd5a5cd8-590e-49a1-92b5-4273aeee2f57.png",
//       year: 2023,
//       tags: ["ReactJS", "CSS", "JavaScript"],
//     },
//     {
//       id: 5,
//       name: "Modern Art Gallery",
//       url: "https://gaurav-sarage.github.io/Client-02/",
//       repo: "https://github.com/gaurav-sarage/Client-02/",
//       img: "https://user-images.githubusercontent.com/85820227/231500007-aa155693-1871-4e44-8152-9c230861e7bd.png",
//       year: 2022,
//       tags: ["HTML", "CSS"],
//     },
//     {
//       id: 6,
//       name: "countries app using REST API",
//       url: "https://country-api-react-app.netlify.app/",
//       repo: "https://github.com/gaurav-sarage/country-api",
//       img: "https://user-images.githubusercontent.com/85820227/231487782-eb60fb21-32ae-4012-9190-7c42be3d18e8.png",
//       year: 2022,
//       tags: ["React", "Sass"],
//     },
//     {
//       id: 7,
//       name: "GitHub User Search",
//       url: "https://gaurav-sarage.github.io/github-user-search/",
//       repo: "https://github.com/gaurav-sarage/github-user-search",
//       img: "https://user-images.githubusercontent.com/85820227/231501132-067311ef-2222-46d0-a20a-f0bf48827e01.png",
//       year: 2021,
//       tags: ["HTML", "CSS", "JavaScript"],
//     },
//     {
//       id: 8,
//       name: "Hackathon Portfolio",
//       url: "https://gaurav-sarage.github.io/webathon-portfolio/",
//       repo: "https://github.com/gaurav-sarage/webathon-portfolio",
//       img: "https://user-images.githubusercontent.com/85820227/233788920-7c76e976-2f42-4750-a6ce-ad0fb2eb405d.png",
//       year: 2022,
//       tags: ["HTML", "CSS", "JavaScript"],
//     },
//   ],
// };

// // * Contact Section

// export const contactSection = {
//   title: "get in touch",
//   subtitle: "what's next",
//   paragraphs: [
//     "I'm currently looking for a remote job or any new opportunities.",
//     "Whether you have a project to discuss or just want to say hi, my inbox is open for all!",
//   ],
//   link: `mailto:${author.email}`,
// };

// // Social Links Section

// export const socialSection = {
//   socialLinks: [
//     {
//       icon: "tabler:brand-github",
//       url: socialLinks.github,
//     },
//     {
//       icon: "mdi:instagram",
//       url: socialLinks.instagram,
//     },
//     // {
//     //   icon: "lucide:twitter",
//     //   url: socialLinks.twitter,
//     // },
//     {
//       icon: "lucide:linkedin",
//       url: socialLinks.linkedin,
//     },
//   ],
// };

// Footer Section

export const footerSection = {
  title: "Design Inspiration @Brittany Chiang",
  link: "https://github.com/bchiang7",
};
