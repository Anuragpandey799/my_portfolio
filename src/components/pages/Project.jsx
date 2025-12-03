import React, { useEffect } from "react";
import { FiExternalLink } from "react-icons/fi";
import AOS from "aos";
import "aos/dist/aos.css";

function Projects({ dark }) {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const projects = [
    {
      title: "Portfolio Website",
      description: `A fully responsive and animated personal portfolio built with React and Tailwind CSS.
        Features include dark mode toggle, smooth page transitions, AnimatedCursor, reusable components (Navbar, Footer, Preloader),
        and an interactive Home page with Typewriter and particles.`,
      image: "/Images/portfolio-screenshot.png",
      link: "https://github.com/Anuragpandey799/my_portfolio",
      type: "code",
      tech: ["React.js", "Tailwind CSS", "Framer Motion"],
    },
    {
      title: "Top‑10 Scientists",
      description: `A curated showcase of India's top scientists. Built with React and Tailwind, it features dynamic card layouts,
        hover interactions, and clean typography. Designed to educate users about scientific contributors in India.`,
      image: "/Images/scientists-screenshot.png",
      link: "https://github.com/Anuragpandey799/top10-scientists",
      type: "code",
      tech: ["React.js", "Tailwind CSS", "API Integration"],
    },
    {
      title: "MedLink Healthcare Portal",
      description: `A full‑stack medical services platform offering appointment booking, prescription reports, and doctor consultation chat.
        Backend built with Node.js and Express, database with MongoDB, and JWT-based authentication.`,
      image: "/Images/medLink-Screenshot.png",
      link: "https://github.com/Anuragpandey799/MedLink-All-Medical-Services-At-One-Click",
      type: "code",
      tech: ["React.js", "Node.js", "MongoDB"],
    },
    {
      title: "BBMS – Blood Bank Management System",
      description: `A web application for managing blood donor records and blood inventory.
        Frontend with Bootstrap, backend built in PHP and MySQL, delivering an admin & donor interface.`,
      image: "/Images/bbms-Screenshot.png",
      link: "https://anubloodbank.free.nf/",
      type: "live",
      tech: ["PHP", "MySQL", "Bootstrap"],
    },
  ];

  return (
    <section
      className={`min-h-screen w-full px-6 py-16 ${
        dark
          ? "bg-gradient-to-br from-blue-950 via-orange-900 to-black text-white"
          : "bg-gradient-to-br from-gray-100 via-white to-gray-300 text-gray-900"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-4xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-700">
          🚀 Featured Projects
        </h2>

        <div className="space-y-16">
          {projects.map((proj, idx) => (
            <div
              key={idx}
              className="grid gap-8 lg:grid-cols-2 items-center"
              data-aos="fade-up"
            >
              <div className="rounded-xl overflow-hidden shadow-lg transform transition hover:scale-105">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-64 object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
                  {proj.title}
                  <a
                    href={proj.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-400 hover:text-purple-500"
                  >
                    <FiExternalLink size={24} />
                  </a>
                </h3>
                <p className="mb-4 leading-relaxed text-justify">
                  {proj.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {proj.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-xs font-medium dark:bg-pink-800 dark:text-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-1 px-5 py-2 rounded-full font-semibold transition ${
                    dark
                      ? "bg-green-600 text-white hover:bg-green-700"
                      : "bg-purple-600 text-white hover:bg-purple-700"
                  }`}
                >
                  {proj.type === "live" ? "View Live Project" : "View Code"} <FiExternalLink />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
