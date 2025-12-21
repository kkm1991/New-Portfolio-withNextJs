"use client";

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
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
    tools: "C# • MySQL ",
  },
];

export default function ProjectCarousel() {
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // useSpring makes the drag movement itself feel smoother
  const dragX = useMotionValue(0);
  const smoothDragX = useSpring(dragX, { damping: 20, stiffness: 300 });

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Auto play logic
  useEffect(() => {
    if (isPaused) return;
    intervalRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % projects.length);
    }, 4000); // Increased time slightly for better UX

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleDragEnd = (event: any, info: any) => {
    const distance = info.offset.x;
    const threshold = 70;

    if (distance < -threshold) {
      setActive((prev) => (prev + 1) % projects.length);
    } else if (distance > threshold) {
      setActive((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
    }

    dragX.set(0);
    // Delay resuming to let the animation finish
    setTimeout(() => setIsPaused(false), 600);
  };

  return (
    <div
      className="relative flex h-[600px] w-full items-center justify-center overflow-hidden "
      style={{ perspective: "1200px" }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {projects.map((project, index) => {
        // Precise circular math
        let offset = index - active;
        if (offset > projects.length / 2) offset -= projects.length;
        if (offset < -projects.length / 2) offset += projects.length;

        const isActive = index === active;

        return (
          <motion.div
            key={project.id}
            drag={isActive ? "x" : false}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragStart={() => setIsPaused(true)}
            onDragEnd={handleDragEnd}
            // Combining the drag distance with the calculated offset for fluid movement
            style={{
              x: isActive ? dragX : 0,
            }}
            animate={{
              // This is where the magic happens: smooth positioning
              x: offset * 320 + (isActive ? 0 : 0),
              scale: isActive ? 1 : 0.8,
              rotateY: offset * -45, // Changed direction for natural feel
              opacity: Math.abs(offset) > 2 ? 0.15 : 1,
              filter: isActive ? "blur(0px)" : "blur(4px)",
              zIndex: 10 - Math.abs(offset),
            }}
            // transition={{
            //   type: "spring",
            //   stiffness: 150,
            //   damping: 20,
            //   mass: 1,
            // }}
            // transition={{
            //   type: "spring",
            //   stiffness: 60,
            //   damping: 30,
            //   mass: 2,
            // }}
            transition={{
              type: "spring",
              stiffness: 70,
              damping: 28,
              mass: 1.8,
              delay: Math.abs(offset) * 0.05,
            }}
            className={`absolute w-[350px] h-[auto] pb-20 cursor-grab rounded-3xl bg-gradient-to-br select-none p-8 text-white shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/5 active:cursor-grabbing ${
              !isActive ? "pointer-events-none" : "z-20"
            }`}
          >
            <div className="flex flex-col h-full justify-between">
              <div>
                <motion.h3
                  animate={{ opacity: isActive ? 1 : 0.3 }}
                  className="text-2xl font-bold  tracking-tight mb-1.5"
                >
                  {project.title}
                </motion.h3>
                <motion.h4 className="text-amber-600">
                  {project.tools}
                </motion.h4>
                <p className="mt-2  text-gray-300 font-medium text-lg">
                  {project.desc}
                </p>
              </div>

              <div className="h-1 w-12 bg-blue-500/50 rounded-full" />
            </div>
          </motion.div>
        );
      })}

      {/* Navigation Indicators */}
      <div className="absolute bottom-10 flex gap-2">
        {projects.map((_, i) => (
          <div
            key={i}
            className={`h-1.5 transition-all duration-500 rounded-full ${
              active === i ? "w-8 bg-blue-500" : "w-2 bg-gray-600"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
