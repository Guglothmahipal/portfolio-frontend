import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type ServiceConfiguration = {
  hostingRequired: boolean;
  domainRequired: boolean;
  preferredTechStack: string;
  databaseRequirement: "none" | "sql" | "nosql" | "both";
  deploymentRequired: boolean;
};

export type CartItem = {
  id: string;
  audience: "business" | "student";
  serviceCategory: string;
  packageName: string;
  basePrice: number;
  totalPrice: number;
  deliveryTime: string;
  features: string[];
  configuration: ServiceConfiguration;
  notes?: string;
  title: string;
  description: string;
};

type CartContextValue = {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextValue | undefined>(undefined);

const STORAGE_KEY = "portfolio_cart";

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;

    try {
      setItems(JSON.parse(raw));
    } catch {
      localStorage.removeItem(STORAGE_KEY);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const addItem = (item: CartItem) => {
    setItems((prev) => [...prev, item]);
  };

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => setItems([]);

  const value = useMemo(() => ({ items, addItem, removeItem, clearCart }), [items]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used inside CartProvider");
  return context;
};
