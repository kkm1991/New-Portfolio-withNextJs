"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const EXPERIENCES = [
  {
    id: 1,
    title: "Full-Stack Developer",
    company: "Audit Company (Win Thin & Associates)",
    description: "Developed attendance and timesheet management systems using Vue.js, Pinia, PrimeVue, and Laravel REST API. Managed cloud infra on AWS.",
    tech: ["Vue.js", "Laravel", "MySQL", "AWS EC2", "S3"],
    side: "left"
  },
  {
    id: 2,
    title: "Full-Stack Developer",
    company: "Mitzutun Myint Company",
    description: "Built a salary payment system using Laravel MVC, transformed into a modern Vue.js + Laravel API architecture for scalability.",
    tech: ["Laravel", "Vue.js", "PostgreSQL"],
    side: "right"
  },
  {
    id: 3,
    title: "Web Developer",
    company: "Freelance & Project-Based",
    description: "Built multiple websites for various clients using Vue.js, Next.js, and WordPress. Delivered high-performance static and dynamic sites.",
    tech: ["Next.js", "WordPress", "Firebase"],
    side: "left"
  }
];

export default function Experience() {
  const { t } = useLanguage();

  return (
    <section id="experience" className="py-24 px-6 md:px-20 relative overflow-hidden" suppressHydrationWarning>
      <div className="container mx-auto max-w-6xl">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-20"
        >
          <span className="inline-block mb-3 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-mono text-neutral-500 dark:text-white/40 tracking-widest uppercase">
            {t("experience_badge")}
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-neutral-800 via-neutral-600 to-neutral-800 dark:from-white dark:via-amber-200 dark:to-amber-400 bg-clip-text text-transparent">
            {t("experience_title")}
          </h2>
        </motion.div>

        <div className="relative mx-auto max-w-4xl pt-10">
          {/* Vertical Line with Progress Gradient */}
          <div className="absolute left-6 top-0 h-full w-[2px] bg-neutral-200 dark:bg-neutral-800 md:left-1/2 md:-translate-x-1/2 overflow-hidden">
            <motion.div 
              style={{ originY: 0 }}
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="h-full w-full bg-gradient-to-b from-amber-500 via-orange-500 to-indigo-500"
            />
          </div>

          {EXPERIENCES.map((exp, index) => (
            <div key={exp.id} className={`relative mb-24 md:flex items-center ${exp.side === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'} justify-between`}>
              {/* Dot on the timeline */}
              <div className="absolute left-6 top-6 z-20 flex h-6 w-6 items-center justify-center rounded-full bg-white dark:bg-neutral-900 border-4 border-amber-500 shadow-lg md:left-1/2 md:-translate-x-1/2 md:top-1/2 md:-translate-y-1/2">
                <div className="h-2 w-2 rounded-full bg-amber-500 animate-pulse" />
              </div>

              {/* Content Card */}
              <motion.div
                initial={{ opacity: 0, x: exp.side === 'left' ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className={`ml-16 md:ml-0 md:w-[42%] group`}
              >
                <div className="glass-morphism relative overflow-hidden rounded-[32px] p-8 shadow-xl transition-all duration-300 hover:shadow-amber-500/10 hover:border-amber-500/30">
                  {/* Subtle card glow */}
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <span className="text-xs font-bold text-amber-500 uppercase tracking-widest mb-2 block">{exp.company}</span>
                  <h3 className="text-2xl font-bold mb-4 text-foreground">{exp.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed font-medium">{exp.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span key={t} className="px-3 py-1 text-[10px] font-bold rounded-full border border-neutral-200 dark:border-white/5 bg-white/50 dark:bg-white/5 text-neutral-600 dark:text-neutral-400">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
              
              {/* Vertical spacing for mobile */}
              <div className="md:w-1/2" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
