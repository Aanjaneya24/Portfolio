import type { Metadata } from 'next';
import { FaReact, FaAws, FaMoneyCheckAlt, FaExchangeAlt, FaCloud, FaAndroid, FaMicrochip, FaPython, FaRaspberryPi, FaTasks, FaStripeS } from "react-icons/fa";
import { FaJava } from 'react-icons/fa6';
import { SiSpringboot, SiMysql, SiTypescript, SiMongodb, SiNextdotjs, SiChartdotjs, SiTailwindcss, SiAppwrite, SiNodedotjs, SiExpress, SiPostgresql, SiPrisma, SiSpring, SiPostman, SiHibernate, SiGithub, SiSwift, SiFirebase, SiXcode, SiDjango, SiReact, SiFastapi, SiRedis, SiRabbitmq, SiOpencv } from "react-icons/si";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export const siteMetadata = {
  title: 'Aanjaneya Pandey - Portfolio',
  description: 'Professional portfolio showcasing embedded systems, full-stack development projects and skills',
  author: 'Aanjaneya Pandey',
  siteUrl: 'https://aanjaneya24.github.io/portfolio/',
  twitterHandle: '@aanjaneya',
};

export const generateMetadata = (path: string): Metadata => {
  const currentUrl = `${siteMetadata.siteUrl}${basePath}${path}`;
  
  return {
    title: siteMetadata.title,
    description: siteMetadata.description,
    authors: [{ name: siteMetadata.author }],
    openGraph: {
      title: siteMetadata.title,
      description: siteMetadata.description,
      url: currentUrl,
      siteName: siteMetadata.title,
      type: 'website',
      images: [
        {
          url: `${currentUrl}/images/Aanjaneya.png`,
          width: 1200,
          height: 630,
          alt: siteMetadata.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: siteMetadata.title,
      description: siteMetadata.description,
      creator: siteMetadata.twitterHandle,
      images: [`${currentUrl}/images/Aanjaneya.png`],
    },
    robots: {
      index: true,
      follow: true,
    },
    metadataBase: new URL(siteMetadata.siteUrl),
  };
}; 

export const experiences = [
  {
    title: "Software Engineering Intern",
    company: "Apiva AI, KITEJOBS Pvt. Ltd.",
    location: "India",
    type: "Internship",
    date: "May 2026 – August 2026",
    points: [
      "Developed and debugged backend workflows for an automated application pipeline processing 100+ applications/day, implementing 6-stage state management, retry handling, and input validation that reduced recurring workflow failures by approximately 20%.",
      "Collaborated with the team and helped building 5+ internal APIs and logging utilities for application tracking and failure diagnosis, reducing average debugging time by approximately 30%."
    ],
    skills: ["Node.js", "REST APIs", "Backend Development", "Workflow Automation", "Logging & Monitoring"],
  },
  {
    title: "Software Research Intern",
    company: "Indian Institute of Technology (BHU), Varanasi",
    location: "Varanasi, India",
    type: "Research Internship",
    date: "June 2025 – July 2025",
    department: "Department of Computer Science and Engineering",
    link: "https://github.com/Aanjaneya24/Research_Internship_IITBHU",
    points: [
      "Built low-level communication drivers in C on Zephyr RTOS; developed a cross-platform benchmarking framework across 3 operating systems and 3+ hardware configurations.",
      "Applied data-driven tuning and probabilistic modelling to LoRaWAN communication, improving network efficiency by 30% and reliability by 20%."
    ],
    skills: ["C", "Zephyr RTOS", "LoRaWAN", "IoT", "Embedded Systems", "nRF54L15", "SX1261"],
  },
];

export const education = [
  {
    title: "B.Tech in Electronics and Communication Engineering with Minor in AI & ML",
    institution: "National Institute of Technology Delhi",
    location: "New Delhi, India",
    date: "Expected May 2027",
    grade: "CGPA: 8.80/10"
  },
  {
    title: "Senior Secondary",
    institution: "Ewing Christian Public School",
    location: "Prayagraj",
    date: "Completed 2022",
    grade: "Percentage: 91%"
  }
];

export const projects = [
  {
    id: 1,
    title: "HireSense - AI-Powered Recruitment Platform",
    des: "Developed an intelligent recruitment platform leveraging AI for automated candidate screening, resume parsing, and skill matching with secure authentication and role-based access control.",
    img: "images/projects/hiresense.jpg",
    icons: [
      { icon: SiMongodb, color: "#47A248" },  // MongoDB
      { icon: SiExpress, color: "#000000" },  // Express.js
      { icon: FaReact, color: "#61DAFB" },  // React.js
      { icon: SiNodedotjs, color: "#339933" },  // Node.js
    ],
    link: "https://hire-sense-zeta.vercel.app",
  },
  {
    id: 2,
    title: "EduTrack - Smart School Management System",
    des: "Developed a scalable MERN application to manage student attendance, performance, and feedback with role-based access control and interactive dashboards, serving 100+ students.",
    img: "images/projects/project1.jpg",
    icons: [
      { icon: SiMongodb, color: "#47A248" },  // MongoDB
      { icon: SiExpress, color: "#000000" },  // Express.js
      { icon: FaReact, color: "#61DAFB" },  // React.js
      { icon: SiNodedotjs, color: "#339933" },  // Node.js
    ],
    link: "https://edu-track-iota.vercel.app",
  },
  {
    id: 3,
    title: "Smart Inventory Tracker",
    des: "Programmed predictive ML models for inventory restocking with 15% improved forecast accuracy. Configured event notifications via MQTT and validated inputs from 50+ IoT sensors.",
    img: "images/projects/project2.png",
    icons: [
      { icon: FaPython, color: "#3776AB" },  // Python
      { icon: FaMicrochip, color: "#FF6F00" },  // IoT/ML
      { icon: FaCloud, color: "#4285F4" },  // MQTT/Cloud
      { icon: FaRaspberryPi, color: "#A22846" },  // IoT Sensors
    ],
    link: "https://github.com/Aanjaneya24/Smart_Inventory_Tracker",
  },
  {
    id: 4,
    title: "SmartSched - Task Management App",
    des: "Devised a scalable task management app for 100+ users with interactive dashboards, seamless backend API integration, and 30+ validated workflows ensuring reliability.",
    img: "images/projects/project3.png",
    icons: [
      { icon: SiMongodb, color: "#47A248" },  // MongoDB
      { icon: SiExpress, color: "#000000" },  // Express.js
      { icon: FaReact, color: "#61DAFB" },  // React.js
      { icon: SiNodedotjs, color: "#339933" },  // Node.js
    ],
    link: "https://github.com/Aanjaneya24/SmartSched",
  },
  {
    id: 5,
    title: "NextFlow - Visual AI Workflow Automation",
    des: "Architected a visual AI workflow automation platform with a React Flow canvas, drag-and-drop construction, and a DAG-based execution engine unifying 5 LLM providers behind a single execution layer.",
    img: "images/projects/nextflow.png",
    icons: [
      { icon: SiNextdotjs, color: "#000000" },  // Next.js
      { icon: SiTypescript, color: "#3178C6" },  // TypeScript
      { icon: SiPrisma, color: "#2D3748" },  // Prisma
      { icon: SiPostgresql, color: "#4169E1" },  // PostgreSQL
    ],
    link: "https://nextflow-7jvu.onrender.com",
  },
  {
    id: 6,
    title: "Rayvex - AI Revenue-Recovery Agent",
    des: "Built an AI revenue-recovery agent with a deterministic state machine and a 12-rule policy engine overriding LLM-proposed actions, verifying recovery only through independent payment-state confirmation.",
    img: "images/projects/rayvex.jpg",
    icons: [
      { icon: SiFastapi, color: "#009688" },  // FastAPI
      { icon: SiPostgresql, color: "#4169E1" },  // PostgreSQL
      { icon: SiRedis, color: "#DC382D" },  // Redis
      { icon: SiRabbitmq, color: "#FF6600" },  // RabbitMQ
    ],
    link: "https://github.com/Aanjaneya24/Rayvex",
  },
  {
    id: 7,
    title: "IntruSight - Real-Time AI Video Analytics",
    des: "Engineered a real-time AI video analytics platform for 4 concurrent camera streams with live monitoring, event playback, and analytics dashboards.",
    img: "images/projects/intrusight.jpg",
    icons: [
      { icon: FaPython, color: "#3776AB" },  // Python
      { icon: SiFastapi, color: "#009688" },  // FastAPI
      { icon: FaReact, color: "#61DAFB" },  // React.js
      { icon: SiOpencv, color: "#5C3EE8" },  // OpenCV
    ],
    link: "https://github.com/Aanjaneya24/IntruSight",
  },
];

export const achievements = [
  "Semifinalist, Flipkart GRiD 8.0 (AI Engineering), advancing through multiple national-level coding rounds.",
  "Advanced to Round 2 of Google BigCode Contest, ranking among the top 1,500 participants globally.",
  "Secured Rank #1 in NxtWave Code Combat, outperforming 10000+ participants nationally.",
  "Semifinalist in Flipkart GRiD 7.0 among thousands of participants, clearing multiple rigorous coding rounds showcasing algorithmic proficiency.",
  "Advanced through two competitive rounds of Adobe Hackathon, demonstrating innovative problem-solving and software development skills.",
  "Solved 700+ DSA problems across platforms; achieved Guardian (2,603 rating) on LeetCode.",
  "Consistent Codeforces participant with regular contest participation, specializing in data structures, algorithms, and optimization techniques.",
  "Secured 98.6 percentile in JEE Mains (Top 1.4% among 1M+ candidates), demonstrating outstanding quantitative aptitude and analytical reasoning.",
  "Secured a perfect 10.0 SGPA in first year of B.Tech, reflecting strong academic consistency."
];

export const positions = [
  {
    organization: "Think India Club | NIT Delhi",
    role: "Active Member",
    points: [
      "Organized and led 5+ seminars and technical discussions, engaging 50+ participants.",
      "Collaborated with peers to conduct technical workshops and events, improving teamwork and hands-on learning."
    ]
  },
  {
    organization: "Technical Club | NIT Delhi",
    role: "Active Member",
    points: [
      "Contributed to technical projects and coding events, fostering peer-to-peer learning and innovation.",
      "Assisted in organizing hackathons and coding challenges, enhancing problem-solving culture among students."
    ]
  }
];
