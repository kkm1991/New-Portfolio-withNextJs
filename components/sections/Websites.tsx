"use client";

import { motion } from "framer-motion";
import WebsiteCard from "@/components/finalcomponents/websittecar";
import { useLanguage } from "@/context/LanguageContext";

export default function Websites() {
  const { t } = useLanguage();

  return (
    <section id="websites" className="py-24 px-6 md:px-20 relative overflow-hidden" suppressHydrationWarning>
      <div className="container mx-auto max-w-6xl">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-16"
        >
          <span className="inline-block mb-3 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-mono text-neutral-500 dark:text-white/40 tracking-widest uppercase">
            {t("websites_badge")}
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-neutral-800 via-neutral-600 to-neutral-800 dark:from-white dark:via-amber-200 dark:to-amber-400 bg-clip-text text-transparent">
            {t("websites_title")}
          </h2>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-6xl grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          <WebsiteCard
            name="nexuspos.online & Android App"
            tech="Next.js • Kotlin • Prisma • Tailwind"
            url="https://www.nexuspos.online"
            icon="/logos/nexus.png"
            featured={true}
            badge="🚀 Business SaaS"
          />

          <WebsiteCard
            name="myanmarpoly.online"
            tech="Next.js • Socket.io • Node.js"
            url="https://myanmarpoly.online"
            icon="/images/myanmarpoly.png"
            featured={true}
            badge="🎮 Real-Time Game"
          />

          <WebsiteCard
            name="vue.khaingkyawmin.com"
            tech="Vue.js"
            url="https://vue.khaingkyawmin.com"
            icon="/images/kkmlogo.png"
          />

          <WebsiteCard
            name="kokomyint.com"
            tech="WordPress"
            url="https://kokomyint.com"
            icon="/images/kokomyint.png"
          />

          <WebsiteCard
            name="ngwehninyee.com"
            tech="WordPress • E-Commerce"
            url="https://ngwehninyee.com/"
            icon="/images/nhy.png"
          />

          <WebsiteCard
            name="arrmanshin.com"
            tech="WordPress"
            url="https://arrmanshin.com"
            icon="/images/arrmanshin.png"
          />
        </motion.div>
      </div>
    </section>
  );
}
