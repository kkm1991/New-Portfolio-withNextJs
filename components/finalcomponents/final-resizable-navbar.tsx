"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import Themetoggle from "@/components/finalcomponents/Themetoggle";
import { useLanguage } from "@/context/LanguageContext";

export default function NavbarDemo() {
  const { language, setLanguage, t } = useLanguage();
  
  const navItems = [
    {
      name: t("nav_about"),
      link: "#journey",
    },
    {
      name: t("nav_skills"),
      link: "#skills",
    },
    {
      name: t("nav_experience"),
      link: "#experience",
    },
    {
      name: t("nav_projects"),
      link: "#projects",
    },
    {
      name: t("nav_contact"),
      link: "#contact",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full">
      <Navbar className="fixed top-0 left-0 w-full z-[100] " suppressHydrationWarning>
        {/* Desktop Navigation */}
        <NavBody suppressHydrationWarning>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-2 z-50">
            {/* Language Switcher */}
            <button
              onClick={() => setLanguage(language === "en" ? "mm" : "en")}
              className="group relative flex items-center justify-center p-2 rounded-full border border-white/10 bg-white/5 hover:bg-amber-500 hover:text-white transition-all text-xs font-bold"
              title={language === "en" ? "Switch to Myanmar" : "English သို့ ပြောင်းရန်"}
            >
              {language === "en" ? "MM" : "EN"}
            </button>
            <Themetoggle />
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300 font-bold hover:text-amber-500 transition-colors"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4 pt-4 border-t border-white/10">
              <button
                onClick={() => {
                   setLanguage(language === "en" ? "mm" : "en");
                   setIsMobileMenuOpen(false);
                }}
                className="flex items-center justify-center p-3 rounded-2xl border border-white/10 bg-white/5 hover:bg-amber-500 hover:text-white transition-all text-xs font-bold"
              >
                {language === "en" ? "Switch to Myanmar (MM)" : "English (EN) သို့ ပြောင်းရန်"}
              </button>
              <div className="flex justify-center">
                <Themetoggle />
              </div>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}
