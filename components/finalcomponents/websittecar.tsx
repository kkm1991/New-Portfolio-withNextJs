import React from "react";

const WebsiteCard = ({
  name,
  tech,
  url,
}: {
  name: string;
  tech: string;
  url: string;
}) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="
        group
        relative
        rounded-3xl
        border border-white/20
        bg-white/10
        backdrop-blur-xl
        p-6
        shadow-xl
        transition
        duration-300
        hover:-translate-y-2
        hover:shadow-2xl
      "
    >
      {/* glow layer */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          rounded-3xl
          bg-gradient-to-br
          from-white/20
          via-transparent
          to-transparent
          opacity-0
          transition
          duration-300
          group-hover:opacity-100
        "
      />

      <h3 className="relative text-xl font-semibold mb-2 text-amber-50">
        {name}
      </h3>

      <p className="relative text-sm text-neutral-400 mb-6">
        Built with <span className="font-medium">{tech}</span>
      </p>

      <span className="relative inline-flex items-center text-sm font-medium text-amber-600">
        Visit Website →
      </span>
    </a>
  );
};

export default WebsiteCard;
