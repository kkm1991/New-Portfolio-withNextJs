import React from "react";
import Image from "next/image";
import clsx from "clsx";

const WebsiteCard = ({
  name,
  tech,
  url,
  icon,
  featured = false,
  badge = "Featured",
}: {
  name: string;
  tech: string;
  url: string;
  icon: string;
  featured?: boolean;
  badge?: string;
}) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={clsx(
        "group relative rounded-3xl glass-morphism p-6 block",
        "shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl overflow-hidden",
        featured && "shadow-[0_0_40px_rgba(245,158,11,0.08)]"
      )}
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
          "opacity-0 transition duration-300 group-hover:opacity-100"
        )}
      />

      {/* Featured badge */}
      {featured && (
        <span className="relative mb-3 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-3 py-1 text-[10px] font-bold text-white uppercase tracking-wider">
          {badge}
        </span>
      )}

      <h3
        className={clsx(
          "relative text-xl font-semibold mb-2",
          featured ? "text-amber-300" : "text-yellow-600"
        )}
      >
        {name}
      </h3>

      <p className="relative text-sm text-neutral-400 mb-6">
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

      <span
        className={clsx(
          "relative inline-flex items-center text-sm font-medium gap-3",
          featured ? "text-amber-400" : "text-amber-600"
        )}
      >
        Visit Website →
        {icon?.trim() !== "" && (
          <Image
            src={icon}
            alt="site logo"
            width={80}
            height={80}
            className="rounded-xl object-contain"
          />
        )}
      </span>
    </a>
  );
};

export default WebsiteCard;
