"use client";

import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import Image from "next/image";
import "react-vertical-timeline-component/style.min.css";
import { useInView } from "react-intersection-observer";

const experiences = [
  {
    title: "Junior MERN Stack Developer (Contract)",

    company_name: "Sprouto Group",

    icon: "/assets/images/mern.png",

    iconBg: "#fff",

    date: "May 2026",

    points: [
      "Designed and integrated a Resend API on the backend (Node.js/Express.js) and connected it end-to-end with the React.js frontend, enabling transactional email functionality within the application.",

      "Strengthened backend security by enhancing protected route architecture in Node.js, improving access control and ensuring unauthorized users were properly restricted.",

      "Improved frontend codebase quality through code splitting and component reusability — reducing bundle size and making the UI layer more maintainable and scalable.",

      "Participated in code reviews, providing and receiving feedback to uphold code quality standards within the team.",
    ],
  },

  {
    title: "Frontend Developer (Freelance)",

    company_name: "Self-Employed",

    icon: "/assets/icons/react.svg",

    iconBg: "#ffd6a5",

    date: "Nov 2025 - Apr 2026",

    points: [
      "Built and shipped an AI Customer Support Chatbot using Next.js App Router, TypeScript, Google Gemini API, and MongoDB — live on Vercel. Supports multi-tenant SaaS with multi-org authentication via Scalekit. Deployable via a single script tag (similar to Intercom/Tidio).",

      "Developed a full-stack MERN Expense Tracker with JWT authentication, protected routes, complete CRUD operations, and an interactive analytics dashboard using Recharts — live on Vercel.",

      "Deepened expertise in Next.js App Router, SSR/SSG patterns, TypeScript, JWT authentication flows, and third-party auth integrations (Scalekit).",
    ],
  },

  {
    title: "Associate Frontend Developer",

    company_name: "Deutics Global",

    icon: "/assets/icons/react.svg",

    iconBg: "#accbe1",

    date: "May 2024 - Oct 2024",

    points: [
      "Led frontend development initiatives using React.js, focusing on creating responsive and intuitive web applications.",

      "Developed and maintained the Camzify AI-powered surveillance platform (camzify.com), providing intelligent video monitoring, AI heat maps, and role-based access control.",

      "Built a scalable dashboard UI with a focus on performance, usability, and clean architecture, including Admin, Sub-Admin, and User interfaces with complete workflow handling.",

      "Implemented core features such as video backup management, license plans, AI heat map visualizations, and notifications.",

      "Designed advanced filters, pagination, and optimized data handling for large datasets, improving application performance with lazy loading, memoization, and efficient component structuring.",

      "Added smooth animations and micro-interactions to enhance user experience.",

      "Utilized Redux Toolkit for state management, ensuring efficient data flow and application scalability.",

      "Worked closely with designers using Figma to translate UI/UX designs into pixel-perfect, functional components.",
    ],
  },

  {
    title: "Junior React.js Developer",

    company_name: "Znz Technologies",

    icon: "/assets/icons/react.svg",

    iconBg: "#fbc3bc",

    date: "Jan 2024 - March 2024",

    points: [
      "Contributed to the development of an E-learning platform with interactive and community-driven features using React.js.",

      "Built reusable and modular components and efficiently managed application state to ensure scalability and maintainability.",

      "Developed core user features allowing users to create and manage gigs, as well as like and comment on content to encourage engagement.",

      "Implemented real-time chat functionality to enable seamless communication between users within the platform.",

      "Ensured fully responsive UI across mobile, tablet, and desktop devices.",
    ],
  },

  {
    title: "React.js Developer",

    company_name: "Vvork Cloud Technologies",

    icon: "/assets/icons/react.svg",

    iconBg: "#b7e4c7",

    date: "Nov 2021 - Sep 2022",

    points: [
      "Certified MERN Stack Developer with hands-on experience in developing and maintaining web applications using React.js, Node.js, Express.js, and MongoDB.",

      "Acquired industry-level skills in API integration, state management, and responsive design.",

      "Developed reusable components and implemented efficient data fetching techniques to enhance application performance.",

      "Gained proficiency in using design tools like Figma to convert UI/UX designs into functional components.",

      "Continuously learning and implementing industry best practices to deliver scalable and maintainable code.",
    ],
  },
];

const ExperienceCard = ({ experience, theme }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
    // ❌ Pehle: <div ref={ref}><VerticalTimelineElement> — yeh toot raha tha
    // ✅ Ab: VerticalTimelineElement directly return ho raha hai
    <VerticalTimelineElement
      visible={inView}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <Image
            src={experience.icon}
            alt={experience.company_name}
            width={40}
            height={40}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
      contentArrowStyle={{
        borderRight:
          theme === "dark" ? "7px solid #112240" : "7px solid #ffffff",
      }}
      contentStyle={{
        background: theme === "dark" ? "#112240" : "#ffffff",
        color: theme === "dark" ? "#e6f1ff" : "#0a192f",
        borderBottom: `8px solid ${experience.iconBg}`,
        boxShadow:
          theme === "dark"
            ? "0 4px 12px rgba(0, 0, 0, 0.4)"
            : "0 4px 12px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* ✅ Ref andar hai — sentinel div, koi layout effect nahi */}
      <div
        ref={ref}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: 1,
          height: 1,
          pointerEvents: "none",
        }}
      />
      <div>
        <h3
          className={`text-xl font-poppins font-semibold ${
            theme === "dark" ? "text-gray-100" : "text-black"
          }`}
        >
          {experience.title}
        </h3>
        <p
          className={`font-medium text-base ${
            theme === "dark" ? "text-gray-300" : "text-black"
          }`}
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>
      <ul className="my-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, idx) => (
          <li
            key={`experience-point-${idx}`}
            className={`${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            } font-normal pl-1 text-sm`}
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};
const Work = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      name="work"
      className={`w-full py-20 ${
        theme === "dark"
          ? "bg-[#0a192f] text-gray-300"
          : "bg-white text-gray-800"
      }`}
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full">
        <div className="pb-8">
          <p
            className={`text-4xl font-bold inline border-b-4 border-pink-600 ${
              theme === "dark" ? "text-gray-300" : "text-gray-800"
            }`}
          >
            Work Experience.
          </p>
          <p className="py-6">
            I've worked with all sorts of companies, leveling up my skills and
            teaming up with smart people. Here's the rundown:
          </p>
        </div>
        <div className="w-full">
          <VerticalTimeline
            animate={true}
            lineColor={theme === "dark" ? "#e5e7eb" : "#232631"}
          >
            {experiences.map((experience) => (
              <ExperienceCard
                key={experience.company_name}
                experience={experience}
                theme={theme}
              />
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </div>
  );
};
export default Work;
