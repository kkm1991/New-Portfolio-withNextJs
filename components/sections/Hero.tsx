"use client";

import { motion } from "framer-motion";
import CometCard from "@/components/finalcomponents/final-comet-card";
import dynamic from "next/dynamic";
import { useLanguage } from "@/context/LanguageContext";

const EncryptedText = dynamic(() => import("../ui/encrypted-text"), {
  ssr: false,
});

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-24 pb-12 px-4 overflow-hidden" suppressHydrationWarning>
      {/* Floating background elements for Hero */}
      <motion.div
        className="absolute top-1/4 -left-10 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl -z-10"
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-10 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl -z-10"
        animate={{
          x: [0, -40, 0],
          y: [0, 40, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <div className="container mx-auto flex flex-col items-center gap-12 md:flex-row md:justify-center md:gap-20 max-w-6xl">
        {/* Profile Card with Entry Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          className="flex-shrink-0 relative group"
        >
          <CometCard />
        </motion.div>

        {/* Hero Text Content */}
        <div className="flex flex-col gap-6 max-w-xl text-center md:text-left">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-xs font-semibold text-amber-500 dark:text-amber-400 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
              {t("hero_badge")}
            </span>
          </motion.div>

          <div className="flex flex-col gap-2">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl font-extrabold leading-tight tracking-tight md:text-5xl lg:text-6xl text-foreground"
            >
              <EncryptedText
                text={t("hero_title")}
                encryptedClassName="encrypttextClassname"
                revealedClassName="encrypttext-related"
                revealDelayMs={80}
              />
              <span className="block mt-2 bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
                {t("hero_subtitle")}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-base md:text-lg leading-relaxed text-muted-foreground dark:text-neutral-400 font-medium"
            >
              <EncryptedText
                text={t("hero_desc")}
                encryptedClassName="encrypttextClassname"
                revealedClassName="encrypttext-related"
                revealDelayMs={20}
              />
            </motion.p>
          </div>

          {/* CTA Group */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap justify-center md:justify-start gap-4 mt-4"
          >
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-8 py-3.5 text-sm font-bold text-white shadow-[0_10px_20px_-10px_rgba(245,158,11,0.5)] hover:shadow-[0_15px_25px_-10px_rgba(245,158,11,0.6)] hover:-translate-y-1 transition-all duration-300"
            >
              {t("hero_cta_talk")}
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/5 dark:bg-white/5 px-8 py-3.5 text-sm font-semibold text-amber-600 dark:text-white/70 hover:bg-amber-500/10 dark:hover:bg-white/10 dark:hover:text-white hover:border-amber-500/40 transition-all backdrop-blur-sm"
            >
              {t("hero_cta_work")}
            </a>
          </motion.div>
        </div>
      </div>
      
    </section>
  );
}
