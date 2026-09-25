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

type LanguageSwitchProps = {
  language: "en" | "mm";
  mobile?: boolean;
  onToggle: () => void;
};

function LanguageSwitch({ language, mobile = false, onToggle }: LanguageSwitchProps) {
  const isMyanmar = language === "mm";

  return (
    <button
      type="button"
      className={`language-switch${mobile ? " language-switch--mobile" : ""}`}
      data-language={language}
      aria-label="Switch language"
      aria-pressed={isMyanmar}
      onClick={onToggle}
    >
      <span className="language-switch__track" aria-hidden="true">
        <span className="language-switch__indicator" />
        <span className="language-switch__content">
          <span className="language-switch__option language-switch__option--en">
            <span className="language-switch__code">EN</span>
          </span>
          <span className="language-switch__option language-switch__option--mm">
            <span className="language-switch__code language-switch__code--mm language-switch__code--mm-full">မြန်မာ</span>
            <span className="language-switch__code language-switch__code--mm language-switch__code--mm-short">MM</span>
          </span>
        </span>
      </span>
      <span className="sr-only">
        {isMyanmar ? "Myanmar selected" : "English selected"}
      </span>
    </button>
  );
}

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
            <LanguageSwitch
              language={language}
              onToggle={() => setLanguage(language === "en" ? "mm" : "en")}
            />
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
              <div className="flex items-center justify-center gap-3">
                <LanguageSwitch
                  language={language}
                  mobile
                  onToggle={() => {
                    setLanguage(language === "en" ? "mm" : "en");
                    setIsMobileMenuOpen(false);
                  }}
                />
                <Themetoggle />
              </div>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}
