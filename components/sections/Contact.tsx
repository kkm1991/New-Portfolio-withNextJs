"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

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
            
            <div className="mt-10 flex flex-col gap-6">
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
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="glass-morphism relative z-10 rounded-[40px] p-10 shadow-2xl flex flex-col items-center">
              <div className="flex flex-col items-center gap-8 w-full">
                <div className="text-center">
                   <h3 className="text-xl font-black text-foreground mb-2">Connect with Me</h3>
                   <p className="text-xs text-muted-foreground">Professional social profiles & Direct contact</p>
                </div>

                <div className="grid grid-cols-3 sm:grid-cols-5 gap-4">
                  {[
                    { src: "/logos/gmail.svg", alt: "Gmail", href: "mailto:contact@khaingkyawmin.com" },
                    { src: "/logos/github.svg", alt: "GitHub", href: "https://github.com/kkm1991" },
                    { src: "/logos/linkedin.svg", alt: "LinkedIn", href: "https://www.linkedin.com/in/khaing-kyaw-min-14259b14a/" },
                    { src: "/logos/phone.png", alt: "Phone", href: "tel:+959795388859" },
                    { src: "/logos/viber.png", alt: "Viber", href: "tel:+959795388859" },
                  ].map((social) => (
                    <motion.a
                      key={social.alt}
                      href={social.href}
                      target={social.href.startsWith('mailto') || social.href.startsWith('tel') ? undefined : "_blank"}
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-14 h-14 rounded-2xl bg-white dark:bg-white/5 p-3.5 shadow-lg flex items-center justify-center border border-neutral-100 dark:border-white/10"
                    >
                      <Image
                        src={social.src}
                        width={28}
                        height={28}
                        alt={social.alt}
                        className="object-contain"
                      />
                    </motion.a>
                  ))}
                </div>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent" />

                <div className="flex flex-col items-center">
                   <a 
                    href="tel:+959795388859" 
                    className="text-lg font-black text-amber-500 hover:scale-105 transition-transform"
                   >
                     +95 979 538 8859
                   </a>
                   <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mt-1">Available on Phone & Viber</p>
                </div>
              </div>
            </div>
            
            {/* Background Glow */}
            <div className="absolute -inset-10 bg-amber-500/20 rounded-full blur-[100px] -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
