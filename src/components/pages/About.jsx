import React, { useEffect } from "react";
import { ReactTyped } from "react-typed";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

function About({ dark }) {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const bgStyle = dark
    ? "bg-gradient-to-br from-blue-950 via-slate-900 to-black text-white"
    : "bg-gradient-to-br from-gray-100 via-white to-gray-300 text-gray-900";

  const gradientText =
    "bg-gradient-to-r from-pink-600 to-purple-700 text-transparent bg-clip-text";
  const sectionTitle = "text-3xl font-extrabold mb-4 border-b-2 border-pink-400 pb-2";

  return (
    <section id="about" className={`w-full px-6 py-16 space-y-24 ${bgStyle}`}>
      {/* Section 1: Hero Intro */}
      <div  className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10">
        <div className="lg:w-1/2" data-aos="fade-right">
          <h2 className={`text-5xl font-extrabold mb-4 ${gradientText}`}>About Me</h2>

          <ReactTyped
            strings={[
              "ANURAG PANDEY",
              "FRONTEND DEVELOPER",
              "SOFTWARE ENGINEER",
              "AI/ML ENTHUSIAST",
              "FULL-STACK LEARNER",
              "CYBER SECURITY INTERESTED",
            ]}
            typeSpeed={80}
            backSpeed={30}
            loop
            className={`text-2xl sm:text-3xl font-semibold mb-6 ${gradientText}`}
          />

          <p className="text-lg leading-relaxed font-light mb-4 text-justify">
            👋 I'm <strong>Anurag Pandey</strong>, a <strong>BCA graduate</strong> from Tilak Maharashtra
            Vidyapeeth. Passionate about building fast, accessible, and elegant user experiences, I specialize in frontend & full-stack development.
          </p>

          <p className="text-lg font-light text-justify mb-4">
            With strong curiosity in <strong>AI, ML</strong>, and <strong>ethical hacking</strong>, I also explore security-based projects and participate in CTFs.
          </p>

          {/* <div className="mt-6">
            <Link
              to="/contact"
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all ${
                dark
                  ? "bg-green-600 text-white hover:bg-green-700"
                  : "bg-purple-600 text-white hover:bg-purple-700"
              }`}
            >
              Let's Collaborate <FiArrowRight />
            </Link>
          </div> */}
        </div>

        <div className="lg:w-1/2 flex justify-center" data-aos="fade-left">
          <img
            src="/Images/myPhoto.jpg"
            alt="Anurag Pandey"
            className="rounded-3xl shadow-2xl w-72 h-72 object-cover border-4 border-purple-300 hover:scale-105 transition"
          />
        </div>
      </div>

      {/* Section 2: Education */}
      <div className="max-w-5xl mx-auto" data-aos="fade-up">
        <h3 className={sectionTitle}>🎓 Education</h3>
        <div className="grid sm:grid-cols-2 gap-6 mt-4">
          <div>
            <h4 className="text-xl font-bold">B.C.A</h4>
            <p className="text-sm">Tilak Maharashtra Vidyapeeth, Pune (2025)</p>
          </div>
          <div>
            <h4 className="text-xl font-bold">HSC</h4>
            <p className="text-sm">B.N.V. Inter College, Mau – 76.6%</p>
          </div>
          <div>
            <h4 className="text-xl font-bold">SSC</h4>
            <p className="text-sm">E.E.M. School, Mau – 68%</p>
          </div>
        </div>
      </div>

      {/* Section 3: Animated Skills */}
      <div className="max-w-5xl mx-auto" data-aos="fade-up">
        <h3 className={sectionTitle}>⚙️ Technical Skills</h3>
        <div className="space-y-4">
          {[
            { skill: "HTML / CSS / JavaScript", level: "95%" },
            { skill: "React.js / Tailwind", level: "90%" },
            { skill: "Node.js / Express", level: "80%" },
            { skill: "MongoDB / MySQL", level: "75%" },
            { skill: "Git / GitHub", level: "85%" },
          ].map((item, index) => (
            <div key={index}>
              <div className="flex justify-between text-sm font-semibold">
                <span>{item.skill}</span>
                <span>{item.level}</span>
              </div>
              <div className="w-full bg-gray-300 dark:bg-gray-800 h-2 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-pink-500 to-purple-600 rounded-full animate-pulse"
                  style={{ width: item.level }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section 4: Projects */}
      <div className="max-w-5xl mx-auto" data-aos="fade-up">
        <h3 className={sectionTitle}>🚀 Projects</h3>
        <ul className="space-y-5 mt-4">
          <li>
            <strong>Portfolio Website</strong> – Modern UI with animations and routing.
            <br />
            <a
              href="https://github.com/Anuragpandey799/my_portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              View on GitHub
            </a>
          </li>
          <li>
            <strong>MedLink</strong> – One-stop healthcare platform.
            <br />
            <a
              href="https://github.com/Anuragpandey799/MedLink-All-Medical-Services-At-One-Click"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              View on GitHub
            </a>
          </li>
          <li>
            <strong>BBMS</strong> – Blood Bank Management Web App.
            <br />
            <a
              href="https://anubloodbank.free.nf/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              Live Demo
            </a>
          </li>
        </ul>
      </div>

      {/* Section 5: Hobbies */}
      <div className="max-w-5xl mx-auto" data-aos="fade-up">
        <h3 className={sectionTitle}>🎯 Hobbies & Interests</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-base font-medium">
          <div className="bg-white/10 p-3 rounded shadow hover:scale-105 transition-all">Cybersecurity & CTFs</div>
          <div className="bg-white/10 p-3 rounded shadow hover:scale-105 transition-all">AI/ML Research</div>
          <div className="bg-white/10 p-3 rounded shadow hover:scale-105 transition-all">Tech Blogging</div>
          <div className="bg-white/10 p-3 rounded shadow hover:scale-105 transition-all">Gaming</div>
          <div className="bg-white/10 p-3 rounded shadow hover:scale-105 transition-all">Travel & Photography</div>
          <div className="bg-white/10 p-3 rounded shadow hover:scale-105 transition-all">Open Source</div>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center" data-aos="zoom-in">
        <Link
          to="/contact"
          className={`inline-flex items-center gap-2 px-6 py-3 mt-10 rounded-full font-semibold transition-all text-lg ${
            dark
              ? "bg-green-600 text-white hover:bg-green-700"
              : "bg-purple-600 text-white hover:bg-purple-700"
          }`}
        >
          Let’s Collaborate <FiArrowRight />
        </Link>
      </div>
    </section>
  );
}

export default About;
