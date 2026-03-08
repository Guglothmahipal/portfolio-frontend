import { useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";
import { useCart, type CartItem } from "../context/CartContext";

const Auth = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useUser();
  const { addItem } = useCart();

  const [mode, setMode] = useState<"login" | "register">("login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const params = useMemo(() => new URLSearchParams(location.search), [location.search]);
  const redirectPath = params.get("redirect") || "/services";
  const pendingCartItemParam = params.get("pendingCartItem");
  const pendingService = params.get("service");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const finalName = (mode === "register" ? name : email.split("@")[0]).trim() || "User";
    login({ name: finalName, email: email.trim() });

    if (pendingCartItemParam) {
      try {
        const parsed = JSON.parse(pendingCartItemParam) as CartItem;
        addItem(parsed);
        navigate("/cart");
        return;
      } catch {
        navigate(redirectPath);
        return;
      }
    }

    if (pendingService) {
      const fallbackItem: CartItem = {
        id: `legacy-${Date.now()}`,
        audience: "business",
        serviceCategory: pendingService,
        packageName: "Basic",
        basePrice: 0,
        totalPrice: 0,
        deliveryTime: "TBD",
        features: ["Added from service selection"],
        configuration: {
          hostingRequired: false,
          domainRequired: false,
          preferredTechStack: "React + Node.js",
          databaseRequirement: "none",
          deploymentRequired: false,
        },
        title: pendingService,
        description: "Added from services page",
      };

      addItem(fallbackItem);
      navigate("/cart");
      return;
    }

    navigate(redirectPath);
  };

  return (
    <section className="min-h-screen pt-28 pb-16">
      <div className="max-w-md mx-auto px-4">
        <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-neutral-950 p-6 shadow-sm">
          <h1 className="text-2xl font-bold mb-2">{mode === "login" ? "Login" : "Register"}</h1>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
            Continue to explore services and manage your cart.
          </p>

          <form className="space-y-4" onSubmit={handleSubmit}>
            {mode === "register" && (
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Full name"
                required
                className="w-full rounded-xl border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2.5 text-sm outline-none"
              />
            )}

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
              className="w-full rounded-xl border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2.5 text-sm outline-none"
            />

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
              className="w-full rounded-xl border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2.5 text-sm outline-none"
            />

            <button className="w-full rounded-xl bg-black text-white dark:bg-white dark:text-black px-4 py-2.5 font-semibold">
              {mode === "login" ? "Login" : "Create Account"}
            </button>
          </form>

          <button
            onClick={() => setMode((prev) => (prev === "login" ? "register" : "login"))}
            className="mt-4 text-sm text-orange-500"
          >
            {mode === "login" ? "New user? Register" : "Have an account? Login"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Auth;
