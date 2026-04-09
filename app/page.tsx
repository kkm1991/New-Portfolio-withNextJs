"use client";

import { motion, AnimatePresence } from "framer-motion";
import NavBar from "@/components/finalcomponents/final-resizable-navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Websites from "@/components/sections/Websites";
import Contact from "@/components/sections/Contact";
import { useTheme } from "@/context/ThemeContext";

export default function Home() {
  const theme = useTheme();
  const mode = theme?.mode || "light";

  return (
    <main className="relative min-h-screen font-sans selection:bg-amber-500/30 selection:text-amber-900 dark:selection:text-amber-200">
      {/* GLOBAL BACKGROUND SYSTEM */}
      <div className={`bg-container ${mode === "light" ? "light" : ""}`} aria-hidden="true">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
      </div>

      <NavBar />

      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative z-10"
        >
          <Hero />
          <div className="space-y-0 md:space-y-12">
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Websites />
            <Contact />
          </div>
          
          {/* Simple Footer */}
          <footer className="py-12 text-center text-xs font-mono text-neutral-500 border-t border-neutral-200 dark:border-white/5 backdrop-blur-md">
            <p>© {new Date().getFullYear()} Khaing Kyaw Min. All rights reserved.</p>
            <p className="mt-2 opacity-50 italic">Built with Next.js 16, React 19 & Framer Motion</p>
          </footer>
        </motion.div>
      </AnimatePresence>
    </main>
  );
}
