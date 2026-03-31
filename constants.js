export const METADATA = {
  author: "Om Rahane",
  title: "Om Rahane | Software Engineer Portfolio",
  description:
    "Software Engineering student specializing in full-stack development, machine learning, and scalable backend systems. Experienced in building real-world applications using Spring Boot, Node.js, and React, with hands-on internship experience at DRDO and Sumago Infotech.",
  siteUrl: "https://omrahane.vercel.app/",
  keywords: [
    "Om Rahane",
    "Software Engineer",
    "Full Stack Developer",
    "ML",
    "Spring Boot",
    "React Developer",
    "DevOps",
    "Portfolio",
  ].join(", "),
  image: "/preview.png",
  language: "English",
  themeColor: "#000000",
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Education",
    ref: "education",
  },
  {
    name: "Skills",
    ref: "skills",
  },
  {
    name: "Projects",
    ref: "projects",
  },
  {
    name: "Work",
    ref: "work",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "I build scalable backend systems",
  "I develop AI-powered applications",
  "I design full-stack web platforms",
];

export const SOCIAL_LINKS = [
  {
    name: "mail",
    url: "mailto: rahaneom44@gmail.com",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/om-rahane/",
  },
  {
    name: "github",
    url: "https://github.com/rahaneom",
  },
];

export const SKILLS = {
  languagesAndTools: ["python", "java", "c++", "javascript"],
  librariesAndFrameworks: [
    "react",
    "spring",
    "nodejs",
    "redux",
    "nextjs",
    "tailwindcss",
    // "daisyui",
  ],
  databases: ["postgresql", "mongodb"],
  other: ["git", "linux", "jenkins", "docker", "ml"],
};

export const PROJECTS = [
  {
    name: "Saksham : Mental Health Platform",
    imageKey: "saksham",
    description:
      "Anonymous student support platform with ML-powered assistance and counsellor interaction, improving response efficiency and user engagement.",
    gradient: ["#82d8db", "#06B6D4"],
    tech: ["spring", "redux", "supabase"],
    github: "https://github.com/rahaneom/saksham",
    live: "https://saksham-frontend-6w8h.onrender.com/",
  },
  {
    name: "JanManch : Citizen Engagement Platform",
    imageKey: "janmanch",
    description:
      "Role-based governance platform to bridge the gap between citizens and local corporators, MPs and MLAs. Incorporated with JWT authentication and RBAC, reducing unauthorized access by 30%.",
    gradient: ["#62da8e", "#22C55E"],
    tech: ["react", "nodejs", "mongodb"],
    github: "https://github.com/your-link",
    live: "https://janmanch.vercel.app/",
  },
  {
    name: "EatDecoded : AI Nutrition Platform",
    imageKey: "eatdecoded",
    description:
      "AI-powered nutrition analysis platform with secure REST APIs and structured data handling.",
    gradient: ["#F59E0B", "#EF4444"],
    tech: ["postgresql", "nodejs", "gemini"],
    github: "https://github.com/",
    // live: "https://your-live-link.com",
  },
  // {
  //   name: "Fake News Detection System",
  //   imageKey: "fakenews",
  //   description:
  //     "Built an NLP pipeline using TF-IDF, Word2Vec, LSTM, and BERT embeddings to classify fake news. Implemented preprocessing, feature engineering, and multiple model evaluations for robust performance.",
  //   gradient: ["#7C3AED", "#9333EA"],
  //   tech: ["python", "huggingface", "machinelearning"],
  // },
  {
    name: "Anantarix AI Chatbot",
    imageKey: "anantarix",
    description:
      "MERN-based intelligent chatbot integrated with Gemini API for real-time responses, featuring OTP-based authentication and a modern responsive UI.",
    gradient: ["#0EA5E9", "#06B6D4"],
    tech: ["tailwindcss", "mongodb", "gemini"],
    github: "https://github.com/rahaneom/anantarix-bot",
    live: "https://anantarix-bot-frontend.onrender.com/",
  },
  // {
  //   name: "Online Retail Data Analysis",
  //   imageKey: "retail",
  //   description:
  //     "Performed large-scale analysis on 300K+ retail transactions using Pandas and FireDucks to extract business insights and trends.",
  //   gradient: ["#10B981", "#059669"],
  //   tech: ["python", "pandas", "dataanalysis"],
  // },
  {
    name: "Aston Martin Inspired Website",
    imageKey: "astonmartin",
    description:
      "React-based modern UI inspired by Aston Martin design, featuring interactive components and enhanced user experience.",
    gradient: ["#1F2937", "#111827"],
    tech: ["react", "bootstrap"],
    github: "https://github.com/rahaneom/aston-martin-inspired",
    live: "https://aston-martin-am.vercel.app/",
  },
];

export const WORK_CONTENTS = {
  DRDO: [
    {
      title: "Defence Research and Development Organisation (DRDO)",
      logo: "drdo.png",
      description: [
        "Built AI-enabled control logic in Python for a research-grade 7-DOF humanoid robotic system.",
        "Implemented real-time data handling and execution flow for sensor-driven robotics workflows.",
        "Contributed to system-level development in a research-driven environment.",
      ],
      tech: ["Python", "Linux Ubuntu", "Machine Learning", "Robotics", "Git"],
      content: (
        <div className="flex items-center justify-center w-full h-full text-center text-white">
          <p className="text-3xl font-semibold md:text-2xl">
            Research Intern <br />
            <span className="text-base text-gray-300">
              May 2025 – July 2025
            </span>
          </p>
        </div>
      ),
    },
  ],

  SUMAGO: [
    {
      title: "Sumago Infotech",
      logo: "sumago.png",
      description: [
        "Developed production-level applications using React, Node.js, and MongoDB.",
        "Designed and integrated RESTful APIs to support CRUD operations and improve data synchronization.",
        "Collaborated on real client projects and delivered client-facing features.",
      ],
      tech: ["React", "Node.js", "Express", "MongoDB", "REST APIs"],
      content: (
        <div className="flex items-center justify-center w-full h-full text-center text-white">
          <p className="text-3xl font-semibold md:text-2xl">
            Full Stack Developer Intern <br />
            <span className="text-base text-gray-300">
              Jan 2024 – April 2024
            </span>
          </p>
        </div>
      ),
    },
  ],
};

// export const WORK_CONTENTS = {
// DRDO: [
//   {
//     title: "DRDO",
//     description:
//       "Worked on real-world problem solving in a research-driven environment, contributing to system-level development and analysis.",
//     content: (
//       <div className="flex items-center justify-center w-full h-full text-center text-white">
//         <p className="text-xl font-semibold md:text-2xl">
//           Research Intern <br />
//           <span className="text-sm text-gray-300">May 2025 – July 2025</span>
//         </p>
//       </div>
//     ),
//   },
//   {
//     title: "Technologies",
//     description:
//       "Python, Machine Learning, Backend Systems, Data Processing, System Design",
//     content: null,
//   },
// ],
// SUMAGO: [
//   {
//     title: "Sumago Infotech Pvt. Ltd.",
//     description:
//       "Worked as a Software Developer Intern contributing to real client projects and production-level applications.",
//     content: (
//       <div className="flex items-center justify-center w-full h-full text-center text-white">
//         <p className="text-xl font-semibold md:text-2xl">
//           Full Stack Development Intern <br />
//           <span className="text-sm text-gray-300">Jan 2024 – April 2024</span>
//         </p>
//       </div>
//     ),
//   },
//   {
//     title: "Technologies",
//     description: "HTML, CSS, React.js, Node.js, Express.js, MongoDB",
//     content: null,
//   },
// ],
// };

export const GTAG = "G-5HCTL2TJ5W";
