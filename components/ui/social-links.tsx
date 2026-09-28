"use client";

const links = [
  {
    id: "phone",
    href: "tel:09795388859",
    label: "09795388859",
    ariaLabel: "Call me on the phone: 09795388859",
    external: false,
    icon: (
      <svg viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
        <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
      </svg>
    ),
  },
  {
    id: "gmail",
    href: "mailto:contact@khaingkyawmin.com",
    label: "contact@khaingkyawmin.com",
    ariaLabel: "Email me at contact@khaingkyawmin.com",
    external: false,
    icon: (
      <svg viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
        <path fill="#4285F4" d="M22.364 3.493L12 11.266 1.636 3.493A1.636 1.636 0 0 0 0 4.823v14.354c0 .904.732 1.636 1.636 1.636h3.819V11.73L12 16.64l6.545-4.91v9.083h3.819c.904 0 1.636-.732 1.636-1.636V4.823a1.636 1.636 0 0 0-1.636-1.33z" />
        <path fill="#34A853" d="M0 4.823v14.354c0 .904.732 1.636 1.636 1.636h3.819V11.73L0 7.364z" />
        <path fill="#EA4335" d="M22.364 3.493c-.618 0-1.201.291-1.57.78L12 10.74 3.206 4.273c-.369-.489-.952-.78-1.57-.78A1.636 1.636 0 0 0 0 4.823l12 9 12-9a1.636 1.636 0 0 0-1.636-1.33z" />
        <path fill="#FBBC04" d="M18.545 11.73v9.083h3.819c.904 0 1.636-.732 1.636-1.636V4.823L18.545 11.73z" />
      </svg>
    ),
  },
  {
    id: "linkedin",
    href: "https://www.linkedin.com/in/khaing-kyaw-min-14259b14a/",
    label: "Khaing Kyaw Min",
    ariaLabel: "LinkedIn profile of Khaing Kyaw Min (opens in a new tab)",
    external: true,
    icon: (
      <svg viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
        <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"></path>
      </svg>
    ),
  },
  {
    id: "github",
    href: "https://github.com/kkm1991",
    label: "https://github.com/kkm1991",
    ariaLabel: "GitHub profile github.com/kkm1991 (opens in a new tab)",
    external: true,
    icon: (
      <svg viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
      </svg>
    ),
  },
];

export default function SocialLinks() {
  return (
    <div className="social-links  ">
      {links.map((link) => (
        <a
          key={link.id}
          id={link.id}
          href={link.href}
          aria-label={link.ariaLabel}
          target={link.external ? "_blank" : undefined}
          rel={link.external ? "noopener noreferrer" : undefined}
          className="social-btn flex-center"
        >
          {link.icon}
          <span>{link.label}</span>
        </a>
      ))}
    </div>
  );
}
