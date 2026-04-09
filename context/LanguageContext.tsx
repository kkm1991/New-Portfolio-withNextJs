"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "en" | "mm";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation values
const translations: Record<Language, Record<string, string>> = {
  en: {
    nav_about: "About",
    nav_skills: "Skills",
    nav_experience: "Experience",
    nav_projects: "Projects",
    nav_contact: "Contact",
    hero_badge: "Available for freelance & projects",
    hero_title: "Hi, I'm Khaing Kyaw Min.",
    hero_subtitle: "Transforming Ideas into High-Performance Reality.",
    hero_desc: "Expert in building scalable Full-Stack applications, modern web systems, and real-time interactive solutions.",
    hero_cta_talk: "Let's Talk →",
    hero_cta_work: "View Projects",
    journey_title: "My Journey as a Developer",
    journey_p1: "I'm a self-taught Full-Stack Developer who thrives on building practical, real-world applications. My journey began in the world of desktop software development with Java, VB.NET, and C#, and has evolved into a strong passion for modern web and mobile development.",
    journey_p2: "My path has been one of continuous learning and adaptation — starting with desktop programming, then moving to master the fundamentals of HTML, CSS, and JavaScript. I now specialize in the powerful combination of PHP, Laravel (MVC & API), and Vue.js to create robust, scalable, and dynamic applications.",
    journey_p3: "I’ve engineered complete full-stack solutions that solve real business challenges, including a Salary Payment System for Mitzutun Myint Company (initially developed with Laravel Blade and later rebuilt with a Vue.js frontend and Laravel backend), and a comprehensive Attendance and Timesheet Management System for Win Thin & Associates Audit Firm, powered by Vue.js, Laravel, MySQL, AWS EC2, and S3 Storage.",
    journey_p4: "Additionally, I developed the Nexus POS Android application using Kotlin and Jetpack Compose for native performance, worked on a cross-platform Android Attendance App using the Ionic Capacitor framework with GPS-based check-in functionality, and created a Real-Time Voting System using Vue.js and Firebase Realtime Database.",
    journey_p5: "I’m passionate about creating meaningful software that enhances workflow and efficiency while continuously expanding my technical expertise across both web and mobile platforms.",
    skills_badge: "Tech Stack",
    skills_title: "Tools & Technologies",
    experience_badge: "Career",
    experience_title: "Experience",
    projects_badge: "Portfolio",
    projects_title: "Projects",
    projects_active: "Under Active Development",
    websites_badge: "Live",
    websites_title: "Websites I've Built",
    contact_title: "Ready to start your next project?",
    contact_desc: "I build scalable web applications and clean websites. Let’s talk about how I can help you.",
  },
  mm: {
    nav_about: "အကြောင်းအရာ",
    nav_skills: "ကျွမ်းကျင်မှု",
    nav_experience: "လုပ်ငန်းအတွေ့အကြုံ",
    nav_projects: "ပရောဂျက်များ",
    nav_contact: "ဆက်သွယ်ရန်",
    hero_badge: "Freelance နှင့် ပရောဂျက်များ လက်ခံနေပါသည်",
    hero_title: "မင်္ဂလာပါ၊ ကျွန်တော် ခိုင်ကျော်မင်း ပါ။",
    hero_subtitle: "ခေတ်မီပြီး ထိရောက်တဲ့ Digital နည်းပညာများဖြင့် သင့်လုပ်ငန်းကို အဆင့်မြှင့်တင်ပေးပါသည်။",
    hero_desc: "ခိုင်မာတဲ့ Full-Stack ဝဘ်နည်းပညာများ၊ ခေတ်မီ web apps နဲ့ real-time system တွေကို အထူးပြုတည်ဆောက်ပေးနေသူ ဖြစ်ပါတယ်။",
    hero_cta_talk: "စကားပြောကြည့်ရအောင် →",
    hero_cta_work: "ပရောဂျက်များကြည့်ရန်",
    journey_title: "ကျွန်တော့်ရဲ့ Developer ဘဝ ခရီးလမ်း",
    journey_p1: "ကျွန်တော်ဟာ လက်တွေ့ကျတဲ့ application တွေကို ဖန်တီးရတာ ဝါသနာပါတဲ့ ကိုယ်တိုင်သင်ယူထားသူ (Self-taught) Full-Stack Developer တစ်ဦးပါ။ ကျွန်တော့်ရဲ့ ခရီးလမ်းက Java, VB.NET နဲ့ C# တို့လို desktop software တွေကနေ စတင်ခဲ့ပြီး အခုအခါမှာတော့ ခေတ်မီဝဘ်နဲ့ mobile နည်းပညာတွေအပေါ် စိတ်အားထက်သန်မှု ကြီးထွားလာခဲ့ပါတယ်။",
    journey_p2: "ကျွန်တော့်လမ်းစဉ်က အမြဲတစေ သင်ယူနေမှုနဲ့ အလိုက်သင့် ပြောင်းလဲခြင်းပါပဲ — desktop programming ကနေ စတင်ခဲ့ပြီး HTML, CSS နဲ့ JavaScript အခြေခံတွေကို ကျွမ်းကျင်အောင် ကြိုးစားခဲ့ပါတယ်။ အခုအခါမှာတော့ PHP, Laravel (MVC & API) နဲ့ Vue.js တို့ကို ပေါင်းစပ်ပြီး ပိုမိုခိုင်မာတဲ့ web applications တွေကို ဖန်တီးပေးနေပါတယ်။",
    journey_p3: "ကျွန်တော်ဟာ စီးပွားရေးဆိုင်ရာ စိန်ခေါ်မှုတွေကို ဖြေရှင်းပေးနိုင်တဲ့ full-stack solutions တွေကို အောင်မြင်စွာ တည်ဆောက်ခဲ့ပါတယ်။ အဲ့ဒီထဲမှာ Mitzutun Myint ကုမ္ပဏီအတွက် Salary Payment System နဲ့ Win Thin & Associates Audit Firm အတွက် Attendance and Timesheet Management System တို့ ပါဝင်ပါတယ်။ ဒါတွေကို Vue.js, Laravel, MySQL နဲ့ AWS EC2 တို့လို ခေတ်မီနည်းပညာတွေ သုံးပြီး တည်ဆောက်ခဲ့တာပါ။",
    journey_p4: "ဒါ့အပြင် Kotlin နှင့် Jetpack Compose ကို အသုံးပြု၍ Nexus POS Android application ကို တည်ဆောက်ခဲ့ပြီး Ionic Capacitor framework ကို သုံး၍ GPS-based check-in ပါဝင်သော Android Attendance App နှင့် Vue.js ၊ Firebase တို့ကို သုံး၍ Real-Time Voting System တို့ကိုလည်း ဖန်တီးခဲ့ပါတယ်။",
    journey_p5: "ကျွန်တော်ဟာ အလုပ်တွေ ပိုမိုမြန်ဆန်ပြီး ထိရောက်စေမယ့် software တွေကို ဖန်တီးရတာကို ဝါသနာပါပြီး web နဲ့ mobile နည်းပညာနယ်ပယ်မှာ နှစ်စဉ် တိုးတက်အောင် ကြိုးစားနေသူ တစ်ဦးဖြစ်ပါတယ်။",
    skills_badge: "နည်းပညာပိုင်း",
    skills_title: "တူးလ်များနှင့် နည်းပညာများ",
    experience_badge: "အသက်မွေးဝမ်းကြောင်း",
    experience_title: "လုပ်ငန်းအတွေ့အကြုံ",
    projects_badge: "ပရောဂျက်များ",
    projects_title: "နောက်ဆုံးလက်ရာများ",
    projects_active: "လက်ရှိ လုပ်ဆောင်နေဆဲ ပရောဂျက်များ",
    websites_badge: "ဝဘ်ဆိုဒ်များ",
    websites_title: "ကျွန်တော် ဖန်တီးခဲ့သော ဝဘ်ဆိုဒ်များ",
    contact_title: "သင့်ရဲ့ နောက်ထပ် ပရောဂျက်တစ်ခုကို စတင်ဖို့ အဆင်သင့်ဖြစ်ပြီလား?",
    contact_desc: "ကျွန်တော်ဟာ ခေတ်မှီပြီး စည်းစနစ်ကျတဲ့ ဝဘ်ဆိုဒ်တွေကို ဖန်တီးပေးနေပါတယ်။ သင့်ကို ဘယ်လို ကူညီပေးနိုင်မလဲ ဆိုတာကို ဆွေးနွေးကြည့်ရအောင်ပါ။",
  },
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("portfolio_lang") as Language;
    if (saved && (saved === "en" || saved === "mm")) {
      setLanguage(saved);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("portfolio_lang", lang);
  };

  const t = (key: string) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
