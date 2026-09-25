import React from "react";
import Image from "next/image";
import clsx from "clsx";

interface WebsiteCardProps {
  name: string;
  tech: string;
  url: string;
  icon?: string;
  featured?: boolean;
  badge?: string;
  onVisitClick?: (url: string) => void;
}

const WebsiteCard = ({
  name,
  tech,
  url,
  icon,
  featured = false,
  badge = "Featured",
  onVisitClick,
}: WebsiteCardProps) => {
  const handleVisitClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (onVisitClick) {
      onVisitClick(url);
    } else {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div
      className={clsx(
        "relative rounded-3xl p-6 block",
        "shadow-xl transition-all duration-300 overflow-hidden",
        "bg-slate-800/40 dark:bg-slate-800/45",
        "backdrop-blur-xl",
        "border border-white/10 dark:border-white/15",
        featured && "shadow-[0_0_40px_rgba(245,158,11,0.15)]",
        featured && "border-amber-500/20",
      )}
      style={{
        width: "100%",
        height: "100%",
        minHeight: "345px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Soft gradient overlay for featured items */}
      {featured && (
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-orange-500/5 -z-10" />
      )}
      {/* glow layer on hover */}
      <div
        className={clsx(
          "pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br",
          "from-white/10 via-transparent to-transparent",
          "opacity-0 transition duration-300"
        )}
      />

      {/* Badge */}
      {featured ? (
        <span className="relative mb-3 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-3 py-1 text-[10px] font-bold text-white uppercase tracking-wider">
          {badge}
        </span>
      ) : badge !== "Featured" ? (
        <span className="relative mb-3 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 px-3 py-1 text-[10px] font-bold text-yellow-400 uppercase tracking-wider">
          {badge}
        </span>
      ) : null}

      <h3
        className={clsx(
          "relative text-xl font-semibold mb-2",
          featured ? "text-amber-300" : "text-yellow-600"
        )}
      >
        {name}
      </h3>

      <p className="relative text-sm text-neutral-400 mb-6 flex-1">
        Built with{" "}
        <span
          className={clsx(
            "font-medium",
            featured ? "text-amber-400" : "text-blue-700"
          )}
        >
          {tech}
        </span>
      </p>

      <button
        onClick={handleVisitClick}
        className={clsx(
          "relative inline-flex items-center text-sm font-medium gap-3",
          "hover:opacity-80 transition-opacity",
          "focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          featured ? "text-amber-400" : "text-amber-600"
        )}
        style={{ alignSelf: "flex-start" }}
      >
        Visit Website →
        {icon && icon.trim() !== "" && (
          <Image
            src={icon}
            alt="site logo"
            width={80}
            height={80}
            draggable={false}
            className="pointer-events-none rounded-xl object-contain select-none"
          />
        )}
      </button>
    </div>
  );
};

export default WebsiteCard;
