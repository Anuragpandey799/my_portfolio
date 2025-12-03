import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import {
  FaCode,
  FaLaptopCode,
  FaServer,
  FaPalette,
  FaCogs,
  FaGlobe,
  FaMobileAlt,
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiBootstrap,
  SiMongodb,
  SiMysql,
  SiExpress,
  SiHtml5,
  SiCss3,
  SiJavascript,
} from "react-icons/si";
import { Link } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import AOS from "aos";
import "aos/dist/aos.css";

function Home({ dark }) {
  React.useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const gradientText =
    "text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-500";

  const bg = dark
    ? "bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white"
    : "bg-gradient-to-br from-pink-200 via-white to-blue-200 text-gray-900";

  const roleIcons = [
    { icon: <FaLaptopCode />, label: "Frontend Developer" },
    { icon: <FaServer />, label: "Backend Developer" },
    { icon: <FaCode />, label: "Full Stack Developer" },
    { icon: <FaPalette />, label: "UI/UX Designer" },
  ];

  const services = [
    {
      icon: <FaGlobe />,
      title: "Website Development",
      desc: "Modern, fast, responsive websites using React.js, TailwindCSS and more.",
    },
    {
      icon: <FaMobileAlt />,
      title: "Responsive Design",
      desc: "Pixel-perfect designs that adapt to all screen sizes and devices.",
    },
    {
      icon: <FaCogs />,
      title: "Custom Features",
      desc: "Interactive functionality like animations, toggles, dynamic forms, modals, etc.",
    },
    {
      icon: <FaReact />,
      title: "SPA Development",
      desc: "Building fast and fluid single-page applications with React.js & hooks.",
    },
    {
      icon: <FaNodeJs />,
      title: "Backend Services",
      desc: "Building scalable REST APIs using Node.js, Express.js & MongoDB.",
    },
  ];

  const skills = [
    {
      icon: <SiHtml5 />,
      name: "HTML5",
      desc: "Hyper-Text Markup language for creating structured content.",
      link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
    {
      icon: <SiCss3 />,
      name: "CSS3",
      desc: "Designing modern layouts and responsive visuals.",
      link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
    {
      icon: <SiJavascript />,
      name: "JavaScript",
      desc: "Interactive web experiences and dynamic behavior.",
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
      icon: <FaReact />,
      name: "React.js",
      desc: "Component-based UI development framework.",
      link: "https://reactjs.org/docs/getting-started.html",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
      desc: "Utility-first CSS for efficient styling.",
      link: "https://tailwindcss.com/docs",
    },
    {
      icon: <SiBootstrap />,
      name: "Bootstrap",
      desc: "Responsive CSS framework for building sleek, mobile-first UIs quickly.",
      link: "https://getbootstrap.com/docs",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
      desc: "Runtime environment for backend JavaScript.",
      link: "https://nodejs.org/en/docs",
    },
    {
      icon: <SiExpress />,
      name: "Express.js",
      desc: "Backend framework for building REST APIs.",
      link: "https://expressjs.com/",
    },
    {
      icon: <SiMongodb />,
      name: "MongoDB",
      desc: "NoSQL database for flexible data storage.",
      link: "https://www.mongodb.com/docs/",
    },
    {
      icon: <SiMysql />,
      name: "MySQL",
      desc: "Relational database for structured queries.",
      link: "https://dev.mysql.com/doc/",
    },
    {
      icon: <FaGitAlt />,
      name: "Git",
      desc: "Version control and collaboration.",
      link: "https://git-scm.com/doc",
    },
    {
      icon: <FaPython />,
      name: "Python",
      desc: "Used for scripting and AI/ML experimentation.",
      link: "https://docs.python.org/3/",
    },
  ];

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <div className={`relative min-h-screen w-full flex flex-col items-center justify-start overflow-hidden ${bg}`}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          background: { color: "transparent" },
          fpsLimit: 60,
          particles: {
            color: { value: dark ? "#ffffff" : "#000000" },
            links: {
              enable: true,
              color: dark ? "#ffffff" : "#000000",
              distance: 150,
              opacity: 0.4,
              width: 1,
            },
            move: { enable: true, speed: 1 },
            number: { value: 40, density: { enable: true, area: 800 } },
            opacity: { value: 0.5 },
            size: { value: { min: 1, max: 3 } },
          },
        }}
        className="absolute top-0 left-0 w-full h-full z-0"
      />

      <main className="relative z-[1] text-center px-6 py-20">
        <motion.h1 className={`text-3xl sm:text-5xl font-bold mb-4 font-eliteRegular ${gradientText}`} initial={{ opacity: 0, y: -40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          Hey, I'm Anurag Pandey
        </motion.h1>

        <motion.h2 className="text-xl sm:text-2xl font-semibold mb-6" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
          <span className="mr-2">I'm a</span>
          <span className={`font-mono ${gradientText}`}>
            <Typewriter words={["Frontend Developer 💻", "Backend Developer ⚙️", "Full Stack Engineer 🚀", "UI/UX Designer 🎨"]} loop={0} cursor cursorStyle="_" typeSpeed={70} deleteSpeed={50} delaySpeed={1200} />
          </span>
        </motion.h2>
       

        <motion.h2 className="text-lg sm:text-xl font-medium text-gray-400 dark:text-gray-300 mb-6">
          Building secure, scalable, and elegant web solutions.
        </motion.h2>


        <motion.div className="flex justify-center gap-6 flex-wrap my-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
          {roleIcons.map((role, idx) => (
            <motion.div key={idx} className="text-center" whileHover={{ scale: 1.2 }} transition={{ type: "spring", stiffness: 300 }}>
              <div data-tooltip-id="role-tooltip" data-tooltip-content={role.label} className={`text-3xl sm:text-4xl p-4 rounded-full shadow-md ${dark ? "bg-gray-800 text-white" : "bg-white text-black"}`}>{role.icon}</div>
            </motion.div>
          ))}
        </motion.div>

        <Tooltip id="role-tooltip" place="top" />

        <motion.div className="mt-10 flex justify-center gap-6 flex-wrap" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.5 }}>
          <Link to="/projects" className="px-5 py-2 text-sm sm:text-base rounded-full font-semibold border border-pink-600 hover:bg-pink-600 hover:text-white transition-all">View Projects</Link>
          <Link to="/about" className="px-5 py-2 text-sm sm:text-base rounded-full font-semibold border border-purple-600 hover:bg-purple-600 hover:text-white transition-all">More About Me</Link>
        </motion.div>
      </main>

      <section className="relative z-[1] max-w-6xl mx-auto py-20 px-4" data-aos="fade-up">
        <h3 className="text-3xl font-bold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-purple-700">
          💼 What I Offer
        </h3>
        <div className="grid phone:grid-cols-1 tablet:grid-cols-2 gap-8">
          {services.map((srv, i) => (
            <motion.div key={i} className={`rounded-2xl shadow-xl p-6 text-center border-t-4 ${dark ? "bg-slate-900 text-white border-pink-600" : "bg-white text-gray-900 border-purple-500"}`} whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
              <div className="text-4xl mb-4 text-pink-500 mx-auto">{srv.icon}</div>
              <h4 className="text-xl font-semibold mb-2">{srv.title}</h4>
              <p className="text-sm text-justify opacity-80">{srv.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="relative z-[1] max-w-6xl mx-auto py-20 px-4" data-aos="fade-up">
        <h3 className="text-3xl font-bold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-700">
          🚀 My Tech Skills
        </h3>
        <div className="grid grid-cols-1  phone:grid-cols-2 tablet:grid-cols-3 laptop:grid-cols-4 gap-6">
          {skills.map((skill, i) => (
            <motion.a href={skill.link} key={i} target="_blank" rel="noopener noreferrer" className={`rounded-2xl p-5 text-center shadow-lg transform hover:scale-105 transition-all duration-300 ${dark ? "bg-slate-900 text-white" : "bg-white text-gray-800"}`} whileHover={{ rotate: 1 }}>
              <div className="text-3xl mb-2 text-purple-500 mx-auto">{skill.icon}</div>
              <h4 className="text-lg font-semibold mb-1">{skill.name}</h4>
              <p className="text-xs text-justify opacity-80">{skill.desc}</p>
            </motion.a>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
