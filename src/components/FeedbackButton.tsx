import { MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";

interface FeedbackButtonProps {
  onClick: () => void;
}

const FeedbackButton = ({ onClick }: FeedbackButtonProps) => {
  const [showIntro, setShowIntro] = useState(true);

  // Show tooltip once for 1.5s
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed right-6 bottom-8 z-50 group">
      
      {/* ICON BUTTON */}
      <button
        onClick={onClick}
        className="
          w-12 h-12
          flex items-center justify-center
          rounded-full
          border border-gray-600 dark:border-gray-400
          text-xl
          transition-all duration-300
          hover:scale-110 hover:-translate-y-1
          hover:bg-black hover:text-white
          dark:hover:bg-white dark:hover:text-black
        "
      >
        <MessageCircle size={20} />
      </button>

      {/* TOOLTIP */}
      <span
        className={`
          absolute right-16 top-1/2 -translate-y-1/2
          px-3 py-1 text-xs rounded-md
          bg-black text-white
          dark:bg-white dark:text-black
          whitespace-nowrap
          pointer-events-none
          transition-all duration-300

          ${
            showIntro
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
          }
        `}
      >
        Share Feedback
      </span>
    </div>
  );
};

export default FeedbackButton;
