import { useState, useEffect, useRef } from "react";
import { NavLink, Link } from "react-router-dom";
import { FiMenu, FiMoon, FiSun } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  const lastScrollY = useRef<number>(0);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const { theme, toggleTheme } = useTheme();

  /* ================= AUTO HIDE ON SCROLL ================= */
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ================= CLOSE ON OUTSIDE CLICK ================= */
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target as Node)
      ) {
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

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <nav
        className={`
          fixed top-0 left-0 w-full z-50
          transition-transform duration-300
          ${hidden ? "-translate-y-full" : "translate-y-0"}
        `}
      >
        <div className="flex items-center justify-between px-8 py-5 text-black dark:text-white">
          
          {/* ================= LEFT: NAME ================= */}
          <Link to="/">
            <h1 className="text-lg tracking-widest uppercase font-semibold">
              Mahipal
            </h1>
          </Link>

          {/* ================= CENTER: DESKTOP GLASS NAV ================= */}
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
                    `text-sm font-medium transition-colors duration-300 
                    ${
                      isActive
                        ? "text-orange-500"
                        : "hover:text-orange-500"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}

              {/* ===== THEME TOGGLE INSIDE GLASS NAV ===== */}
              <button
                onClick={toggleTheme}
                className="ml-2 text-lg hover:text-orange-500 transition"
              >
                {theme === "dark" ? <FiSun /> : <FiMoon />}
              </button>
            </div>
          </div>

          {/* ================= RIGHT ACTIONS (MOBILE ONLY) ================= */}
          <div
            className="relative flex items-center gap-6 text-xl"
            ref={menuRef}
          >
            {/* MOBILE THEME TOGGLE (unchanged for mobile) */}
            <button
              className="md:hidden"
              onClick={toggleTheme}
            >
              {theme === "dark" ? <FiSun /> : <FiMoon />}
            </button>

            {/* MOBILE MENU BUTTON (UNCHANGED) */}
            <button
              className="md:hidden"
              onClick={() => setOpen((prev) => !prev)}
            >
              <FiMenu />
            </button>

            {/* ================= MOBILE DROPDOWN (UNCHANGED) ================= */}
            {open && (
              <div
                onClick={(e) => e.stopPropagation()}
                className="
                  absolute right-0 top-12 z-50
                  w-56
                  rounded-xl
                  border border-gray-200 dark:border-gray-700
                  bg-white dark:bg-black
                  shadow-xl
                "
              >
                <ul className="flex flex-col py-2 text-sm">
                  {navItems.map((item) => (
                    <NavLink
                      key={item.name}
                      to={item.path}
                      onClick={() => setOpen(false)}
                      className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </ul>

                {/* MOBILE SOCIAL ICONS */}
                <div className="md:hidden border-t border-gray-200 dark:border-gray-700 px-4 py-3 flex gap-4 text-lg">
                  <a
                    href="https://github.com/guglothmahipal"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href="https://linkedin.com/in/guglothmahipal"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    href="https://x.com/mahipal7g"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaTwitter />
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
