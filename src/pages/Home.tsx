import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import heroImage from "../assets/HomeRightIMG.jpg";
import { useNavigate } from "react-router-dom";

/* ================= STATIC TOP PROJECTS ================= */
const topProjects = [
  {
    id: "1",
    title: "Developer Portfolio",
    description:
      "A modern personal portfolio built with React, Tailwind CSS, and Framer Motion.",
    tech: ["React", "Tailwind", "Framer Motion"],
    github: "https://github.com/your-username/portfolio",
    live: "https://your-portfolio.com",
  },
  {
    id: "2",
    title: "Cloud Management Dashboard",
    description:
      "A cloud-native dashboard for monitoring services and deployments.",
    tech: ["React", "Node.js", "AWS"],
    github: "https://github.com/your-username/cloud-dashboard",
    live: "https://cloud-dashboard.com",
  },
  {
    id: "3",
    title: "Task Management App",
    description:
      "A full-stack task management application with authentication.",
    tech: ["React", "Express", "MongoDB"],
    github: "https://github.com/your-username/task-manager",
    live: "https://task-manager.com",
  },
];

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-screen flex items-center pt-24">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-sm tracking-widest uppercase text-gray-500 dark:text-gray-400 mb-4">
              Hello, I’m
            </h2>

            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Mahipal 
            </h1>

            <p className="text-gray-600 dark:text-gray-400 max-w-md mb-8">
              I’m a software developer focused on building modern web
              applications, cloud-native systems, and scalable solutions.
            </p>

            {/* BUTTONS */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-wrap gap-5"
            >
              <button
                className="px-8 py-3 rounded-full font-semibold text-white 
                bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
                shadow-lg shadow-purple-500/30 transition-all duration-300
                hover:scale-105 hover:shadow-xl hover:shadow-pink-500/40"
              >
                My Portfolio
              </button>

              <button
                onClick={() => navigate("/resume")}
                className="px-8 py-3 rounded-full font-semibold border-2 
                border-gray-400 dark:border-gray-600 text-gray-800 
                dark:text-gray-200 transition-all duration-300
                hover:bg-black hover:text-white 
                dark:hover:bg-white dark:hover:text-black hover:scale-105"
              >
                Resume
              </button>
            </motion.div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
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

     {/* ================= TOP PROJECTS ================= */}
<section id="projects" className="py-28">
  <div className="max-w-8xl mx-auto px-8">
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">

      {/* LEFT STATIC CONTENT */}
      <div className="lg:col-span-1">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 ml-14">
          Top Projects
        </h2>

        <p className="text-gray-600 dark:text-gray-400 max-w-sm ml-14">
          A curated list of projects showcasing my skills in frontend,
          backend, and cloud technologies.
        </p>
      </div>

      {/* RIGHT PROJECT CARDS */}
      <div className="lg:col-span-2">
        <div
          className="
            flex
            gap-6
            overflow-x-auto
            overflow-y-visible
            pb-10
            snap-x snap-mandatory
            scrollbar-hide
          "
        >
          {topProjects.map((project) => (
            <div
              key={project.id}
              className="
                snap-start
                relative
                w-[260px] md:w-[280px]
                h-[360px]
                flex-shrink-0
                rounded-2xl
                overflow-hidden
                bg-gray-200
                shadow-lg
              "
            >
              {/* BACKGROUND IMAGE */}
              <img
                src={heroImage}
                alt={project.title}
                className="
                  absolute inset-0
                  w-full h-full
                  object-cover
                "
              />

              {/* FLOATING INFO CARD */}
              <div
                className="
                  absolute bottom-4 left-4 right-4
                  bg-white dark:bg-gray-900
                  rounded-xl
                  p-4
                  shadow-md
                "
              >
                <h3 className="text-sm font-semibold mb-2 text-gray-900 dark:text-white">
                  {project.title}
                </h3>

                {/* TECH STACK */}
                <div className="flex flex-wrap gap-1 mb-3">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="
                        text-[10px]
                        px-2 py-0.5
                        rounded
                        bg-gray-100
                        dark:bg-gray-800
                        text-gray-700
                        dark:text-gray-300
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* LINKS */}
                <div className="flex gap-4 text-xs text-gray-700 dark:text-gray-300">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 hover:underline"
                  >
                    <FiGithub /> Code
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 hover:underline"
                  >
                    <FiExternalLink /> Live
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  </div>
</section>




      {/* ================= FOOTER ================= */}
      <footer className="py-8 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-8 text-center text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Mahipal. All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default Home;
