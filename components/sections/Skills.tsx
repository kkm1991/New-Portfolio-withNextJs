"use client";

import Image from "next/image";
import { Tooltip } from "@/components/finalcomponents/tooltip";
import { useLanguage } from "@/context/LanguageContext";

const SKILLS = [
  {
    src: "/logos/Laravel.svg",
    bg: "",
    tooltip:
      'Laravel is a free, open-source PHP web framework designed to make web development faster and easier by providing a structured, "expressive" syntax.',
  },
  {
    src: "/logos/vue.svg",
    bg: "",
    tooltip:
      "Vue.js (or simply Vue) is a popular, open-source JavaScript framework used to build user interfaces and single-page applications (SPAs).",
  },
  {
    src: "/logos/nuxt.svg",
    bg: "",
    tooltip:
      'Nuxt.js is a powerful, open-source framework built on top of Vue.js that makes web development faster and more organized. If Vue is the "engine," Nuxt is the "luxury car" built around it.',
  },
  {
    src: "/logos/react.svg",
    bg: "",
    tooltip:
      "React.js (or simply React) is a popular, open-source JavaScript library developed by Meta (Facebook) for building user interfaces.",
  },
  {
    src: "/logos/next.svg",
    bg: "bg-amber-50",
    tooltip:
      'Next.js is a powerful framework built on top of React that gives you all the tools needed to build production-ready, high-performance websites.',
  },
  {
    src: "/logos/Bootstrap.png",
    bg: "",
    tooltip:
      'Bootstrap is the world’s most popular free frontend toolkit. It is a collection of pre-written CSS and JavaScript code that helps developers build responsive, mobile-first websites.',
  },
  {
    src: "/logos/tailwindcss.svg",
    bg: "",
    tooltip:
      'Tailwind CSS is a "utility-first" CSS framework. Unlike Bootstrap, it gives you low-level utility classes that let you build completely custom designs directly in your HTML.',
  },
  {
    src: "/logos/wordpress.svg",
    bg: "bg-amber-50",
    tooltip:
      "WordPress is the world’s most popular Content Management System (CMS). It allows you to create and manage content without needing to write code.",
  },
  {
    src: "/logos/ionic.svg",
    bg: "",
    tooltip:
      'Ionic is an open-source framework used to build high-quality mobile and desktop apps using web technologies you already know: HTML, CSS, and JavaScript.',
  },
  {
    src: "/logos/mysql.svg",
    bg: "",
    tooltip:
      "MySQL is the world’s most popular open-source Relational Database Management System (RDBMS).",
  },
  {
    src: "/logos/github.svg",
    bg: "",
    tooltip:
      "GitHub is a cloud-based platform that helps developers store, manage, and share their code. It is built on top of a tool called Git.",
  },
  {
    src: "/logos/aws.svg",
    bg: "bg-gray-200",
    tooltip:
      'AWS (Amazon Web Services) is the world’s most comprehensive and widely used cloud computing platform.',
  },
];

export default function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="py-16 px-6 md:px-20" suppressHydrationWarning>
      <div className="text-center mb-10">
        <span className="inline-block mb-3 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-mono text-white/40 tracking-widest uppercase">
          {t("skills_badge")}
        </span>
        <h2 className="text-4xl font-extrabold bg-gradient-to-r from-white via-amber-200 to-amber-400 bg-clip-text text-transparent">
          {t("skills_title")}
        </h2>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-6 place-items-center">
        {SKILLS.map((logo, index) => (
          <div
            key={index}
            className={`${logo.bg} flex items-center justify-center rounded-2xl p-4 transition duration-300 hover:scale-110 hover:shadow-xl`}
          >
            <Tooltip
              containerClassName="text-neutral-600 dark:text-neutral-400"
              content={logo.tooltip}
            >
              <Image
                src={logo.src}
                width={56}
                height={56}
                alt="tech logo"
                className="object-contain"
              />
            </Tooltip>
          </div>
        ))}
      </div>
    </section>
  );
}
