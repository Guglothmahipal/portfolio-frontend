import { motion, AnimatePresence } from "framer-motion";
import { FiX } from "react-icons/fi";
import { useEffect, useState } from "react";

interface FeedbackModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const FeedbackModal = ({ isOpen, onClose }: FeedbackModalProps) => {
  const [message, setMessage] = useState("");

  /* =========================
     🔒 SCROLL LOCK + ESC
  ========================== */
  useEffect(() => {
    if (!isOpen) return;

    // Save original overflow values
    const originalBodyOverflow = document.body.style.overflow;
    const originalHtmlOverflow = document.documentElement.style.overflow;

    // Lock scroll
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleEsc);

    return () => {
      // Restore scroll
      document.body.style.overflow = originalBodyOverflow;
      document.documentElement.style.overflow = originalHtmlOverflow;

      window.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen, onClose]);

  const handleSubmit = () => {
    if (!message.trim()) return;

    console.log("Feedback:", message);

    setMessage("");
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ y: 60, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 60, opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            className="
              relative z-10
              w-full max-w-md
              bg-white dark:bg-gray-900
              rounded-2xl
              shadow-2xl
              p-6
            "
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="
                absolute top-3 right-3
                p-2 rounded-full
                bg-gray-100 dark:bg-gray-800
                hover:scale-110
                transition
              "
            >
              <FiX />
            </button>

            {/* Title */}
            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              Submit Feedback
            </h2>

            {/* Textarea */}
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Share your feedback..."
              className="
                w-full h-28 p-3 rounded-lg border
                focus:outline-none focus:ring-2 focus:ring-indigo-500
                dark:bg-gray-800 dark:text-white
                dark:border-gray-700
                resize-none
              "
            />

            {/* Buttons */}
            <div className="flex justify-end gap-3 mt-4">
              <button
                onClick={onClose}
                className="
                  px-4 py-2 rounded-lg
                  bg-gray-200 dark:bg-gray-700
                  hover:scale-105
                  transition
                "
              >
                Cancel
              </button>

              <button
                onClick={handleSubmit}
                disabled={!message.trim()}
                className="
                  px-4 py-2 rounded-lg text-white
                  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
                  hover:scale-105
                  transition
                  disabled:opacity-50 disabled:cursor-not-allowed
                "
              >
                Submit
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FeedbackModal;
