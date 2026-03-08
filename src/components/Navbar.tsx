import { useState, useEffect, useRef, useMemo } from "react";
import { NavLink, Link, useNavigate, useLocation } from "react-router-dom";
import { FiHome, FiMenu, FiMoon, FiSun, FiUser, FiShoppingCart, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";
import { useUser } from "../context/UserContext";
import { useCart } from "../context/CartContext";

const routeLabels: Record<string, string> = {
  services: "Services",
  products: "Products",
  projects: "Projects",
  about: "About",
  contact: "Contact",
  "privacy-policy": "Privacy Policy",
  auth: "Auth",
  profile: "Profile",
  cart: "Cart",
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  const { theme, toggleTheme } = useTheme();
  const { isAuthenticated } = useUser();
  const { items } = useCart();

  const isHome = location.pathname === "/";

  const breadcrumbs = useMemo(() => {
    const segments = location.pathname.split("/").filter(Boolean);

    return segments.map((segment, index) => {
      const href = `/${segments.slice(0, index + 1).join("/")}`;
      return {
        href,
        label: routeLabels[segment] || segment.replace(/-/g, " "),
      };
    });
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Products", path: "/products" },
    { name: "Projects", path: "/projects" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  if (!isHome) {
    return (
      <nav className="fixed top-0 left-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-black dark:text-white">
          <div className="flex items-center justify-between gap-3">
            <Link to="/" className="text-lg tracking-widest uppercase font-semibold">
              Mahipal
            </Link>

            <div className="flex items-center gap-2 sm:gap-3 text-lg">
              <button className="p-1" onClick={toggleTheme} aria-label="Toggle theme">
                {theme === "dark" ? <FiSun /> : <FiMoon />}
              </button>

              <button
                className="relative p-1"
                onClick={() => navigate(isAuthenticated ? "/profile" : "/auth?redirect=/profile")}
                aria-label="Profile"
              >
                <FiUser />
              </button>

              {isAuthenticated && (
                <button className="relative p-1" onClick={() => navigate("/cart")} aria-label="Cart">
                  <FiShoppingCart />
                  {items.length > 0 && (
                    <span className="absolute -top-1.5 -right-1.5 h-4 min-w-4 px-1 rounded-full bg-orange-500 text-[10px] leading-4 text-white text-center">
                      {items.length}
                    </span>
                  )}
                </button>
              )}
            </div>
          </div>

          <div className="mt-2 flex items-center gap-2 text-base sm:text-[1.05rem]">
            <Link to="/" aria-label="Home" className="inline-flex items-center hover:text-orange-500 transition">
              <FiHome className="text-sm" />
            </Link>

            {breadcrumbs.map((crumb, index) => (
              <div key={crumb.href} className="flex items-center gap-2 min-w-0">
                <span className="text-gray-400">/</span>
                {index === breadcrumbs.length - 1 ? (
                  <span className="font-medium whitespace-nowrap truncate max-w-[10rem] sm:max-w-none">
                    {crumb.label}
                  </span>
                ) : (
                  <Link to={crumb.href} className="text-gray-600 dark:text-gray-300 hover:text-orange-500 transition">
                    {crumb.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div ref={menuRef} className="relative flex items-center px-4 sm:px-6 lg:px-8 py-4 md:py-5 text-black dark:text-white">
        <div className="flex items-center gap-3">
          <button
            className="md:hidden p-1 text-xl"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {open ? <FiX /> : <FiMenu />}
          </button>

          <Link to="/">
            <h1 className="text-lg tracking-widest uppercase font-semibold">Mahipal</h1>
          </Link>
        </div>

        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2">
          <div
            className="
              flex items-center gap-8 px-8 py-3
              rounded-full
              backdrop-blur-md
              bg-white/30 dark:bg-white/10
              border border-gray-300 dark:border-gray-600
              shadow-lg
            "
          >
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors duration-300 ${
                    isActive ? "text-orange-500" : "hover:text-orange-500"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>

        <div className="ml-auto flex items-center gap-3 md:gap-4 text-xl">
          <button className="p-1" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === "dark" ? <FiSun /> : <FiMoon />}
          </button>

          <button
            className="relative p-1"
            onClick={() => navigate(isAuthenticated ? "/profile" : "/auth?redirect=/profile")}
            aria-label="Profile"
          >
            <FiUser />
          </button>

          {isAuthenticated && (
            <button className="relative p-1" onClick={() => navigate("/cart")} aria-label="Cart">
              <FiShoppingCart />
              {items.length > 0 && (
                <span className="absolute -top-1.5 -right-1.5 h-4 min-w-4 px-1 rounded-full bg-orange-500 text-[10px] leading-4 text-white text-center">
                  {items.length}
                </span>
              )}
            </button>
          )}
        </div>

        {open && (
          <div
            className="
              md:hidden absolute left-4 right-4 top-[calc(100%+0.5rem)] z-50
              rounded-2xl border border-gray-200 dark:border-gray-700
              bg-white/95 dark:bg-black/95 backdrop-blur-md shadow-2xl
            "
          >
            <ul className="flex flex-col py-2 text-sm">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `mx-2 rounded-lg px-3 py-2.5 transition ${
                      isActive
                        ? "bg-orange-50 dark:bg-orange-900/30 text-orange-500"
                        : "hover:bg-gray-100 dark:hover:bg-gray-800"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </ul>

            <div className="border-t border-gray-200 dark:border-gray-700 px-4 py-3 flex gap-4 text-lg">
              <a href="https://github.com/guglothmahipal" target="_blank" rel="noreferrer">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/guglothmahipal" target="_blank" rel="noreferrer">
                <FaLinkedin />
              </a>
              <a href="https://x.com/mahipal7g" target="_blank" rel="noreferrer">
                <FaTwitter />
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
