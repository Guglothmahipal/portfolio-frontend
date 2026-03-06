const Projects = () => {
  const projectList = [
    {
      title: "Portfolio Platform",
      summary:
        "A responsive personal branding website with animated UI, lead forms, and optimized performance.",
      stack: ["React", "TypeScript", "Tailwind", "Vite"],
      status: "Live",
    },
    {
      title: "Cloud Deployment Dashboard",
      summary:
        "A deployment monitoring dashboard with service health widgets and environment-specific controls.",
      stack: ["React", "Node.js", "Express", "MongoDB"],
      status: "Client Project",
    },
    {
      title: "Freelance Service Portal",
      summary:
        "A service inquiry and project tracking portal for digital freelancing workflows and client communication.",
      stack: ["React", "REST API", "JWT", "Cloudflare Pages"],
      status: "In Progress",
    },
    {
      title: "CI/CD Starter Kit",
      summary:
        "A reusable CI/CD setup template with lint, test, build, and deploy stages for frontend apps.",
      stack: ["GitHub Actions", "Docker", "Nginx", "AWS"],
      status: "Template",
    },
  ];

  return (
    <section className="pt-28 pb-16">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <p className="text-sm uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">
          Selected Work
        </p>
        <h1 className="mt-3 text-4xl md:text-5xl font-bold text-black dark:text-white">
          Projects
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600 dark:text-gray-300">
          Real projects across web development, cloud deployment, and product-focused engineering.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
          {projectList.map((project) => (
            <article
              key={project.title}
              className="rounded-2xl border border-gray-200 dark:border-gray-800 p-6 bg-white/70 dark:bg-gray-900/50"
            >
              <div className="flex items-center justify-between gap-4">
                <h2 className="text-xl font-semibold text-black dark:text-white">
                  {project.title}
                </h2>
                <span className="text-xs px-2.5 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300">
                  {project.status}
                </span>
              </div>

              <p className="mt-3 text-gray-600 dark:text-gray-300 leading-7">
                {project.summary}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2.5 py-1 rounded-full border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
