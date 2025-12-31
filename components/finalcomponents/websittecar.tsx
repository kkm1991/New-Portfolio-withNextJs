import React from "react";
import Image from "next/image";
import clsx from "clsx";
const WebsiteCard = ({
  name,
  tech,
  url,
  icon,
}: {
  name: string;
  tech: string;
  url: string;
  icon: string;
}) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={clsx(
        "group relative rounded-3xl backdrop-blur-xl p-6",
        "shadow-xl transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
      )}
    >
      {/* glow layer */}
      <div
        className={clsx(
          "pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br",
          "from-white/20 via-transparent to-transparent",
          "opacity-0 transition duration-300 group-hover:opacity-100"
        )}
      />

      <h3 className="relative text-xl font-semibold mb-2 text-yellow-600">
        {name}
      </h3>

      <p className="relative text-sm text-neutral-400 mb-6">
        Built with <span className="font-medium text-blue-700">{tech}</span>
      </p>

      <span className="relative inline-flex items-center text-sm font-medium text-amber-600">
        Visit Website →{" "}
        {icon?.trim() !== "" && (
          <Image
            className="ms-10"
            src={icon}
            alt="no image"
            width={100}
            height={100}
          ></Image>
        )}
      </span>
    </a>
  );
};

export default WebsiteCard;
