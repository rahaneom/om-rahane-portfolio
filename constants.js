export const METADATA = {
  author: "Om Rahane",
  title: "Om Rahane | Software Engineer Portfolio",
  description:
    "Software Engineering student specializing in full-stack development, machine learning, and scalable backend systems. Experienced in building real-world applications using Spring Boot, Node.js, and React, with hands-on internship experience at DRDO and Sumago Infotech.",
  siteUrl: "https://www.shubhporwal.me/",
  // twitterHandle: "@shubhporwal24",
  keywords: [
    "Om Rahane",
    "Software Engineer",
    "Full Stack Developer",
    "Machine Learning",
    "Spring Boot",
    "React Developer",
    "DevOps",
    "Portfolio",
  ].join(", "),
  image:
    "https://res.cloudinary.com/dywdhyojt/image/upload/v1721378510/social-preview.png",
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
  languagesAndTools: [
    "python",
    "java",
    "c++",
    "javascript",
    "nodejs",
    "spring",
    "git",
    "linux",
    "jenkins",
  ],
  librariesAndFrameworks: [
    "react",
    "redux",
    "nextjs",
    "tailwindcss",
    "daisyui",
  ],
  databases: ["postgresql", "mongodb"],
  other: ["machinelearning", "dsa", "oop"],
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
    live: "https://your-live-link.com",
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
    live: "https://your-live-link.com",
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
    live: "https://your-live-link.com",
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
    live: "https://your-live-link.com",
  },
];

export const WORK_CONTENTS = {
  GRAPEVINE: [
    {
      title: "Grapevine",
      description:
        "Grapevine is your anonymous office chat, letting coworkers speak openly, share gossip and connect without filters. Building on that same belief, Round1 AI brings it to hiring using AI-driven interviews to replace guesswork with genuine and meaningful conversations.",
      content: (
        <div className="flex items-center justify-center w-full h-full px-4 text-white">
          Connect anonymously. Share freely.
        </div>
      ),
    },
    {
      title: "Pioneering",
      description:
        "Hiring was broken — manual, biased, and slow. We launched Round1 AI to fix that: authentic voice interviews, built-in bias checks and real-time insights. Today, it powers thousands of interviews each week, letting teams hire smarter, faster and fairer.",
      content: (
        <div className="flex items-center justify-center w-full h-full px-4 text-white">
          Senior Frontend Engineer
        </div>
      ),
    },
    {
      title: "Elevate",
      description:
        "The early web app struggled with slow performance and zero retention. I rebuilt it from the ground up with a sleek UI, faster load times and SEO-optimized. Then seeded a rich content layer to spark discovery. The payoff? 6x more impressions and 10x the organic installs all without ads, just momentum.",
      content: (
        <div className="flex items-center justify-center w-full h-full px-4 text-white">
          Frontend Engineer
        </div>
      ),
    },
  ],
  DUKAAN: [
    {
      title: "Dukaan",
      description:
        "Dukaan is a platform that enables businesses to launch their online stores at ease.",
      content: (
        <div className="flex items-center justify-center w-full h-full px-4 text-white">
          Revolutionizing commerce, one click at a time
        </div>
      ),
    },
    {
      title: "Transformation",
      description:
        "Since 2023, the Dukaan Seller Dashboard struggled with technical issues and a broken user experience due to accumulated technical debt. Leading a team of two junior developers, we migrated the dashboard from CSR to SSR, redesigned the UI, and overhauled the codebase in the process. This resolved the technical debt and vastly improved the user experience, making it Dukaan's largest and most impactful migration.",
      content: (
        <div className="flex items-center justify-center w-full h-full px-4 text-white">
          Senior Frontend Engineer
        </div>
      ),
    },
    {
      title: "Evolution",
      description:
        "Recognizing the need for improved performance and user engagement, I spearheaded the migration of the Dukaan App from native to React-Native for iOS and Android platforms. This strategic move led to a X% enhancement in app performance and a Y% boost in user engagement, representing a significant milestone in the app's evolution.",
      content: (
        <div className="flex items-center justify-center w-full h-full px-4 text-white">
          Frontend Engineer
        </div>
      ),
    },
    {
      title: "Optimization",
      description:
        "Leveraging user feedback and analytics, I improved the seller web dashboard design, reducing bounce rates. Simultaneously, I overhauled the build process, slashing bundle size and boosting overall performance.",
      content: (
        <div className="flex items-center justify-center w-full h-full px-4 text-white">
          Frontend Engineer Intern
        </div>
      ),
    },
  ],
  // AVIATE: [
  //   {
  //     title: "Aviate",
  //     description:
  //       "Aviate is a preparation and mentorship platform for job-seekers that are seeking non-technical roles across top companies",
  //     content: (
  //       <div className="flex items-center justify-center w-full h-full px-4 text-white">
  //         Finding the right job isn&apos;t fate, it&apos;s navigation
  //       </div>
  //     ),
  //   },
  //   {
  //     title: "Innovation",
  //     description:
  //       "I spearheaded the development of Q-Rate, their flagship product, a voice-based applicant screening platform. Moreover, I took initiatives to enhance user engagement and drive substantial increases in daily traffic. Additionally, I implemented an error-logging and bug reporting system, significantly diminishing user-reported bugs.",
  //     content: (
  //       <div className="flex items-center justify-center w-full h-full px-4 text-white">
  //         Frontend Developer Intern
  //       </div>
  //     ),
  //   },
  // ],
  // SPACENOS: [
  //   {
  //     title: "Spacenos",
  //     description:
  //       "A dynamic startup dedicated to creating innovative products that make the world a better place.",
  //     content: (
  //       <div className="flex items-center justify-center w-full h-full px-4 text-white">
  //         We build apps that solve problems for the next billion people
  //       </div>
  //     ),
  //   },
  //   {
  //     title: "Trailblazing",
  //     description:
  //       "I led the comprehensive overhaul of the Admin Portal, implementing CRUD features for all services and providers. Additionally, I architected a feature enabling precise customer location tracking and delivering insightful usage statistics. Through optimized and compressed file serving, I catalyzed a remarkable Yx increase in page speed, resulting in a X% boost in customer retention.",
  //     content: (
  //       <div className="flex items-center justify-center w-full h-full px-4 text-white">
  //         Web Developer Intern
  //       </div>
  //     ),
  //   },
  // ],
};

export const GTAG = "G-5HCTL2TJ5W";
