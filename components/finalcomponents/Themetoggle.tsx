"use client";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import { div } from "framer-motion/client";

export default function Themetoggle() {
  const theme = useContext(ThemeContext);

  if (!theme) return null;

  const { mode, toggle } = theme;

  return (
    <button
      onClick={() => {
        console.log("BUTTON CLICKED");
        toggle();
      }}
      className="rounded-full px-4 py-2 border transition"
    >
      {mode === "dark" ? "🌙 Dark" : "🔆 Light"}
    </button>
  );
}
