import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  const [enabled, setEnabled] = useState(false);

  /* ================= ENABLE ONLY ON REAL MOUSE DEVICES ================= */
  useEffect(() => {
    const mediaQuery = window.matchMedia(
      "(hover: hover) and (pointer: fine)"
    );

    setEnabled(mediaQuery.matches);

    const handler = () => setEnabled(mediaQuery.matches);
    mediaQuery.addEventListener("change", handler);

    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  /* ================= CURSOR LOGIC ================= */
  useEffect(() => {
    if (!enabled) return;

    const moveCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setHovering(!!target.closest("a, button"));
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [enabled]);

  /* ================= HARD STOP ================= */
  if (!enabled) return null;

  return (
    <>
      {/* CENTER DOT */}
      <motion.div
        className="
          fixed top-0 left-0 z-[9999]
          pointer-events-none
          w-2 h-2 rounded-full
          bg-black dark:bg-white
        "
        animate={{
          x: position.x - 4,
          y: position.y - 4,
        }}
        transition={{ type: "spring", stiffness: 600, damping: 30 }}
      />

      {/* OUTER RING */}
      <motion.div
        className="
          fixed top-0 left-0 z-[9998]
          pointer-events-none
          rounded-full
          border border-black dark:border-white
        "
        animate={{
          x: position.x - (hovering ? 28 : 18),
          y: position.y - (hovering ? 28 : 18),
          width: hovering ? 56 : 36,
          height: hovering ? 56 : 36,
          opacity: hovering ? 0.5 : 0.25,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      />
    </>
  );
};

export default CustomCursor;
