import { type ComponentType } from "react";
import { motion } from "framer-motion";
import { FaCloud, FaCode, FaDatabase, FaPalette, FaTools } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useUser } from "../context/UserContext";

type ServiceItem = {
  id: string;
  title: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
  bullets: string[];
};

const services: ServiceItem[] = [
  {
    id: "web-development",
    title: "Web Development",
    description:
      "Modern responsive websites and landing pages with clean UI and strong performance.",
    icon: FaCode,
    bullets: ["React + TypeScript", "SEO-ready pages", "Responsive design"],
  },
  {
    id: "full-stack-apps",
    title: "Full-Stack Apps",
    description:
      "Business dashboards and custom applications with secure backend integration.",
    icon: FaDatabase,
    bullets: ["REST API integration", "Authentication flows", "Scalable architecture"],
  },
  {
    id: "cloud-deployment",
    title: "Cloud Deployment",
    description:
      "Deploy and scale apps on AWS or Google Cloud with production-friendly setup.",
    icon: FaCloud,
    bullets: ["CI/CD pipelines", "Monitoring basics", "Cost-aware setup"],
  },
  {
    id: "ui-revamp",
    title: "UI Revamp",
    description:
      "Upgrade old interfaces into modern, accessible, and conversion-focused experiences.",
    icon: FaPalette,
    bullets: ["Design cleanup", "Component consistency", "Improved UX flow"],
  },
  {
    id: "maintenance-fixes",
    title: "Maintenance & Fixes",
    description:
      "Ongoing support for bug fixes, speed improvements, and feature enhancements.",
    icon: FaTools,
    bullets: ["Bug resolution", "Performance tuning", "Feature additions"],
  },
];

const Services = () => {
  const navigate = useNavigate();
  const { addItem } = useCart();
  const { isAuthenticated } = useUser();

  const handleAddToCart = (service: ServiceItem) => {
    if (!isAuthenticated) {
      navigate(`/auth?redirect=/services&service=${encodeURIComponent(service.title)}`);
      return;
    }

    addItem({
      id: service.id,
      title: service.title,
      description: service.description,
    });
    navigate("/cart");
  };

  return (
    <section className="min-h-screen pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Explore <span className="google-color-cycle">Services</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            End-to-end services for businesses, startups, and personal brands.
            Pick what fits your goal and timeline.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className="rounded-3xl border border-gray-200 dark:border-gray-800 p-7 bg-white dark:bg-neutral-950 shadow-sm"
              >
                <Icon className="text-2xl text-orange-500 mb-4" />
                <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300 mb-6">
                  {service.bullets.map((bullet) => (
                    <li key={bullet}>- {bullet}</li>
                  ))}
                </ul>

                <div className="flex gap-3">
                  <button
                    onClick={() => handleAddToCart(service)}
                    className="flex-1 px-4 py-2.5 rounded-full font-semibold bg-black text-white border-2 border-black hover:bg-white hover:text-black dark:bg-white dark:text-black dark:border-white dark:hover:bg-black dark:hover:text-white transition"
                  >
                    Add to Cart
                  </button>
                  <button
                    onClick={() => navigate("/contact")}
                    className="px-4 py-2.5 rounded-full border border-gray-300 dark:border-gray-600"
                  >
                    Enquire
                  </button>
                </div>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-14 rounded-3xl border border-gray-200 dark:border-gray-800 p-8 md:p-10 text-center bg-gray-50 dark:bg-neutral-900"
        >
          <h3 className="text-2xl font-bold mb-3">Ready to start a project?</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Share your idea and I will suggest the right service and execution plan.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => navigate("/contact")}
              className="px-6 py-3 rounded-full font-semibold bg-black text-white border-2 border-black hover:bg-white hover:text-black dark:bg-white dark:text-black dark:border-white dark:hover:bg-black dark:hover:text-white transition"
            >
              Contact Me
            </button>
            <button
              onClick={() => navigate("/projects")}
              className="px-6 py-3 rounded-full font-semibold border-2 border-gray-300 dark:border-gray-600 hover:border-black dark:hover:border-white transition"
            >
              View Projects
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;


