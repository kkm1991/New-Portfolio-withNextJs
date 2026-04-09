"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="journey" className="py-24 px-6 md:px-20 relative overflow-hidden" suppressHydrationWarning>
      {/* Decorative background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-500/5 rounded-full blur-[120px] -z-10" />
      
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block mb-4 rounded-full border border-amber-500/20 bg-amber-500/5 px-4 py-1 text-xs font-mono text-amber-500 tracking-widest uppercase">
            Story
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6">
            {t("journey_title")}
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-1 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="glass-morphism relative z-10 p-8 md:p-12 rounded-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
              <div className="space-y-6 text-lg leading-relaxed text-neutral-700 dark:text-neutral-300 font-medium">
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {t("journey_p1")}
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  {t("journey_p2")}
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  {t("journey_p3")}
                </motion.p>
                <motion.p
                   initial={{ opacity: 0 }}
                   whileInView={{ opacity: 1 }}
                   transition={{ delay: 0.6 }}
                >
                  {t("journey_p4")}
                </motion.p>
                <motion.p
                   initial={{ opacity: 0 }}
                   whileInView={{ opacity: 1 }}
                   transition={{ delay: 0.7 }}
                   className="text-amber-600 dark:text-amber-400 font-bold"
                >
                  {t("journey_p5")}
                </motion.p>
              </div>
              
              {/* Decorative accent */}
              <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full blur-2xl opacity-20 -z-10" />
              <div className="absolute bottom-0 left-0 -mb-4 -ml-4 w-32 h-32 bg-indigo-500 rounded-full blur-2xl opacity-10 -z-10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
