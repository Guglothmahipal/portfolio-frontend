import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import webDevImage from "../assets/webdev.jpg";

import {
  FaCode,
  FaCloud,
  FaProjectDiagram,
  FaLaptopCode,
} from "react-icons/fa";

const Home = () => {
  const navigate = useNavigate();
  const marqueeSkills = [
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
  ];

  return (
    <>      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-20 pb-10 md:min-h-[calc(100vh-5.25rem)] ">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_30rem] md:gap-14 lg:gap-20 items-start md:items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center md:pr-6 lg:pr-10"
          >
            <h2 className="tracking-widest uppercase text-gray-500 dark:text-gray-400 mb-4">
              Hello, I'm
            </h2>

            <h1 className="text-[clamp(2rem,6vw,4rem)] font-bold mb-6">
              <span>Mahipal</span>
            </h1>

            <p className="text-gray-600 dark:text-gray-400 max-w-md mb-8">
              I build scalable web applications, cloud-native systems, and
              provide freelance digital services for businesses and individuals.
            </p>

            <div className="flex gap-4 justify-center md:justify-start">
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

              <button
                onClick={() => navigate("/projects")}
                className="
                  px-5 py-2.5 md:px-6 md:py-3
                  text-sm md:text-base
                  rounded-full
                  font-semibold
                  border-2
                  transition-all duration-300
                  whitespace-nowrap

                  bg-black text-white border-black
                  hover:bg-white hover:text-black

                  dark:bg-white dark:text-black dark:border-white
                  dark:hover:bg-black dark:hover:text-white dark:hover:border-white
                "
              >
                See My Work
              </button>
            </div>

            <div className="mt-7 grid grid-cols-3 gap-2 sm:gap-3 max-w-xl mb-6 md:mb-0">
              {[
                { value: "3+", label: "Years Experience" },
                { value: "30+", label: "Projects" },
                { value: "10+", label: "Clients" },
              ].map((stat) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ y: -6, scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 320, damping: 20 }}
                  className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-gray-900/60 px-3 py-3 sm:px-4 sm:py-4 shadow-sm"
                >
                  <p className="text-xl sm:text-2xl font-bold leading-none">{stat.value}</p>
                  <p className="mt-1.5 text-[10px] sm:text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="w-full md:justify-self-end md:pl-2"
          >
            <div className="w-full max-w-[30rem] ml-auto">
              <form
                action="https://formsubmit.co/guglothmahipal@gmail.com"
                method="POST"
                className="relative space-y-3 border border-gray-300 dark:border-gray-700 rounded-2xl p-4 pt-10 md:p-5 md:pt-12 bg-white/45 dark:bg-black/10 shadow-[0_10px_30px_rgba(0,0,0,0.08)]"
              >
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 md:left-auto md:right-4 md:translate-x-0 inline-flex items-center gap-2 rounded-full px-3 py-1.5 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
                  </span>
                  <span className="text-xs font-medium text-green-700 dark:text-green-300">
                    Available for work
                  </span>
                </div>
                <input type="hidden" name="_subject" value="New Portfolio Inquiry" />
                <input type="hidden" name="_captcha" value="false" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium mb-1.5 text-gray-700 dark:text-gray-300">First name</label>
                    <input
                      name="first_name"
                      required
                      placeholder="First name"
                      className="w-full rounded-xl border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2.5 text-sm outline-none focus:border-violet-400"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium mb-1.5 text-gray-700 dark:text-gray-300">Last name</label>
                    <input
                      name="last_name"
                      placeholder="Last name"
                      className="w-full rounded-xl border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2.5 text-sm outline-none focus:border-violet-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium mb-1.5 text-gray-700 dark:text-gray-300">Email</label>
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="you@company.com"
                    className="w-full rounded-xl border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2.5 text-sm outline-none focus:border-violet-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium mb-1.5 text-gray-700 dark:text-gray-300">Phone number</label>
                  <input
                    name="phone"
                    placeholder="+1 (555) 000-0000"
                    className="w-full rounded-xl border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2.5 text-sm outline-none focus:border-violet-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium mb-1.5 text-gray-700 dark:text-gray-300">Message</label>
                  <textarea
                    name="message"
                    required
                    placeholder="Tell me about your project"
                    className="w-full min-h-24 rounded-xl border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2.5 text-sm outline-none focus:border-violet-400"
                  />
                </div>

                <label className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-400">
                  <input type="checkbox" required className="mt-0.5" />
                  <span>I agree to your <Link to="/privacy-policy" className="underline underline-offset-2">privacy policy</Link>.</span>
                </label>

                <button
                  type="submit"
                  className="w-full rounded-xl bg-amber-600 text-white px-5 py-2.5 font-semibold hover:bg-amber-700 transition"
                >
                  Get in Touch Today
                </button>
              </form>
            </div>
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
            How <span className="google-color-cycle">I Help</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[2rem] border border-rose-200/40 bg-[linear-gradient(135deg,#da9db8_0%,#cf90b8_45%,#c38fc2_100%)] p-8 md:p-12 text-white shadow-[0_18px_48px_rgba(157,78,130,0.22)]"
          >
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -top-24 -left-20 h-72 w-72 rounded-full bg-white/15 blur-3xl" />
              <div className="absolute -bottom-20 -right-16 h-72 w-72 rounded-full bg-purple-900/25 blur-3xl" />
            </div>

            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-white/80 mb-4">
                  Full-Stack + Cloud Services
                </p>
                <h3 className="text-4xl md:text-5xl font-semibold leading-tight mb-5">
                  Build Faster. Ship Better.
                </h3>
                <p className="text-white/90 text-lg leading-relaxed max-w-xl mb-7">
                  I help founders and businesses design, build, and deploy
                  high-quality digital products with modern web engineering,
                  cloud architecture, and reliable delivery workflows.
                </p>

                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 rounded-full bg-white/20 border border-white/30 text-sm font-medium">
                    Web Apps
                  </span>
                  <span className="px-4 py-2 rounded-full bg-white/20 border border-white/30 text-sm font-medium">
                    Cloud Deployments
                  </span>
                  <span className="px-4 py-2 rounded-full bg-white/20 border border-white/30 text-sm font-medium">
                    Freelance Solutions
                  </span>
                </div>
              </div>

              <div className="rounded-3xl bg-black/15 border border-white/10 p-5 md:p-6 backdrop-blur-sm">
                <div className="rounded-2xl bg-white/95 text-gray-900 p-4 md:p-5 shadow-xl">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  </div>

                  <img
                    src={webDevImage}
                    alt="Service showcase"
                    className="w-full h-48 md:h-56 object-cover rounded-xl"
                  />

                  <div className="mt-4 grid grid-cols-2 gap-3">
                    <div className="rounded-lg bg-rose-50 px-3 py-2 text-sm font-medium text-rose-700 flex items-center gap-2">
                      <FaCode className="text-rose-500" />
                      Development
                    </div>
                    <div className="rounded-lg bg-sky-50 px-3 py-2 text-sm font-medium text-sky-700 flex items-center gap-2">
                      <FaCloud className="text-sky-500" />
                      Deployment
                    </div>
                    <div className="rounded-lg bg-violet-50 px-3 py-2 text-sm font-medium text-violet-700 flex items-center gap-2">
                      <FaProjectDiagram className="text-violet-500" />
                      Consulting
                    </div>
                    <div className="rounded-lg bg-amber-50 px-3 py-2 text-sm font-medium text-amber-700 flex items-center gap-2">
                      <FaLaptopCode className="text-amber-500" />
                      UI/UX Fixes
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= SKILLS MARQUEE ================= */}
      <section className="py-12 md:py-16 overflow-hidden border-y border-gray-200 dark:border-gray-800 bg-gradient-to-r from-gray-50/70 via-transparent to-gray-50/70 dark:from-gray-900/40 dark:via-transparent dark:to-gray-900/40">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 mb-8">
          <h3 className="text-xl md:text-2xl font-semibold text-center">
            Core Stack & Tools
          </h3>
          <p className="text-center text-gray-500 dark:text-gray-400 mt-2 text-sm md:text-base">
            Daily technologies used across frontend, backend, and cloud workflows.
          </p>
        </div>

        <div className="relative w-full">
          <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-white dark:from-black to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-white dark:from-black to-transparent z-10" />

          <div className="flex w-max animate-marquee gap-6 md:gap-8">
            {[...marqueeSkills, ...marqueeSkills].map((skill, index) => (
              <div
                key={index}
                className="flex items-center gap-3 px-5 py-3 rounded-full border border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-900/80 text-sm md:text-base font-semibold text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-all duration-300 hover:-translate-y-1"
              >
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










