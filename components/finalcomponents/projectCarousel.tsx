"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import clsx from "clsx";

const projects = [
  {
    id: 1,
    title: "Nexus Multi-Branch POS & Android App",
    badge: "🚀 New Feature",
    badgeColor: "from-indigo-500 to-purple-500",
    gradient: "from-slate-900/60 via-indigo-900/40 to-slate-900/30",
    accentColor: "bg-indigo-500",
    dotColor: "bg-indigo-400",
    desc: "A comprehensive multi-branch POS and inventory management system with a native Android application. Features real-time stock tracking across multiple locations, automated financial reporting, advanced RBAC, and a mobile POS terminal for on-the-go sales.",
    tools: "Next.js 16 • Kotlin • Jetpack Compose • Prisma • PostgreSQL (Neon) • NextAuth • Resend SDK",
    highlights: ["Multi-branch inventory sync", "Android POS Terminal UI", "Inbound email support system", "Role-based permission logic"],
    url: "https://www.nexuspos.online",
  },
  {
    id: 2,
    title: "MyanmarPoly",
    badge: "🎮 Featured",
    badgeColor: "from-amber-500 to-orange-500",
    gradient: "from-amber-900/60 via-orange-900/40 to-yellow-900/30",
    accentColor: "bg-amber-500",
    dotColor: "bg-amber-400",
    desc: "A real-time multiplayer Monopoly board game built around Myanmar cities. Players can create/join rooms, buy properties, pay rent, draw Chance & Community Chest cards, auction properties, and trade — all in real time.",
    tools: "Next.js 16 • Node.js • Socket.io • NeonDB (PostgreSQL) • Firebase • TailwindCSS",
    url: "https://myanmarpoly.online",
    highlights: ["Real-time multiplayer via Socket.io", "JWT auth + email verification", "Live auction & trading system", "Myanmar-themed board & properties"],
  },
  {
    id: 3,
    title: "Realtime Voting System",
    badge: "⚡ Live",
    badgeColor: "from-blue-500 to-cyan-500",
    gradient: "from-blue-900/60 via-cyan-900/40 to-indigo-900/30",
    accentColor: "bg-blue-500",
    dotColor: "bg-blue-400",
    desc: "Developed a real-time voting system using Vue.js and Firebase Realtime Database to deliver instant vote updates and live result tracking for multiple simultaneous polls.",
    tools: "Vue.js • Firebase Realtime Database",
    highlights: ["Instant vote synchronization", "Live result charts", "Multi-poll support", "Mobile-responsive UI"],
    url: null,
  },
  {
    id: 4,
    title: "Salary Payment System",
    badge: "✅ Production",
    badgeColor: "from-green-500 to-emerald-500",
    gradient: "from-green-900/60 via-emerald-900/40 to-teal-900/30",
    accentColor: "bg-green-500",
    dotColor: "bg-green-400",
    desc: "Built a salary payment system using Laravel MVC, later upgraded to a Vue.js frontend with a Laravel API backend. Used in production for over one year at Mitzutun Myint Company.",
    tools: "Laravel MVC • Vue.js • Laravel REST API • MySQL",
    highlights: ["1+ year in active production", "Full payroll workflow", "Vue.js SPA frontend", "Laravel API backend"],
    url: null,
  },
  {
    id: 5,
    title: "Attendance & Timesheet System",
    badge: "🏢 Enterprise",
    badgeColor: "from-purple-500 to-violet-500",
    gradient: "from-purple-900/60 via-violet-900/40 to-indigo-900/30",
    accentColor: "bg-purple-500",
    dotColor: "bg-purple-400",
    desc: "Built for an audit company using Vue.js, Pinia, and PrimeVue with Laravel API secured by Sanctum. Daily attendance is captured via an Android app built with Ionic Capacitor with GPS-based check-in.",
    tools: "Vue.js • Pinia • PrimeVue • Laravel API • Ionic Capacitor • AWS EC2 • S3",
    highlights: ["GPS-based Android app check-in", "AWS EC2 + S3 deployment", "Sanctum-secured REST API", "Full timesheet reporting"],
    url: null,
  },
  {
    id: 6,
    title: "Sales Management System",
    badge: "🖥️ Desktop",
    badgeColor: "from-rose-500 to-pink-500",
    gradient: "from-rose-900/60 via-pink-900/40 to-red-900/30",
    accentColor: "bg-rose-500",
    dotColor: "bg-rose-400",
    desc: "A desktop-based sales management system built with C# as my first self-learning project. Designed to manage sales workflows and improve operational efficiency.",
    tools: "C# • MySQL • .NET WinForms",
    highlights: ["First full self-learning project", "Sales workflow automation", "MySQL data persistence", "Windows desktop app"],
    url: null,
  },
];

export default function ProjectCarousel() {
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isHolding, setIsHolding] = useState(false);

  const dragX = useMotionValue(0);
  const smoothDragX = useSpring(dragX, {
    stiffness: 120,
    damping: 25,
    mass: 1.2,
  });

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isPaused || isHolding) return;
    intervalRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % projects.length);
    }, 4800);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused, isHolding]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleDragEnd = (_: any, info: any) => {
    const distance = info.offset.x;
    const threshold = 70;
    if (distance < -threshold) {
      setActive((prev) => (prev + 1) % projects.length);
    } else if (distance > threshold) {
      setActive((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
    }
    dragX.set(0);
    setTimeout(() => {
      setIsHolding(false);
      setIsPaused(false);
    }, 600);
  };

  return (
    <div className="w-full">
      {/* 3D Carousel */}
      <div
        className="relative flex h-[700px] w-full items-center justify-center overflow-hidden"
        style={{ perspective: "1400px" }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {projects.map((project, index) => {
          let offset = index - active;
          if (offset > projects.length / 2) offset -= projects.length;
          if (offset < -projects.length / 2) offset += projects.length;
          const isActive = index === active;

          return (
            <motion.div
              key={project.id}
              drag={isActive ? "x" : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.15}
              style={{ x: isActive ? smoothDragX : 0 }}
              animate={{
                x: offset * 330,
                scale: offset === 0 ? 1 : 0.8,
                rotateY: offset * -38,
                opacity: Math.abs(offset) > 1 ? 0 : 1,
                filter: offset === 0 ? "blur(0px)" : "blur(5px)",
                zIndex: 10 - Math.abs(offset),
              }}
              transition={{
                x: { duration: 1.5, ease: [0.22, 1, 0.36, 1] },
                scale: { duration: 1.2, ease: "easeOut" },
                rotateY: { duration: 1.4, ease: "easeOut" },
                filter: { duration: 1.0, ease: "easeOut" },
                opacity: { duration: 0.6 },
              }}
              className={clsx(
                "absolute w-[300px] h-[600px] select-none rounded-3xl p-0 overflow-hidden",
                "border border-white/10",
                "shadow-[0_25px_60px_rgba(0,0,0,0.5)]",
                isActive ? "cursor-grab z-20" : "cursor-default"
              )}
              onPointerDown={() => { setIsHolding(true); setIsPaused(true); }}
              onPointerUp={() => { setIsHolding(false); setIsPaused(false); }}
              onPointerCancel={() => { setIsHolding(false); setIsPaused(false); }}
              onDragStart={() => { setIsHolding(true); setIsPaused(true); }}
              onDragEnd={handleDragEnd}
            >
              {/* Card background gradient */}
              <div className={clsx("absolute inset-0 bg-gradient-to-br", project.gradient)} />
              {/* Subtle grid texture */}
              <div
                className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
                  backgroundSize: "24px 24px",
                }}
              />
              {/* Glow orb top-right */}
              <div className={clsx("absolute -top-12 -right-12 w-40 h-40 rounded-full opacity-30 blur-3xl", project.accentColor)} />

              {/* Content */}
              <div className="relative z-10 flex h-full flex-col p-6">
                {/* Badge */}
                <div className="mb-4">
                  <span className={clsx(
                    "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r",
                    project.badgeColor
                  )}>
                    {project.badge}
                  </span>
                </div>

                {/* Title */}
                <motion.h3
                  animate={{ opacity: isActive ? 1 : 0.5 }}
                  className="mb-1 text-2xl font-extrabold tracking-tight text-white leading-tight"
                >
                  {project.title}
                </motion.h3>

                {/* Tools */}
                <p className="mb-4 text-xs font-mono text-white/50 leading-relaxed">{project.tools}</p>

                {/* Divider */}
                <div className={clsx("h-px w-full mb-4 opacity-20", project.accentColor)} style={{ background: "linear-gradient(to right, currentColor, transparent)" }} />

                {/* Description */}
                <p className="mb-5 text-sm leading-relaxed text-white/70 flex-1">
                  {project.desc}
                </p>

                {/* Highlights */}
                <div className="space-y-2 mb-5">
                  {project.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className={clsx("w-1.5 h-1.5 rounded-full flex-shrink-0", project.dotColor)} />
                      <span className="text-xs text-white/60">{h}</span>
                    </div>
                  ))}
                </div>

                {/* Link Button */}
                {project.url ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className={clsx(
                      "inline-flex items-center justify-center gap-2 rounded-2xl px-4 py-2.5 text-sm font-semibold text-white transition-all",
                      "bg-gradient-to-r from-amber-500 to-orange-500 hover:opacity-90 hover:scale-105 shadow-lg"
                    )}
                  >
                    🌐 Visit myanmarpoly.online
                  </a>
                ) : (
                  <div className={clsx(
                    "inline-flex items-center gap-2 rounded-2xl px-4 py-2.5 text-xs font-medium text-white/40",
                    "border border-white/10"
                  )}>
                    <span className="w-1.5 h-1.5 rounded-full bg-white/30" />
                    Private / Internal Project
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}

        {/* Indicators */}
        <div className="absolute bottom-6 flex gap-2 z-30">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={clsx(
                "h-1.5 rounded-full transition-all duration-500 cursor-pointer",
                active === i ? "w-8 bg-amber-400" : "w-2 bg-white/20 hover:bg-white/40"
              )}
            />
          ))}
        </div>
      </div>

      {/* Navigation arrows */}
      <div className="flex justify-center gap-4 mt-2">
        <button
          onClick={() => setActive((p) => (p === 0 ? projects.length - 1 : p - 1))}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/60 hover:bg-white/10 hover:text-white transition-all backdrop-blur-sm"
        >
          ←
        </button>
        <span className="flex items-center text-xs text-white/30 font-mono">
          {active + 1} / {projects.length}
        </span>
        <button
          onClick={() => setActive((p) => (p + 1) % projects.length)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/60 hover:bg-white/10 hover:text-white transition-all backdrop-blur-sm"
        >
          →
        </button>
      </div>
    </div>
  );
}
