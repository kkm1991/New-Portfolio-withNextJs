"use client";

import { useEffect, useRef, useCallback } from "react";
import { useTheme } from "@/context/ThemeContext";

/**
 * DarkBackgroundEffects
 * 
 * Renders ambient glow orbs with mouse-following parallax in dark mode only.
 * - Gold orb: subtle warm accent glow
 * - Steel orb: cool dark secondary glow
 * - Neutral orb: extremely subtle white/gray glow
 * 
 * On mobile: parallax disabled (no mouse), orbs still render with CSS animations.
 * Respects prefers-reduced-motion.
 */
export default function DarkBackgroundEffects() {
  const theme = useTheme();
  const mode = theme?.mode || "light";

  const goldRef = useRef<HTMLDivElement>(null);
  const steelRef = useRef<HTMLDivElement>(null);
  const neutralRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const mouseRef = useRef({ x: 0.5, y: 0.5 }); // normalized 0–1

  const handleMouseMove = useCallback((e: MouseEvent) => {
    // Normalize mouse position to -0.5 to 0.5 range (centered)
    mouseRef.current = {
      x: (e.clientX / window.innerWidth) - 0.5,
      y: (e.clientY / window.innerHeight) - 0.5,
    };
  }, []);

  useEffect(() => {
    if (mode !== "dark") return;

    // Check for reduced motion preference
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    // Check for touch-only devices (no mouse)
    const isTouchOnly = window.matchMedia("(hover: none) and (pointer: coarse)").matches;
    if (isTouchOnly) return;

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    let lastX = 0;
    let lastY = 0;

    const animate = () => {
      const { x, y } = mouseRef.current;
      
      // Lerp for smoothness (ease toward target)
      lastX += (x - lastX) * 0.04;
      lastY += (y - lastY) * 0.04;

      const goldX = lastX * 20;
      const goldY = lastY * 20;
      const steelX = lastX * -15;
      const steelY = lastY * -15;
      const neutralX = lastX * 8;
      const neutralY = lastY * -8;

      if (goldRef.current) {
        goldRef.current.style.transform = `translate3d(${goldX}px, ${goldY}px, 0)`;
      }
      if (steelRef.current) {
        steelRef.current.style.transform = `translate3d(${steelX}px, ${steelY}px, 0)`;
      }
      if (neutralRef.current) {
        neutralRef.current.style.transform = `translate3d(${neutralX}px, ${neutralY}px, 0)`;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [mode, handleMouseMove]);

  // --- Card gold glow: track mouse position inside .dark-gold-glow-card ---
  useEffect(() => {
    if (mode !== "dark") return;

    const handleCardMouseMove = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest(".dark-gold-glow-card") as HTMLElement | null;
      if (!target) return;
      const rect = target.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      target.style.setProperty("--glow-x", `${x}%`);
      target.style.setProperty("--glow-y", `${y}%`);
    };

    document.addEventListener("mousemove", handleCardMouseMove, { passive: true });
    return () => document.removeEventListener("mousemove", handleCardMouseMove);
  }, [mode]);

  // Only render in dark mode
  if (mode !== "dark") return null;

  return (
    <div className="dark-background-effects" aria-hidden="true">
      <div ref={goldRef}>
        <div className="dark-orb dark-orb-gold" />
      </div>
      <div ref={steelRef}>
        <div className="dark-orb dark-orb-steel" />
      </div>
      <div ref={neutralRef}>
        <div className="dark-orb dark-orb-neutral" />
      </div>
    </div>
  );
}
