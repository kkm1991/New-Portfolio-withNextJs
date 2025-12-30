"use client";
import { createContext, useEffect, useState, ReactNode } from "react";

type ThemeContextType = {
  mode: "light" | "dark";
  toggle: () => void;
};

export const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useState<"light" | "dark">("dark");

  // 🔑 THIS CONNECTS CSS TO REACT
  useEffect(() => {
    const html = document.documentElement;
    console.log("Theme mode changed to:", mode);
    html.classList.remove("light", "dark");
    html.classList.add(mode);
  }, [mode]);

  const toggle = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ mode, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};
