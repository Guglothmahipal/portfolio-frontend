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

            <div className="flex gap-4 w-full sm:w-auto">
              
              {/* Explore Services Button */}
              <button
  onClick={() => navigate("/services")}
  className="flex-1 sm:flex-none px-6 py-3 rounded-full font-semibold google-border-cycle transition-all duration-300 hover:scale-105 hover:bg-gray-100 dark:hover:bg-gray-800"
>
  Explore Services
</button>


              {/* See My Work Button */}
              <button
  onClick={() => navigate("/projects")}
  className="flex-1 sm:flex-none px-6 py-3 rounded-full bg-black text-white border-2 border-black transition-all duration-300 hover:bg-white hover:text-black hover:border-black"
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
      <section className="py-16 overflow-hidden border-y border-gray-200 dark:border-gray-800">
        <div className="flex gap-16 whitespace-nowrap animate-marquee text-xl font-semibold text-gray-500 dark:text-gray-400">
          {[
            "React",
            "Next.js",
            "TypeScript",
            "AWS",
            "Google Cloud",
            "Firebase",
            "Docker",
            "Kubernetes",
            "Node.js",
            "Tailwind CSS",
            "Framer Motion",
          ].map((skill, index) => (
            <span
              key={index}
              className="hover:text-black dark:hover:text-white transition-colors duration-300"
            >
              • {skill}
            </span>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
