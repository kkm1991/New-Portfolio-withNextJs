"use client";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

export default function Themetoggle() {
  const theme = useContext(ThemeContext);

  if (!theme) return null;

  const { mode, toggle } = theme;

  return (
    <div className="theme-switch-scale">
      <label className="theme-switch" aria-label="Toggle Theme">
        <input
          type="checkbox"
          checked={mode === "dark"}
          onChange={toggle}
        />

        <div className="switch-bg">
          <div className="sky-stars">
            <div className="star star-1" />
            <div className="star star-2" />
            <div className="star star-3" />
            <div className="star star-4" />
          </div>

          <div className="sky-clouds">
            <div className="cloud cloud-1" />
            <div className="cloud cloud-2" />
          </div>

          <div className="sky-vault">
            <div className="sun" />
            <div className="moon">
              <div className="craters">
                <div className="crater crater-1" />
                <div className="crater crater-2" />
                <div className="crater crater-3" />
              </div>
            </div>
          </div>

          <div className="landscape">
            <div className="mountain mountain-1" />
            <div className="mountain mountain-2" />
            <div className="terrain" />
            <div className="tree tree-1" />
            <div className="tree tree-2" />
            <div className="tree tree-3" />
          </div>
        </div>
      </label>
    </div>
  );
}
