import { motion } from "framer-motion";
import heroImage from "../assets/HomeRightIMG.jpg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaCode,
  FaCloud,
  FaProjectDiagram,
  FaLaptopCode,
} from "react-icons/fa";

const Home = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const navigate = useNavigate();

  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-screen flex items-center pt-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 grid grid-cols-1 md:grid-cols-2 gap-12">
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <h2 className="tracking-widest uppercase text-gray-500 dark:text-gray-400 mb-4">
              Hello, I’m
            </h2>

            <h1 className="text-[clamp(2rem,6vw,4rem)] font-bold mb-6">
              <span>Mahipal</span>
            </h1>

            <p className="text-gray-600 dark:text-gray-400 max-w-md mb-8">
              I build scalable web applications, cloud-native systems, and
              provide freelance digital services for businesses and individuals.
            </p>

            {/* ===== BUTTONS UPDATED ===== */}
<div className="flex gap-4 justify-center md:justify-start">

  {/* Explore Services Button (Glassy + Animated Text) */}
  <button
  onClick={() => navigate("/services")}
  className="
    px-5 py-2.5 md:px-6 md:py-3
    text-sm md:text-base
    rounded-full
    font-semibold
    backdrop-blur-xl
    bg-gradient-to-b from-white/40 to-gray-200/40
    border
    border-gray-300/70
    shadow-[0_8px_25px_rgba(0,0,0,0.12)]
    hover:from-white/50
    hover:to-gray-300/50
    hover:shadow-[0_12px_35px_rgba(0,0,0,0.18)]
    transition-all duration-300
    whitespace-nowrap
    google-color-cycle
  "
>
  Explore Services
</button>


  {/* See My Work Button */}
  <button
    onClick={() => navigate("/projects")}
    className="
      px-5 py-2.5 md:px-6 md:py-3
      text-sm md:text-base
      rounded-full
      bg-black
      text-white
      border-2
      border-black
      transition-all duration-300
      hover:bg-white
      hover:text-black
      hover:border-black
      hover:scale-105
      whitespace-nowrap
    "
  >
    See My Work
  </button>

</div>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="flex items-center justify-center"
          >
            <img
              src={heroImage}
              alt="Hero"
              className="max-h-[480px] w-full object-contain opacity-90"
            />
          </motion.div>
        </div>
      </section>

      {/* ================= WHAT I DO SECTION ================= */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-16 text-center"
          >
            What <span className="google-color-cycle">I Do</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:auto-rows-[220px]">

            {/* BIG CARD */}
            <motion.div
              onMouseEnter={() => setHoveredCard("dev")}
              onMouseLeave={() => setHoveredCard(null)}
              whileHover={{ y: -8 }}
              className={`md:col-span-2 md:row-span-2 rounded-3xl p-8 bg-gray-50 dark:bg-gray-900 border transition ${
                hoveredCard === "dev"
                  ? "google-border-cycle"
                  : "border-gray-200 dark:border-gray-800"
              }`}
            >
              <FaCode className="text-3xl mb-6 text-indigo-500" />
              <h3 className="text-2xl font-semibold mb-4">
                Web & Application Development
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                I design and build modern websites, full-stack applications,
                dashboards, and scalable systems tailored for startups,
                businesses, and personal brands.
              </p>
            </motion.div>

            {/* CLOUD CARD */}
            <motion.div
              onMouseEnter={() => setHoveredCard("cloud")}
              onMouseLeave={() => setHoveredCard(null)}
              whileHover={{ y: -6 }}
              className={`rounded-3xl p-8 bg-gray-50 dark:bg-gray-900 border transition ${
                hoveredCard === "cloud"
                  ? "google-border-cycle"
                  : "border-gray-200 dark:border-gray-800"
              }`}
            >
              <FaCloud className="text-2xl mb-4 text-green-500" />
              <h3 className="text-xl font-semibold mb-3">
                Cloud & Deployment
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                AWS & Google Cloud deployment, CI/CD pipelines, serverless
                architecture and performance optimization.
              </p>
            </motion.div>

            {/* FREELANCE CARD */}
            <motion.div
              onMouseEnter={() => setHoveredCard("projects")}
              onMouseLeave={() => setHoveredCard(null)}
              whileHover={{ y: -6 }}
              className={`rounded-3xl p-8 bg-gray-50 dark:bg-gray-900 border flex flex-col justify-center transition ${
                hoveredCard === "projects"
                  ? "google-border-cycle"
                  : "border-gray-200 dark:border-gray-800"
              }`}
            >
              <FaProjectDiagram className="text-2xl mb-4 text-pink-500" />
              <h3 className="text-xl font-semibold">
                Freelance Digital Services
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                Logo editing, resume building, UI redesign, bug fixing and
                technical consulting.
              </p>
            </motion.div>

            {/* TECH STACK CARD */}
            <motion.div
              onMouseEnter={() => setHoveredCard("tech")}
              onMouseLeave={() => setHoveredCard(null)}
              whileHover={{ y: -6 }}
              className={`md:col-span-2 rounded-3xl p-8 bg-gray-50 dark:bg-gray-900 border transition ${
                hoveredCard === "tech"
                  ? "google-border-cycle"
                  : "border-gray-200 dark:border-gray-800"
              }`}
            >
              <FaLaptopCode className="text-2xl mb-4 text-yellow-500" />
              <h3 className="text-xl font-semibold mb-3">
                Technologies I Work With
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                React, Next.js, TypeScript, AWS, Google Cloud, Node.js,
                Tailwind CSS and modern frontend & backend technologies.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ================= SKILLS MARQUEE ================= */}
<section className="py-10 md:py-16 overflow-hidden border-y border-gray-200 dark:border-gray-800">
  <div className="relative w-full">

    <div className="flex w-max animate-marquee gap-10 md:gap-16">

      {[
        { name: "React", color: "bg-blue-500" },
        { name: "Next.js", color: "bg-black" },
        { name: "TypeScript", color: "bg-blue-600" },
        { name: "AWS", color: "bg-orange-500" },
        { name: "Google Cloud", color: "bg-green-500" },
        { name: "Firebase", color: "bg-yellow-500" },
        { name: "Docker", color: "bg-sky-500" },
        { name: "Kubernetes", color: "bg-indigo-500" },
        { name: "Node.js", color: "bg-green-600" },
        { name: "Tailwind CSS", color: "bg-cyan-500" },
        { name: "Framer Motion", color: "bg-pink-500" },
      ]
        .concat([
          { name: "React", color: "bg-blue-500" },
          { name: "Next.js", color: "bg-black" },
          { name: "TypeScript", color: "bg-blue-600" },
          { name: "AWS", color: "bg-orange-500" },
          { name: "Google Cloud", color: "bg-green-500" },
          { name: "Firebase", color: "bg-yellow-500" },
          { name: "Docker", color: "bg-sky-500" },
          { name: "Kubernetes", color: "bg-indigo-500" },
          { name: "Node.js", color: "bg-green-600" },
          { name: "Tailwind CSS", color: "bg-cyan-500" },
          { name: "Framer Motion", color: "bg-pink-500" },
        ])
        .map((skill, index) => (
          <div
            key={index}
            className="flex items-center gap-3 text-lg md:text-xl font-semibold text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-300"
          >
            {/* Colored Dot */}
            <span className={`w-3 h-3 rounded-full ${skill.color}`} />
            {skill.name}
          </div>
        ))}

    </div>

  </div>
</section>

    </>
  );
};

export default Home;
