import type { Metadata } from 'next';
import { FaReact, FaAws, FaMoneyCheckAlt, FaExchangeAlt, FaCloud, FaAndroid, FaMicrochip, FaPython, FaRaspberryPi, FaTasks, FaStripeS } from "react-icons/fa";
import { FaJava } from 'react-icons/fa6';
import { SiSpringboot, SiMysql, SiTypescript, SiMongodb, SiNextdotjs, SiChartdotjs, SiTailwindcss, SiAppwrite, SiNodedotjs, SiExpress, SiPostgresql, SiPrisma, SiSpring, SiPostman, SiHibernate, SiGithub, SiSwift, SiFirebase, SiXcode, SiDjango, SiReact } from "react-icons/si";

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
    title: "Embedded Software & Systems Engineering Intern",
    company: "IIT (BHU) Varanasi",
    location: "Varanasi, India",
    type: "Internship",
    date: "June 2025 – July 2025",
    department: "Department of Computer Science and Engineering",
    link: "https://github.com/Aanjaneya24/Research_Internship_IITBHU",
    points: [
      "Engineered a secure IoT communication stack (LoRaWAN on nRF54L15 & SX1261), improving network efficiency by 30%.",
      "Built low-level drivers in C (Zephyr RTOS) and integrated with APIs, enhancing system reliability by 20%.",
      "Applied secure authentication (OTAA) and optimized data transmission, extending wireless coverage beyond 500m.",
      "Reduced system power usage by 15% and improved scalability through iterative configuration tuning.",
      "Designed a novel data transmission protocol and implemented validation setups across macOS, Windows, and Linux."
    ],
    skills: ["C", "Zephyr RTOS", "LoRaWAN", "IoT", "Embedded Systems", "nRF54L15", "SX1261"],
  },
];

export const education = [
  {
    title: "B.Tech in Electronics and Communication Engineering with Minor in AI & ML",
    institution: "National Institute of Technology Delhi",
    location: "New Delhi, India",
    date: "Graduating 2027",
    grade: "CGPA: 9.0/10"
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
    title: "EduTrack - Smart School Management System",
    des: "Developed a scalable MERN application to manage student attendance, performance, and feedback with role-based access control and interactive dashboards, serving 100+ students.",
    img: "images/projects/project1.jpg",
    icons: [
      { icon: SiMongodb, color: "#47A248" },  // MongoDB
      { icon: SiExpress, color: "#000000" },  // Express.js
      { icon: FaReact, color: "#61DAFB" },  // React.js
      { icon: SiNodedotjs, color: "#339933" },  // Node.js
    ],
    link: "https://github.com/Aanjaneya24/EduTrack-Smart-School-Management-System",
  },
  {
    id: 2,
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
    id: 3,
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
];

export const achievements = [
  "Solved 400+ DSA problems on LeetCode and GeeksforGeeks, strengthening algorithms and coding skills.",
  "Semifinalist in Flipkart GRiD 7.0 after clearing two coding rounds.",
  "Advanced through two rounds of the Adobe Hackathon, showcasing strong problem-solving skills.",
  "Secured 10.0 SGPA in first year of B.Tech, reflecting strong academic foundation.",
  "Achieved 98.6 percentile in JEE Mains (Top 1.4% of 1M+ candidates)."
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
