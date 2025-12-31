import clsx from "clsx";
const ContactCard = ({
  title,
  value,
  href,
}: {
  title: string;
  value: string;
  href: string;
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={clsx(
        "group relative rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl p-6 text-center",
        "shadow-xl transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
      )}
    >
      {/* glow */}
      <div
        className={clsx(
          "pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br",
          "from-white/20 via-transparent to-transparent",
          "opacity-0 transition duration-300 group-hover:opacity-100"
        )}
      />

      <h3 className="relative text-lg font-semibold mb-2">{title}</h3>

      <p className="relative text-sm text-neutral-400 break-all">{value}</p>
    </a>
  );
};

export default ContactCard;
