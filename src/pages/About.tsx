const About = () => {
  return (
    <section className="pt-28 pb-16">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <p className="text-sm uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">
          About Me
        </p>
        <h1 className="mt-3 text-4xl md:text-5xl font-bold text-black dark:text-white">
          Building reliable web products with clean engineering.
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600 dark:text-gray-300">
          I am Mahipal, a full-stack developer focused on modern web apps,
          cloud-native deployments, and performance-first systems. I work on
          projects end-to-end from UI to API and deployment pipelines.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="rounded-2xl border border-gray-200 dark:border-gray-800 p-5 bg-white/70 dark:bg-gray-900/50">
            <p className="text-3xl font-bold text-black dark:text-white">3+</p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Years Experience</p>
          </div>
          <div className="rounded-2xl border border-gray-200 dark:border-gray-800 p-5 bg-white/70 dark:bg-gray-900/50">
            <p className="text-3xl font-bold text-black dark:text-white">30+</p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Projects Delivered</p>
          </div>
          <div className="rounded-2xl border border-gray-200 dark:border-gray-800 p-5 bg-white/70 dark:bg-gray-900/50">
            <p className="text-3xl font-bold text-black dark:text-white">10+</p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Clients Supported</p>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-gray-200 dark:border-gray-800 p-6 bg-white/70 dark:bg-gray-900/50">
            <h2 className="text-xl font-semibold text-black dark:text-white">Core Strengths</h2>
            <ul className="mt-4 space-y-2 text-gray-600 dark:text-gray-300">
              <li>Full-stack app architecture</li>
              <li>React + TypeScript frontend development</li>
              <li>Node.js API design and integration</li>
              <li>AWS/GCP deployment and CI/CD</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-gray-200 dark:border-gray-800 p-6 bg-white/70 dark:bg-gray-900/50">
            <h2 className="text-xl font-semibold text-black dark:text-white">Work Style</h2>
            <ul className="mt-4 space-y-2 text-gray-600 dark:text-gray-300">
              <li>Clear communication and transparent updates</li>
              <li>Fast iteration with quality checks</li>
              <li>Maintainable and scalable code</li>
              <li>Focus on business outcomes, not just features</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
