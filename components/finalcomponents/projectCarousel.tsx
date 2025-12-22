"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const projects = [
  {
    id: 1,
    title: "Realtime Voting System",
    desc: "Developed a real-time voting system using Vue.js and Firebase Realtime Database to deliver instant vote updates and live result tracking.",
    tools: "Vue.js • Firebase Realtime Database",
  },
  {
    id: 2,
    title: "Salary Payment System",
    desc: "Built a salary payment system using Laravel MVC, later upgraded to a Vue.js frontend with a Laravel API backend. The system has been successfully used in production for over one year.",
    tools: "Laravel MVC • Vue.js • Laravel API",
  },
  {
    id: 3,
    title: "Attendance & Timesheet System",
    desc: "Developed an attendance and timesheet system for an audit company using Vue.js, Pinia, and PrimeVue with a Laravel API secured by Sanctum. Daily attendance is captured through an Android app built with Ionic Capacitor.",
    tools: "Vue.js • Pinia • PrimeVue • Laravel API • Ionic Capacitor",
  },
  {
    id: 4,
    title: "Sales Management System",
    desc: "Created a sales management system using C# as my first self-learning project, designed to manage sales workflows and improve operational efficiency.",
    tools: "C# • MySQL",
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

  // Auto play
  useEffect(() => {
    if (isPaused || isHolding) return;

    intervalRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % projects.length);
    }, 4200);

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
    <div
      className="relative flex h-[650px] w-full items-center justify-center overflow-hidden"
      style={{ perspective: "1200px" }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {projects.map((project, index) => {
        // Circular offset (KEEP THIS)
        let offset = index - active;
        if (offset > projects.length / 2) offset -= projects.length;
        if (offset < -projects.length / 2) offset += projects.length;

        const isActive = index === active;

        return (
          <motion.div
            key={project.id}
            // layout
            // layoutId={`card-${project.id}`}
            drag={isActive ? "x" : false}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.15}
            style={{
              x: isActive ? smoothDragX : 0,
            }}
            animate={{
              x: offset * 320,
              scale: offset === 0 ? 1 : 0.82,
              rotateY: offset * -40,
              opacity: Math.abs(offset) > 1 ? 0 : 1,
              filter: offset === 0 ? "blur(0px)" : "blur(4px)",
              zIndex: 10 - Math.abs(offset),
            }}
            // transition={{
            //   type: "spring",
            //   stiffness: 70,
            //   damping: 28,
            //   mass: 1.8,
            // }}
            // transition={{
            //   x: { type: "spring", stiffness: 70, damping: 28 },
            //   opacity: { duration: 0.2 },
            // }}
            transition={{
              x: {
                duration: 1.6, // ⬅️ main slow-down
                ease: [0.22, 1, 0.36, 1],
              },
              scale: {
                duration: 1.2,
                ease: "easeOut",
              },
              rotateY: {
                duration: 1.4,
                ease: "easeOut",
              },
              filter: {
                duration: 1.0,
                ease: "easeOut",
              },
              opacity: {
                duration: 0.6,
              },
            }}
            className={`absolute w-[280px] h-[500px] pb-10 select-none backdrop-blur-2xl rounded-3xl bg-gradient-to-br p-5 text-white shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/5 ${
              isActive ? "cursor-grab z-20" : "cursor-default"
            }`}
            onPointerDown={() => {
              setIsHolding(true);
              setIsPaused(true);
            }}
            onPointerUp={() => {
              setIsHolding(false);
              setIsPaused(false);
            }}
            onPointerCancel={() => {
              setIsHolding(false);
              setIsPaused(false);
            }}
            onDragStart={() => {
              setIsHolding(true);
              setIsPaused(true);
            }}
            onDragEnd={handleDragEnd}
          >
            <div className="flex h-full flex-col justify-between">
              <div>
                <motion.h3
                  animate={{ opacity: isActive ? 1 : 0.4 }}
                  className="mb-1.5 text-2xl font-bold tracking-tight"
                >
                  {project.title}
                </motion.h3>

                <motion.h4 className="text-amber-600">
                  {project.tools}
                </motion.h4>

                <p className="mt-3 text-lg font-medium text-gray-300">
                  {project.desc}
                </p>
              </div>

              <div className="h-1 w-12 rounded-full bg-blue-500/50" />
            </div>
          </motion.div>
        );
      })}

      {/* Indicators */}
      <div className="absolute bottom-10 flex gap-2">
        {projects.map((_, i) => (
          <div
            key={i}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              active === i ? "w-8 bg-blue-500" : "w-2 bg-gray-600"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
