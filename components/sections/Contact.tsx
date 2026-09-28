"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import SocialLinks from "@/components/ui/social-links";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-24 px-6 md:px-20 relative overflow-hidden" suppressHydrationWarning>
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block mb-4 rounded-full border border-amber-500/20 bg-amber-500/5 px-4 py-1 text-xs font-mono text-amber-500 tracking-widest uppercase">
              Connection
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6 leading-tight">
              {t("contact_title")}
            </h2>
            <p className="text-lg text-muted-foreground font-medium max-w-md">
              {t("contact_desc")}
            </p>
            
            {/* <div className="mt-10 flex flex-col gap-6">
               <motion.a 
                whileHover={{ x: 10 }}
                href="mailto:contact@khaingkyawmin.com" 
                className="flex items-center gap-4 group"
               >
                 <div className="w-12 h-12 rounded-2xl bg-amber-500/10 flex items-center justify-center group-hover:bg-amber-500 transition-colors">
                    <span className="text-xl group-hover:scale-110 transition-transform">✉️</span>
                 </div>
                 <div>
                   <div className="text-[10px] font-black uppercase text-neutral-400 tracking-widest">Email</div>
                   <div className="text-sm font-bold text-foreground">contact@khaingkyawmin.com</div>
                 </div>
               </motion.a>
            </div> */}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 flex flex-col items-center w-full">
              <SocialLinks />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
