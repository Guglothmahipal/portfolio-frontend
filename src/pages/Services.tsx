import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { FaChartLine, FaCode, FaDatabase, FaLaptopCode, FaRocket, FaServer } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import freelanceImage from "../assets/Freelance.png";
import cloudComputeImage from "../assets/cloudcompute.png";
import webDevImage from "../assets/webdev.jpg";
import { useCart, type CartItem } from "../context/CartContext";
import { useUser } from "../context/UserContext";

type Audience = "business" | "student";
type BusinessCategoryId = "web-development" | "app-development" | "freelance-services";
type PackageTier = "Basic" | "Standard" | "Premium";
type DeadlineMode = "flexible" | "standard" | "rush";

type PackagePlan = {
  tier: PackageTier;
  price: number;
  deliveryDays: number;
  features: string[];
};

type ExampleProject = {
  name: string;
  result: string;
  stack: string;
};

type BusinessCategory = {
  id: BusinessCategoryId;
  title: string;
  shortDescription: string;
  heroDescription: string;
  howItWorks: string[];
  technologies: string[];
  exampleProjects: ExampleProject[];
  packages: PackagePlan[];
  image: string;
};

const businessCategories: BusinessCategory[] = [
  {
    id: "web-development",
    title: "Web Development",
    shortDescription: "Modern websites, product pages, and conversion-focused business experiences.",
    heroDescription:
      "Web development service is ideal for companies that need a strong online presence with clear messaging, responsive design, and scalable architecture.",
    howItWorks: [
      "Requirement discovery and content mapping",
      "Wireframe and UI planning",
      "Responsive frontend implementation",
      "Testing, optimization, and launch",
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Node.js", "Vercel"],
    exampleProjects: [
      {
        name: "SaaS Landing Platform",
        result: "37% improvement in qualified leads",
        stack: "React, TypeScript, Tailwind",
      },
      {
        name: "Consulting Business Site",
        result: "Fast mobile-first redesign",
        stack: "Next.js, SEO setup",
      },
    ],
    packages: [
      {
        tier: "Basic",
        price: 299,
        deliveryDays: 7,
        features: ["Up to 4 pages", "Responsive UI", "Contact form integration"],
      },
      {
        tier: "Standard",
        price: 649,
        deliveryDays: 14,
        features: ["Up to 10 pages", "CMS integration", "Basic SEO and analytics"],
      },
      {
        tier: "Premium",
        price: 1199,
        deliveryDays: 21,
        features: ["Custom modules", "Advanced animation", "Performance and accessibility optimization"],
      },
    ],
    image: webDevImage,
  },
  {
    id: "app-development",
    title: "App Development",
    shortDescription: "Scalable app flows for customer portals, internal tools, and digital products.",
    heroDescription:
      "App development service focuses on building production-ready applications with secure APIs, structured data models, and clean UX flows.",
    howItWorks: [
      "Define product scope and user flows",
      "Plan architecture and integrations",
      "Develop and test feature modules",
      "Deploy with monitoring and support",
    ],
    technologies: ["React", "Node.js", "Express", "MongoDB", "Firebase", "AWS"],
    exampleProjects: [
      {
        name: "Operations Dashboard",
        result: "Reduced manual reporting time by 60%",
        stack: "React, Node.js, MongoDB",
      },
      {
        name: "Internal Task Platform",
        result: "Automated approvals and notifications",
        stack: "React, Firebase",
      },
    ],
    packages: [
      {
        tier: "Basic",
        price: 499,
        deliveryDays: 10,
        features: ["MVP modules", "Auth setup", "Core API integration"],
      },
      {
        tier: "Standard",
        price: 999,
        deliveryDays: 18,
        features: ["Role-based dashboards", "Data workflows", "Audit and testing"],
      },
      {
        tier: "Premium",
        price: 1799,
        deliveryDays: 28,
        features: ["Advanced architecture", "Observability", "Deployment and scaling guidance"],
      },
    ],
    image: cloudComputeImage,
  },
  {
    id: "freelance-services",
    title: "Freelance Services",
    shortDescription: "Flexible engagement for quick fixes, sprint delivery, and technical consulting.",
    heroDescription:
      "Freelance services are best for founders and teams needing rapid execution, reliable communication, and practical implementation support.",
    howItWorks: [
      "Identify immediate goals and blockers",
      "Plan sprint-based execution",
      "Deliver milestone updates",
      "Provide handoff and post-delivery support",
    ],
    technologies: ["React", "JavaScript", "TypeScript", "Cloud Deployment", "CI/CD", "Testing"],
    exampleProjects: [
      {
        name: "E-commerce Feature Sprint",
        result: "Delivered checkout optimization in 5 days",
        stack: "React, API integration",
      },
      {
        name: "Cloud Migration Support",
        result: "Shifted deployment workflow with zero downtime",
        stack: "Docker, AWS, CI/CD",
      },
    ],
    packages: [
      {
        tier: "Basic",
        price: 149,
        deliveryDays: 3,
        features: ["Small task fix", "Code cleanup", "Quick handoff"],
      },
      {
        tier: "Standard",
        price: 349,
        deliveryDays: 7,
        features: ["Medium-scope sprint", "Documentation", "1 week support"],
      },
      {
        tier: "Premium",
        price: 699,
        deliveryDays: 12,
        features: ["End-to-end freelance delivery", "Priority support", "Deployment assistance"],
      },
    ],
    image: freelanceImage,
  },
];

const deadlineMultipliers: Record<DeadlineMode, { label: string; factor: number }> = {
  flexible: { label: "Flexible (+0%)", factor: 1 },
  standard: { label: "Standard (+12%)", factor: 1.12 },
  rush: { label: "Rush (+25%)", factor: 1.25 },
};

const packageProgress: Record<PackageTier, number> = {
  Basic: 30,
  Standard: 55,
  Premium: 75,
};

const Services = () => {
  const navigate = useNavigate();
  const { addItem } = useCart();
  const { isAuthenticated } = useUser();

  const [audience, setAudience] = useState<Audience>("business");
  const [selectedCategoryId, setSelectedCategoryId] = useState<BusinessCategoryId>("web-development");
  const [selectedPackageTier, setSelectedPackageTier] = useState<PackageTier>("Standard");
  const [deadlineMode, setDeadlineMode] = useState<DeadlineMode>("standard");
  const [preferredTechStack, setPreferredTechStack] = useState("React + TypeScript");

  const selectedCategory = useMemo(
    () => businessCategories.find((item) => item.id === selectedCategoryId) ?? businessCategories[0],
    [selectedCategoryId]
  );

  const selectedPackage = useMemo(
    () => selectedCategory.packages.find((pkg) => pkg.tier === selectedPackageTier) ?? selectedCategory.packages[0],
    [selectedCategory, selectedPackageTier]
  );

  const estimatedTotal = useMemo(() => {
    const withDeadline = Math.round(selectedPackage.price * deadlineMultipliers[deadlineMode].factor);
    const stackCost = preferredTechStack.includes("Next") || preferredTechStack.includes("MERN") ? 140 : 0;
    return withDeadline + stackCost;
  }, [selectedPackage.price, deadlineMode, preferredTechStack]);

  const progressStages = [
    { label: "Discovery", status: "Done" },
    { label: "Design", status: "In Progress" },
    { label: "Development", status: "Planned" },
    { label: "QA + Review", status: "Planned" },
    { label: "Deployment", status: "Pending" },
  ];

  const handleAddToCart = () => {
    const item: CartItem = {
      id: `service-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
      audience: "business",
      serviceCategory: selectedCategory.title,
      packageName: selectedPackage.tier,
      basePrice: selectedPackage.price,
      totalPrice: estimatedTotal,
      deliveryTime: `${selectedPackage.deliveryDays} days`,
      features: selectedPackage.features,
      configuration: {
        hostingRequired: false,
        domainRequired: false,
        preferredTechStack,
        databaseRequirement: "none",
        deploymentRequired: true,
      },
      title: `${selectedCategory.title} - ${selectedPackage.tier}`,
      description: `Estimated total: $${estimatedTotal}`,
      notes: `${deadlineMultipliers[deadlineMode].label}`,
    };

    if (!isAuthenticated) {
      navigate(`/auth?redirect=/cart&pendingCartItem=${encodeURIComponent(JSON.stringify(item))}`);
      return;
    }

    addItem(item);
    navigate("/cart");
  };

  return (
    <section className="min-h-screen pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="text-center mb-10"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-3">
            Service <span className="google-color-cycle">Configurator</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Configure the right package, estimate cost, and plan execution with a clean business-first workflow.
          </p>
        </motion.div>

        <div className="mb-8 flex justify-center">
          <div className="relative inline-flex rounded-full border border-gray-300 dark:border-gray-700 bg-white/70 dark:bg-gray-900/70 p-1.5">
            <motion.div
              layout
              transition={{ type: "spring", stiffness: 380, damping: 30 }}
              className={`absolute top-1.5 bottom-1.5 w-[calc(50%-6px)] rounded-full bg-black dark:bg-white ${
                audience === "business" ? "left-1.5" : "left-[calc(50%+4.5px)]"
              }`}
            />
            <button
              onClick={() => setAudience("business")}
              className={`relative z-10 px-6 md:px-8 py-2.5 rounded-full text-sm font-semibold transition ${
                audience === "business" ? "text-white dark:text-black" : "text-gray-600 dark:text-gray-300"
              }`}
            >
              Business
            </button>
            <button
              onClick={() => setAudience("student")}
              className={`relative z-10 px-6 md:px-8 py-2.5 rounded-full text-sm font-semibold transition ${
                audience === "student" ? "text-white dark:text-black" : "text-gray-600 dark:text-gray-300"
              }`}
            >
              Student
            </button>
          </div>
        </div>

        {audience === "business" ? (
          <div className="space-y-8">
            <div className="rounded-3xl border border-gray-200 dark:border-gray-800 bg-gradient-to-r from-white via-gray-50 to-white dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950 p-6 md:p-8 shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-6 items-center">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-3">Business Services: What and How It Works</h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    This track is designed for founders, startups, and teams who need structured execution. You select a category, pick a package, configure project constraints, and get a clear estimated cost before checkout.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                    <div className="rounded-2xl border border-gray-200 dark:border-gray-700 p-3">
                      <p className="font-semibold mb-1">How it starts</p>
                      <p className="text-gray-600 dark:text-gray-400">Requirement call and clear milestone map.</p>
                    </div>
                    <div className="rounded-2xl border border-gray-200 dark:border-gray-700 p-3">
                      <p className="font-semibold mb-1">How it delivers</p>
                      <p className="text-gray-600 dark:text-gray-400">Sprint-based execution with review checkpoints.</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 bg-white dark:bg-neutral-950">
                  <img src={selectedCategory.image} alt={selectedCategory.title} className="w-full h-56 object-cover" />
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-neutral-950 p-6 md:p-8 shadow-sm">
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-xl md:text-2xl font-bold">Explore Category</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Select one service to continue</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {businessCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategoryId(category.id)}
                    className={`text-left rounded-2xl border p-5 transition ${
                      selectedCategory.id === category.id
                        ? "border-orange-500 bg-orange-50/70 dark:bg-orange-950/20"
                        : "border-gray-200 dark:border-gray-700 hover:border-orange-300"
                    }`}
                  >
                    <h4 className="font-semibold text-lg mb-2">{category.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{category.shortDescription}</p>
                    <span className="inline-flex rounded-full px-3 py-1 text-xs border border-gray-300 dark:border-gray-600">
                      Select Further
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-[1.35fr_0.95fr] gap-6">
              <div className="space-y-6">
                <div className="rounded-3xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-neutral-950 p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <FaLaptopCode className="text-orange-500" />
                    <h3 className="text-xl font-bold">1. Service Overview</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{selectedCategory.heroDescription}</p>
                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    {selectedCategory.howItWorks.map((item) => (
                      <li key={item}>- {item}</li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-3xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-neutral-950 p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <FaCode className="text-orange-500" />
                    <h3 className="text-xl font-bold">2. Technologies Used</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {selectedCategory.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full px-3 py-1.5 text-sm border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-neutral-900"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="rounded-3xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-neutral-950 p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <FaRocket className="text-orange-500" />
                    <h3 className="text-xl font-bold">3. Example Projects</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedCategory.exampleProjects.map((project) => (
                      <div key={project.name} className="rounded-2xl border border-gray-200 dark:border-gray-700 p-4">
                        <p className="font-semibold mb-1">{project.name}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{project.result}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-500">Stack: {project.stack}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-3xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-neutral-950 p-6">
                  <h3 className="text-xl font-bold mb-4">4. Packages</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {selectedCategory.packages.map((pkg) => (
                      <article
                        key={pkg.tier}
                        className={`rounded-2xl border p-4 ${
                          selectedPackage.tier === pkg.tier
                            ? "border-black dark:border-white shadow-md"
                            : "border-gray-200 dark:border-gray-700"
                        }`}
                      >
                        <p className="text-sm uppercase tracking-wide text-orange-500 font-semibold">{pkg.tier}</p>
                        <p className="text-3xl font-bold mt-2 mb-1">${pkg.price}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{pkg.deliveryDays} days delivery</p>
                        <ul className="space-y-1.5 text-sm text-gray-700 dark:text-gray-300 mb-4">
                          {pkg.features.map((feature) => (
                            <li key={feature}>- {feature}</li>
                          ))}
                        </ul>
                        <button
                          onClick={() => setSelectedPackageTier(pkg.tier)}
                          className="w-full rounded-full border border-gray-300 dark:border-gray-600 px-3 py-2 text-sm font-semibold hover:border-black dark:hover:border-white transition"
                        >
                          {selectedPackage.tier === pkg.tier ? "Selected" : "Choose"}
                        </button>
                      </article>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="rounded-3xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-neutral-950 p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <FaDatabase className="text-orange-500" />
                    <h3 className="text-xl font-bold">Price Estimator</h3>
                  </div>

                  <div className="space-y-4 text-sm">
                    <div>
                      <label className="block mb-1.5 font-medium">Project Deadline</label>
                      <select
                        value={deadlineMode}
                        onChange={(e) => setDeadlineMode(e.target.value as DeadlineMode)}
                        className="w-full rounded-xl border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2.5 outline-none"
                      >
                        {Object.entries(deadlineMultipliers).map(([value, meta]) => (
                          <option key={value} value={value}>
                            {meta.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block mb-1.5 font-medium">Preferred Tech Stack</label>
                      <select
                        value={preferredTechStack}
                        onChange={(e) => setPreferredTechStack(e.target.value)}
                        className="w-full rounded-xl border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2.5 outline-none"
                      >
                        {[
                          "React + TypeScript",
                          "Next.js + Node.js",
                          "MERN Stack",
                          "React + Firebase",
                          "Custom Stack (Discuss)",
                        ].map((stack) => (
                          <option key={stack} value={stack}>
                            {stack}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="mt-5 rounded-2xl bg-gray-50 dark:bg-neutral-900 border border-gray-200 dark:border-gray-700 p-4">
                    <p className="text-sm text-gray-500 dark:text-gray-400">Selected Package</p>
                    <p className="font-semibold">{selectedCategory.title} - {selectedPackage.tier}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Base Price: ${selectedPackage.price}</p>
                    <p className="text-2xl font-bold mt-3">Estimated Total: ${estimatedTotal}</p>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-3">
                    <button
                      onClick={handleAddToCart}
                      className="rounded-full px-5 py-2.5 font-semibold bg-black text-white border-2 border-black hover:bg-white hover:text-black dark:bg-white dark:text-black dark:border-white dark:hover:bg-black dark:hover:text-white transition"
                    >
                      Add to Cart
                    </button>
                    <button
                      onClick={() => navigate("/contact")}
                      className="rounded-full px-5 py-2.5 font-semibold border border-gray-300 dark:border-gray-600"
                    >
                      Enquiry
                    </button>
                  </div>
                </div>

                <div className="rounded-3xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-neutral-950 p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <FaChartLine className="text-orange-500" />
                    <h3 className="text-xl font-bold">Project Tracking Dashboard</h3>
                  </div>

                  <div className="mb-4">
                    <div className="h-2.5 rounded-full bg-gray-100 dark:bg-neutral-800 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-orange-400 to-pink-500"
                        style={{ width: `${packageProgress[selectedPackage.tier]}%` }}
                      />
                    </div>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                      Expected progress visibility for {selectedPackage.tier} package: {packageProgress[selectedPackage.tier]}%
                    </p>
                  </div>

                  <div className="space-y-2.5 text-sm">
                    {progressStages.map((stage) => (
                      <div key={stage.label} className="rounded-xl border border-gray-200 dark:border-gray-700 p-3 flex items-center justify-between">
                        <span className="font-medium">{stage.label}</span>
                        <span className="text-xs rounded-full px-2.5 py-1 border border-gray-300 dark:border-gray-600">{stage.status}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-3xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-neutral-950 p-8 md:p-10"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Student Track (Next)</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4 max-w-3xl">
              Student mode will focus on collaborative learning where we build and deploy projects together with mentorship and lower cost. I will implement this flow next after business track sign-off.
            </p>
            <div className="rounded-2xl border border-sky-200 dark:border-sky-700 bg-sky-50 dark:bg-sky-950/20 p-4 text-sm text-gray-700 dark:text-gray-300 inline-flex items-center gap-2">
              <FaServer className="text-sky-500" />
              Current priority completed: Business configurator UX.
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Services;
