const Products = () => {
  const products = [
    {
      name: "LocalHunt",
      type: "Web Application",
      summary:
        "LocalHunt helps users discover nearby vendor shops in new places, place orders online, and receive delivery quickly.",
      features: [
        "Nearby vendor discovery",
        "Order placement and checkout",
        "Vendor-customer connection",
        "Delivery workflow integration",
      ],
    },
    {
      name: "Automated Interview Question Generator",
      type: "Web Application",
      summary:
        "Generates role-based interview questions, simulates mock interviews, and helps candidates practice with structured feedback.",
      features: [
        "Role-based question generation",
        "Mock interview flow",
        "Topic/skill coverage",
        "Practice-ready interview sessions",
      ],
    },
    {
      name: "Kishan Mitra",
      type: "Web + Mobile Application",
      summary:
        "Connects farmers with workers. Farmers post work requirements, registered workers apply, and both sides collaborate efficiently.",
      features: [
        "Farmer work postings",
        "Worker registration and matching",
        "Crop suggestions",
        "Pesticide/fertilizer guidance",
      ],
    },
  ];

  return (
    <section className="pt-28 pb-16">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <p className="text-sm uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">
          Enterprise Products
        </p>
        <h1 className="mt-3 text-4xl md:text-5xl font-bold text-black dark:text-white">
          Products
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600 dark:text-gray-300">
          Product-focused solutions built to solve real-world operational problems across local commerce, hiring, and agriculture.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-5">
          {products.map((product) => (
            <article
              key={product.name}
              className="rounded-2xl border border-gray-200 dark:border-gray-800 p-6 bg-white/70 dark:bg-gray-900/50"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h2 className="text-2xl font-semibold text-black dark:text-white">
                  {product.name}
                </h2>
                <span className="text-xs px-2.5 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300">
                  {product.type}
                </span>
              </div>

              <p className="mt-4 text-gray-600 dark:text-gray-300 leading-7">
                {product.summary}
              </p>

              <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-2">
                {product.features.map((feature) => (
                  <div
                    key={feature}
                    className="rounded-xl border border-gray-200 dark:border-gray-700 px-3 py-2 text-sm text-gray-700 dark:text-gray-300"
                  >
                    {feature}
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
