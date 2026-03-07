import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useUser } from "../context/UserContext";

const Cart = () => {
  const navigate = useNavigate();
  const { items, removeItem, clearCart } = useCart();
  const { isAuthenticated } = useUser();

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
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6">My Cart</h1>

        {items.length === 0 ? (
          <div className="rounded-2xl border border-gray-200 dark:border-gray-800 p-6 text-gray-600 dark:text-gray-400">
            Your cart is empty.
          </div>
        ) : (
          <div className="space-y-4">
            {items.map((item) => (
              <div key={item.id} className="rounded-2xl border border-gray-200 dark:border-gray-800 p-4 bg-white dark:bg-neutral-950">
                <h2 className="font-semibold">{item.title}</h2>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{item.description}</p>
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-sm text-red-500"
                >
                  Remove
                </button>
              </div>
            ))}

            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => navigate("/contact")}
                className="rounded-full px-5 py-2.5 bg-black text-white dark:bg-white dark:text-black"
              >
                Proceed (Contact for quote/payment)
              </button>
              <button
                onClick={clearCart}
                className="rounded-full px-5 py-2.5 border border-gray-300 dark:border-gray-700"
              >
                Clear Cart
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Cart;
