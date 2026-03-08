import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useUser } from "../context/UserContext";

const Cart = () => {
  const navigate = useNavigate();
  const { items, removeItem, clearCart } = useCart();
  const { isAuthenticated } = useUser();
  const [projectBrief, setProjectBrief] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const grandTotal = useMemo(
    () => items.reduce((sum, item) => sum + (item.totalPrice || 0), 0),
    [items]
  );

  const handleSubmitRequest = () => {
    if (items.length === 0) return;
    setSubmitted(true);
    clearCart();
    setProjectBrief("");
  };

  if (!isAuthenticated) {
    return (
      <section className="min-h-screen pt-28 pb-16">
        <div className="max-w-md mx-auto px-4 text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-4">Please login to view your cart.</p>
          <button
            onClick={() => navigate("/auth?redirect=/cart")}
            className="rounded-full px-5 py-2.5 bg-black text-white dark:bg-white dark:text-black"
          >
            Login
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen pt-28 pb-16">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6">Service Cart</h1>

        {submitted && (
          <div className="mb-5 rounded-2xl border border-emerald-300 bg-emerald-50 dark:border-emerald-700 dark:bg-emerald-950/20 p-4 text-sm text-emerald-700 dark:text-emerald-300">
            Service request submitted successfully. I will reach out with execution details and final confirmation.
          </div>
        )}

        {items.length === 0 ? (
          <div className="rounded-2xl border border-gray-200 dark:border-gray-800 p-6 text-gray-600 dark:text-gray-400">
            Your cart is empty.
          </div>
        ) : (
          <div className="space-y-4">
            {items.map((item) => (
              <article
                key={item.id}
                className="rounded-2xl border border-gray-200 dark:border-gray-800 p-5 bg-white dark:bg-neutral-950"
              >
                <div className="flex flex-wrap justify-between gap-3 mb-3">
                  <div>
                    <h2 className="text-lg font-semibold">{item.serviceCategory}</h2>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {item.audience === "business" ? "Business" : "Student"} | {item.packageName} package
                    </p>
                  </div>
                  <p className="text-xl font-bold">${item.totalPrice}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm mb-4">
                  <div>
                    <p className="font-medium mb-1">Delivery</p>
                    <p className="text-gray-600 dark:text-gray-400">{item.deliveryTime}</p>
                  </div>
                  <div>
                    <p className="font-medium mb-1">Base Price</p>
                    <p className="text-gray-600 dark:text-gray-400">${item.basePrice}</p>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="font-medium mb-2">Included Features</p>
                  <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                    {item.features.map((feature) => (
                      <li key={`${item.id}-${feature}`}>- {feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4 rounded-xl border border-gray-200 dark:border-gray-700 p-3 text-sm">
                  <p className="font-medium mb-2">Configuration</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1 text-gray-700 dark:text-gray-300">
                    <p>Hosting: {item.configuration.hostingRequired ? "Yes" : "No"}</p>
                    <p>Domain: {item.configuration.domainRequired ? "Yes" : "No"}</p>
                    <p>Tech stack: {item.configuration.preferredTechStack}</p>
                    <p>Database: {item.configuration.databaseRequirement.toUpperCase()}</p>
                    <p>Deployment: {item.configuration.deploymentRequired ? "Yes" : "No"}</p>
                  </div>
                </div>

                <button onClick={() => removeItem(item.id)} className="text-sm text-red-500">
                  Remove
                </button>
              </article>
            ))}

            <div className="rounded-2xl border border-gray-200 dark:border-gray-800 p-5 bg-gray-50 dark:bg-neutral-900">
              <div className="flex justify-between items-center mb-4">
                <p className="font-semibold">Total Estimated Cost</p>
                <p className="text-2xl font-bold">${grandTotal}</p>
              </div>

              <label className="block text-sm font-medium mb-2">Project brief (optional)</label>
              <textarea
                value={projectBrief}
                onChange={(e) => setProjectBrief(e.target.value)}
                rows={4}
                placeholder="Share timeline, goals, and any additional preferences."
                className="w-full rounded-xl border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2.5 text-sm outline-none mb-4"
              />

              <div className="flex flex-wrap gap-3">
                <button
                  onClick={handleSubmitRequest}
                  className="rounded-full px-5 py-2.5 bg-black text-white dark:bg-white dark:text-black font-semibold"
                >
                  Submit Service Request
                </button>
                <button
                  onClick={clearCart}
                  className="rounded-full px-5 py-2.5 border border-gray-300 dark:border-gray-700"
                >
                  Clear Cart
                </button>
                <button
                  onClick={() => navigate("/contact")}
                  className="rounded-full px-5 py-2.5 border border-gray-300 dark:border-gray-700"
                >
                  Enquiry
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Cart;
