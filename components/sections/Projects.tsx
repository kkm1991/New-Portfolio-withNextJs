"use client";

import { motion } from "framer-motion";
import ProjectCarousel from "@/components/finalcomponents/projectCarousel";
import { useLanguage } from "@/context/LanguageContext";

const SPOTLIGHTS = [
  {
    title: "MyanmarPoly",
    tagline: "myanmarpoly.online",
    badge: "🎮 Featured Project",
    desc: "A real-time multiplayer Monopoly-style board game themed around Myanmar cities. Built entirely from scratch with a custom game engine, live socket events, and a secure auth system.",
    tech: ["Next.js 16", "Node.js", "Socket.io", "NeonDB", "Firebase", "TailwindCSS"],
    url: "https://myanmarpoly.online",
    gradient: "from-amber-950/60 via-orange-950/40 to-yellow-950/20",
    border: "border-amber-500/20",
    accent: "amber",
    features: [
      { icon: "⚡", label: "Real-time Multiplayer", sub: "Socket.io rooms" },
      { icon: "🏦", label: "Property System", sub: "Buy, sell & mortgage" },
      { icon: "🔨", label: "Live Auctions", sub: "Bid in real time" },
    ]
  },
  {
    title: "Nexus Multi-Branch POS & Android App",
    tagline: "nexuspos.online",
    badge: "🚀 Active Development",
    desc: "A complete business solution with multi-branch stock synchronization, a native Android application for POS terminals, advanced RBAC, and an automated ticketing system.",
    tech: ["Next.js 16", "Kotlin", "Jetpack Compose", "Prisma", "PostgreSQL", "NextAuth"],
    url: "https://www.nexuspos.online",
    gradient: "from-slate-950/60 via-indigo-950/40 to-slate-950/20",
    border: "border-indigo-500/20",
    accent: "indigo",
    features: [
      { icon: "🏪", label: "Multi-branch Sync", sub: "Real-time balance" },
      { icon: "📱", label: "Android POS App", sub: "Native Terminal UI" },
      { icon: "📦", label: "Inventory Logic", sub: "Stock movements" },
    ]
  }
];

export default function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="py-24 px-6 md:px-20 relative overflow-hidden" suppressHydrationWarning>
      <div className="container mx-auto max-w-6xl">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-16"
        >
          <span className="inline-block mb-3 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-mono text-neutral-500 dark:text-white/40 tracking-widest uppercase">
            {t("projects_badge")}
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-neutral-800 via-neutral-600 to-neutral-800 dark:from-white dark:via-amber-200 dark:to-amber-400 bg-clip-text text-transparent">
            {t("projects_title")}
          </h2>
          <p className="mt-4 text-sm text-neutral-500 max-w-md mx-auto">{t("projects_active")}</p>
        </motion.div>

        <div className="space-y-12">
          {SPOTLIGHTS.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className={`relative glass-morphism group mx-auto max-w-5xl rounded-[40px] shadow-2xl overflow-hidden p-8 md:p-12 border-0`}
            >
              {/* Overlay for specific project gradients - softened to keep glass feel */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-40 -z-10`} />
              {/* Background Glow */}
              <div className={`absolute top-0 right-0 w-96 h-96 bg-${project.accent}-500/10 rounded-full blur-[100px] -z-10 transition-transform group-hover:scale-110`} />

              <div className="flex flex-col gap-10 lg:flex-row lg:items-center">
                <div className="flex-1 space-y-6">
                  <div className="flex items-center gap-4 flex-wrap">
                    <span className={`rounded-full bg-${project.accent}-500 px-4 py-1.5 text-[10px] font-black text-white uppercase tracking-wider`}>
                      {project.badge}
                    </span>
                    <span className="text-sm font-mono text-white/40">{project.tagline}</span>
                  </div>

                  <h3 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
                    {project.title}
                  </h3>
                  
                  <p className="text-lg text-neutral-400 leading-relaxed font-medium">
                    {project.desc}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tag) => (
                      <span key={tag} className={`rounded-full border border-${project.accent}-500/20 bg-${project.accent}-500/10 px-4 py-1.5 text-xs font-bold text-${project.accent}-300`}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 rounded-full bg-${project.accent}-500 px-8 py-4 text-sm font-black text-white hover:brightness-110 hover:-translate-y-1 transition-all shadow-xl shadow-${project.accent}-500/20`}
                    >
                      🌐 Visit Website
                      <span className="text-lg">→</span>
                    </a>
                  </div>
                </div>

                <div className="lg:w-80 grid gap-4 grid-cols-2 lg:grid-cols-1">
                  {project.features.map((f) => (
                    <div key={f.label} className="glass-morphism group/feature flex items-center gap-4 rounded-[24px] p-4 transition-colors">
                      <div className="text-2xl bg-white/5 w-12 h-12 flex items-center justify-center rounded-2xl group-hover/feature:scale-110 transition-transform">{f.icon}</div>
                      <div>
                        <div className="text-xs font-black text-white uppercase tracking-tight">{f.label}</div>
                        <div className="text-[10px] text-white/40 font-bold">{f.sub}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Carousel Component */}
        <div className="mt-24">
          <ProjectCarousel />
        </div>
      </div>
    </section>
  );
}
