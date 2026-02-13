import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiMail } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const ChatSupport = () => {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);

  /* ================= CLOSE ON OUTSIDE CLICK ================= */
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
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

  return (
    <>
      {/* ================= SUPPORT DROPDOWN ================= */}
      <AnimatePresence>
        {open && (
          <motion.div
            ref={panelRef}
            initial={{ opacity: 0, y: 12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="
              fixed
              bottom-24 md:bottom-20
              right-6
              z-50
              w-[90vw] max-w-sm
              rounded-xl
              bg-white dark:bg-black
              border border-gray-200 dark:border-gray-800
              shadow-xl
            "
          >
            {/* ===== CARET / ARROW ===== */}
            <div
              className="
                absolute
                -bottom-2
                right-10
                w-4 h-4
                bg-white dark:bg-black
                border-r border-b
                border-gray-200 dark:border-gray-800
                rotate-45
              "
            />

            {/* HEADER */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-800">
              <h3 className="text-sm font-semibold">Connect with me</h3>
              <button onClick={() => setOpen(false)}>
                <FiX className="text-lg" />
              </button>
            </div>

            {/* BODY */}
            <div className="p-4">
              <p className="text-xs text-gray-600 dark:text-gray-400 mb-4">
                Hi 👋 I’m happy to connect. Choose an option below.
              </p>

              <div className="flex flex-col gap-2 text-sm">
                <a
                  href="mailto:guglothmahipal@gmail.com"
                  className="flex items-center gap-2 px-3 py-2 rounded-md border hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                >
                  <FiMail /> Email Me
                </a>

                <a
                  href="https://github.com/guglothmahipal"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-3 py-2 rounded-md border hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                >
                  <FaGithub /> GitHub
                </a>

                <a
                  href="https://linkedin.com/in/guglothmahipal"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-3 py-2 rounded-md border hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                >
                  <FaLinkedin /> LinkedIn
                </a>

                <button
                  className="
                    mt-2
                    px-3 py-2
                    rounded-md
                    bg-black text-white
                    dark:bg-white dark:text-black
                    transition
                  "
                >
                  🤝 Collaborate with me
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </>
  );
};

export default ChatSupport;
