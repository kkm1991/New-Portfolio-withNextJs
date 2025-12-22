"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import CometCard from "@/components/finalcomponents/final-comet-card";
import dynamic from "next/dynamic";
import Image from "next/image";
import WebsiteCard from "./websittecar";
import { Tooltip } from "./tooltip";
import ProjectCarousel from "./projectCarousel";

const EncryptedText = dynamic(() => import("../ui/encrypted-text"), {
  ssr: false,
});
export default function NavbarDemo() {
  const navItems = [
    {
      name: "About",
      link: "#journey",
    },
    {
      name: "Skills",
      link: "#skills",
    },
    {
      name: "Experience",
      link: "#experience",
    },
    {
      name: "Projects",
      link: "#projects",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full">
      <Navbar className="fixed top-0 left-0 w-full z-50 ">
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          {/* <div className="flex items-center gap-4">
            <NavbarButton variant="secondary">Login</NavbarButton>
            <NavbarButton variant="primary">Book a call</NavbarButton>
          </div> */}
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            {/* <div className="flex w-full flex-col gap-4">
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Login
              </NavbarButton>
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Book a call
              </NavbarButton>
            </div> */}
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
      <div className="pt-20">
        <DummyContent />
      </div>
    </div>
  );
}

const DummyContent = () => {
  return (
    <div className="container mx-auto p-8 pt-24">
      <div className="flex justify-center mb-8 px-4">
        <div>
          <CometCard />
        </div>
      </div>

      <h1 className="mb-4 text-center text-3xl font-bold">
        <p
          className="mx-auto max-w-lg py-10 text-left 
        "
        >
          <EncryptedText
            text="Hi, I'm Khaing Kyaw Min. I build the bridge between design and data."
            encryptedClassName="dark:text-white text-black"
            revealedClassName="text-amber-100 "
            revealDelayMs={100}
          />
        </p>
      </h1>
      <p className="mb-10 text-center text-sm text-zinc-500">
        <EncryptedText
          text='"Full-Stack Developer & Modern Web Specialist" I build everything from complex Laravel applications to high-converting WordPress websites.'
          encryptedClassName="dark:text-white text-black"
          revealedClassName="text-amber-100 "
          revealDelayMs={30}
        />
      </p>

      <section id="journey" className="py-16 px-6 md:px-20 text-white    ">
        <h2 className="text-3xl font-bold mb-6 text-center">
          My Journey as a Developer
        </h2>
        <p className="max-w-3xl mx-auto text-lg leading-relaxed  shadow-2xl  rounded-3xl p-10  backdrop-blur-xl ">
          I&apos;m a self-taught <strong>Full-Stack Developer</strong> who
          thrives on building practical, real-world applications. My journey
          began in the world of <strong>desktop software development</strong>{" "}
          with
          <strong>Java, VB.NET, and C#</strong>, and has evolved into a strong
          passion for <strong>modern web and mobile development</strong>.
          <br />
          <br />
          My path has been one of continuous learning and adaptation — starting
          with desktop programming, then moving to master the fundamentals of
          <strong>HTML, CSS, and JavaScript</strong>. I now specialize in the
          powerful combination of <strong>PHP, Laravel (MVC & API)</strong>, and
          <strong>Vue.js</strong> to create robust, scalable, and dynamic
          applications. <br />
          <br />
          I’ve engineered complete full-stack solutions that solve real business
          challenges, including a <strong>Salary Payment System</strong> for
          <em>Mitzutun Myint Company</em> (initially developed with Laravel
          Blade and later rebuilt with a Vue.js frontend and Laravel backend),
          and a
          <strong>
            comprehensive Attendance and Timesheet Management System
          </strong>
          for <em>Win Thin & Associates Audit Firm</em>, powered by
          <strong>Vue.js, Laravel, MySQL, AWS EC2</strong>, and
          <strong>S3 Storage</strong>. <br />
          <br />
          Additionally, I developed a
          <strong>cross-platform Android Attendance App</strong> using the
          <strong>Ionic Capacitor framework</strong> with
          <strong>GPS-based check-in</strong> functionality, and created a
          <strong>Real-Time Voting System</strong> using
          <strong>Vue.js</strong> and
          <strong>Firebase Realtime Database</strong> for instant updates and
          live results. <br />
          <br />
          I’m passionate about creating meaningful software that enhances
          workflow and efficiency while continuously expanding my technical
          expertise across both web and mobile platforms.
        </p>
      </section>

      {/* skill section start */}
      <section id="skills" className="py-16 px-6 md:px-20 text-amber-50">
        <h2 className="mb-10 text-center text-3xl font-bold">
          Skills & Technologies
        </h2>

        <div
          className="
      grid
      grid-cols-3
      sm:grid-cols-4
      md:grid-cols-5
      lg:grid-cols-6
      xl:grid-cols-8
      gap-6
      place-items-center
    "
        >
          {[
            {
              src: "/logos/Laravel.svg",
              bg: "",
              tooltip:
                'Laravel is a free, open-source PHP web framework designed to make web development faster and easier by providing a structured, "expressive" syntax.',
            },
            {
              src: "/logos/vue.svg",
              bg: "",
              tooltip:
                "Vue.js (or simply Vue) is a popular, open-source JavaScript framework used to build user interfaces and single-page applications (SPAs).",
            },
            {
              src: "/logos/nuxt.svg",
              bg: "",
              tooltip:
                'Nuxt.js is a powerful, open-source framework built on top of Vue.js that makes web development faster and more organized.If Vue is the "engine," Nuxt is the "luxury car" built around it—it comes pre-configured with everything you need to build production-ready applications, especially those that need to be fast and SEO-friendly.',
            },
            {
              src: "/logos/react.svg",
              bg: "",
              tooltip:
                "React.js (or simply React) is a popular, open-source JavaScript library developed by Meta (Facebook) for building user interfaces, specifically for single-page applications.",
            },
            {
              src: "/logos/next.svg",
              bg: "bg-amber-50",
              tooltip:
                'Next.js is a powerful framework built on top of React that gives you all the tools needed to build production-ready, high-performance websites.If React is the "engine," Next.js is the entire "car." It solves the biggest limitation of standard React: the fact that React usually renders everything in the browser (Client-Side Rendering), which can be bad for SEO and slow on older devices.',
            },
            {
              src: "/logos/Bootstrap.png",
              bg: "",
              tooltip:
                'Bootstrap is the world’s most popular free frontend toolkit. It is a collection of pre-written CSS and JavaScript code that helps developers build responsive, mobile-first websites incredibly fast.Instead of writing hundreds of lines of CSS to style a button or a navigation bar, you simply apply a "class" name (like btn-primary) to your HTML tags.',
            },
            {
              src: "/logos/tailwindcss.svg",
              bg: "",
              tooltip:
                'Tailwind CSS is a "utility-first" CSS framework. Unlike Bootstrap, which gives you pre-designed components (like a .btn class), Tailwind gives you low-level utility classes that let you build completely custom designs directly in your HTML.Instead of writing CSS in a separate file, you style elements by stringing together simple classes like bg-blue-500 (background color), p-4 (padding), and flex (layout).',
            },
            {
              src: "/logos/wordpress.svg",
              bg: "bg-amber-50",
              tooltip:
                "WordPress is the world’s most popular Content Management System (CMS). It is a piece of software that allows you to create, manage, and publish content on the web without needing to write code.",
            },
            {
              src: "/logos/ionic.svg",
              bg: "",
              tooltip:
                'Ionic is an open-source framework used to build high-quality mobile and desktop apps using web technologies you already know: HTML, CSS, and JavaScript.Essentially, it allows you to "write once, run anywhere." You build your app like a website, and Ionic packages it so it looks and feels like a native app on iOS, Android, and the Web.',
            },
            {
              src: "/logos/mysql.svg",
              bg: "",
              tooltip:
                "MySQL is the world’s most popular open-source Relational Database Management System (RDBMS).",
            },
            {
              src: "/logos/github.svg",
              bg: "",
              tooltip:
                "GitHub is a cloud-based platform that helps developers store, manage, and share their code. It is built on top of a tool called Git.",
            },
            {
              src: "/logos/aws.svg",
              bg: "bg-gray-200",
              tooltip:
                'AWS (Amazon Web Services) is the world’s most comprehensive and widely used cloud computing platform.Instead of a company buying and maintaining their own physical servers and data centers in a building, they "rent" those resources from Amazon over the internet. You only pay for what you actually use—much like paying for electricity or water.',
            },
          ].map((logo, index) => (
            <div
              key={index}
              className={`
          ${logo.bg}
          flex
          items-center
          justify-center
          rounded-2xl
          p-4
          transition
          duration-300
          hover:scale-110
          hover:shadow-xl
        `}
            >
              <Tooltip
                containerClassName="text-neutral-600 dark:text-neutral-400"
                content={logo.tooltip}
              >
                <Image
                  src={logo.src}
                  width={56}
                  height={56}
                  alt="tech logo"
                  className="object-contain"
                />
              </Tooltip>
            </div>
          ))}
        </div>
      </section>
      {/* skill section end */}

      {/* experienc section start */}
      <section id="experience" className="py-20 px-6 md:px-20 text">
        <h2 className="mb-14 text-center text-3xl font-bold text-amber-50">
          Experience
        </h2>

        <div className="relative mx-auto max-w-4xl">
          {/* vertical line */}
          <div className="absolute left-4 top-0 h-full w-[2px] bg-neutral-300 dark:bg-neutral-700 md:left-1/2 md:-translate-x-1/2" />

          {/* Experience Item 1 */}
          <div className="relative mb-16 md:flex md:justify-start">
            <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black text-white dark:bg-white dark:text-black md:absolute md:left-1/2 md:-translate-x-1/2">
              1
            </div>

            <div className="ml-16 md:ml-0 md:w-1/2 md:pr-12">
              <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 shadow-lg">
                <h3 className="text-xl font-semibold">Full-Stack Developer</h3>
                <p className="mt-1 text-sm text-neutral-500">Audit Company</p>
                <p className="mt-4 text-neutral-700 dark:text-neutral-300">
                  Developed attendance and timesheet management systems using
                  <strong> Vue.js</strong>, <strong>Pinia</strong>,
                  <strong> PrimeVue</strong>, and
                  <strong> Laravel REST API</strong>.
                </p>
              </div>
            </div>
          </div>

          {/* Experience Item 2 */}
          <div className="relative md:flex md:justify-end">
            <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black text-white dark:bg-white dark:text-black md:absolute md:left-1/2 md:-translate-x-1/2">
              2
            </div>

            <div className="ml-16 md:ml-0 md:w-1/2 md:pl-12">
              <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 shadow-lg">
                <h3 className="text-xl font-semibold">Full-Stack Developer</h3>
                <p className="mt-1 text-sm text-neutral-500">
                  Previous Company
                </p>
                <p className="mt-4 text-neutral-700 dark:text-neutral-300">
                  Built a salary payment system using
                  <strong> Laravel MVC</strong>, later upgraded to a
                  <strong> Vue.js frontend</strong> with a
                  <strong> Laravel backend</strong> for better scalability.
                </p>
              </div>
            </div>
          </div>
          {/* Experience Item 3 */}
          <div className="relative mt-16 md:flex md:justify-start">
            <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black text-white dark:bg-white dark:text-black md:absolute md:left-1/2 md:-translate-x-1/2">
              3
            </div>

            <div className="ml-16 md:ml-0 md:w-1/2 md:pr-12">
              <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 shadow-lg">
                <h3 className="text-xl font-semibold">Web Developer</h3>
                <p className="mt-1 text-sm text-neutral-500">
                  Freelance & Project-Based
                </p>
                <p className="mt-4 text-neutral-700 dark:text-neutral-300">
                  Built multiple websites using
                  <strong> Vue.js</strong>,<strong> Next.js</strong>, and
                  <strong> WordPress</strong>.
                  <br />
                  <br />
                  WordPress is primarily used for
                  <strong> static and content-focused websites</strong>,
                  ensuring fast delivery, easy content management, and
                  client-friendly maintenance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* experienc section end */}

      {/* projects section start */}
      <section id="projects" className="py-20 px-6 md:px-20">
        {/* <h2 className="mb-14 text-center text-3xl font-bold text-amber-50">
          Projects
        </h2> */}
        {/* 
        <div
          className="
      grid
      gap-8
      sm:grid-cols-2
      lg:grid-cols-3
      max-w-7xl
      mx-auto
    "
        >
          
          <div
            className="rounded-3xl
   
  bg-white/5
  backdrop-blur-md
  p-6
  shadow-lg
  transition
  hover:-translate-y-2
  hover:shadow-2xl"
          >
            <h3 className="text-xl font-semibold mb-2  text-amber-50">
              Realtime Voting System
            </h3>
            <p className="text-sm text-amber-600 mb-4">
              Vue.js • Firebase Realtime Database
            </p>
            <p className="  text-amber-100">
              Developed a real-time voting system using Vue.js and Firebase
              Realtime Database to deliver instant vote updates and live result
              tracking.
            </p>
          </div>

         
          <div
            className="rounded-3xl
   
  bg-white/5
  backdrop-blur-md
  p-6
  shadow-lg
  transition
  hover:-translate-y-2
  hover:shadow-2xl"
          >
            <h3 className="text-xl font-semibold mb-2 text-amber-50">
              Salary Payment System
            </h3>
            <p className="text-sm text-amber-600 mb-4">
              Laravel MVC • Vue.js • Laravel API
            </p>
            <p className="text-amber-100">
              Built a salary payment system using Laravel MVC, later upgraded to
              a Vue.js frontend with a Laravel API backend. The system has been
              successfully used in production for over one year.
            </p>
          </div>

        
          <div
            className=" rounded-3xl
   
  bg-white/5
  backdrop-blur-md
  p-6
  shadow-lg
  transition
  hover:-translate-y-2
  hover:shadow-2xl"
          >
            <h3 className="text-xl font-semibold mb-2 text-amber-50">
              Attendance & Timesheet System
            </h3>
            <p className="text-sm  text-amber-600 mb-4">
              Vue.js • Pinia • PrimeVue • Laravel API • Ionic Capacitor
            </p>
            <p className="text-amber-100">
              Developed an attendance and timesheet system for an audit company
              using Vue.js, Pinia, and PrimeVue with a Laravel API secured by
              Sanctum. Daily attendance is captured through an Android app built
              with Ionic Capacitor.
            </p>
          </div>

         
          <div
            className="rounded-3xl
   
  bg-white/5
  backdrop-blur-md
  p-6
  shadow-lg
  transition
  hover:-translate-y-2
  hover:shadow-2xl"
          >
            <h3 className="text-xl font-semibold text-amber-50 mb-2">
              Sales Management System
            </h3>
            <p className="text-sm  text-amber-600 mb-4">C#</p>
            <p className="text-amber-100">
              Created a sales management system using C# as my first
              self-learning project, designed to manage sales workflows and
              improve operational efficiency.
            </p>
          </div>
        </div> */}
      </section>
      {/* projects section end */}

      {/* projects carousel start */}
      <section>
        <h2 className="mb-0 text-center text-3xl font-bold text-amber-50">
          Projects
        </h2>
        <ProjectCarousel />
      </section>
      {/* project carousel end */}

      <section id="websites" className="py-20 px-6 md:px-20">
        <h2 className="mb-14 text-center text-3xl font-bold text-amber-50">
          Websites I’ve Built
        </h2>

        <div
          className="
      mx-auto
      max-w-6xl
      grid
      gap-8
      sm:grid-cols-2
      lg:grid-cols-3
    "
        >
          {/* Website 1 */}
          <WebsiteCard
            name="vue.khaingkyawmin.com"
            tech="Vue.js"
            url="https://vue.khaingkyawmin.com"
          />

          {/* Website 2 */}
          <WebsiteCard
            name="kokomyint.com"
            tech="WordPress"
            url="https://kokomyint.com"
          />

          {/* Website 3 */}
          <WebsiteCard
            name="ngwehninyee.com is under active development. Stay tuned"
            tech="WordPress"
            url="https://ngwehninyee.com/"
          />

          {/* Website 4 */}
          <WebsiteCard
            name="arrmanshin.com"
            tech="WordPress"
            url="https://arrmanshin.com"
          />
        </div>
      </section>
      {/* //contact start */}

      <section id="contact" className="py-28 px-6 md:px-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-amber-50">
              Ready to start your next project?
            </h2>
            <p className="text-neutral-50">
              I build scalable web applications and clean websites. Let’s talk
              about how I can help you.
            </p>
          </div>
          <div className="rounded-3xl   backdrop-blur-2xl border border-white/2 p-6 sm:p-8 flex flex-col items-center justify-center space-y-6">
            {/* Top icons row */}
            <div className="flex flex-row justify-center items-center space-x-6">
              {/* Email */}
              <a
                href="mailto:khaingkyawmin1991@gmail.com"
                className="text-sm sm:text-base md:text-lg font-medium hover:text-white transition"
              >
                <Image
                  src="/logos/gmail.svg"
                  width={56}
                  height={56}
                  alt="Gmail"
                  className="object-contain"
                />
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/kkm1991"
                target="_blank"
                className="text-sm sm:text-base md:text-lg font-medium hover:text-white transition"
              >
                <Image
                  src="/logos/github.svg"
                  width={56}
                  height={56}
                  alt="GitHub"
                  className="object-contain"
                />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/khaing-kyaw-min-14259b14a/"
                target="_blank"
                className="text-sm sm:text-base md:text-lg font-medium hover:text-white transition"
              >
                <Image
                  src="/logos/linkedin.svg"
                  width={56}
                  height={56}
                  alt="LinkedIn"
                  className="object-contain"
                />
              </a>
            </div>

            {/* Phone */}
            <a
              href="tel:+959795388859"
              className="flex items-center justify-center gap-3 text-sm sm:text-base md:text-lg font-medium hover:text-white transition"
            >
              <Image
                src="/logos/phone.png"
                width={32}
                height={32}
                alt="Phone"
                className="object-contain"
              />
              <span className="text-amber-50">+95 979 538 8859</span>
            </a>

            {/* Viber */}
            <a
              href="tel:+959795388859"
              className="flex items-center justify-center gap-3 text-sm sm:text-base md:text-lg font-medium hover:text-white transition"
            >
              <Image
                src="/logos/viber.png"
                width={32}
                height={32}
                alt="Viber"
                className="object-contain"
              />
              <span className="text-amber-50">+95 979 538 8859</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
