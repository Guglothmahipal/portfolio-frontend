import { useNavigate } from "react-router-dom";
import { FiArrowLeft, FiDownload } from "react-icons/fi";
import resumePdf from "../assets/Mahipal_ATSFriendly_Resume.pdf";

const Resume = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pt-24 px-6 bg-white dark:bg-black text-black dark:text-white">
      {/* ================= HEADER ================= */}
      <div className="max-w-6xl mx-auto flex items-center justify-between mb-6">
        {/* GO BACK */}
        <button
          onClick={() => navigate(-1)}
          className="
            flex items-center gap-2
            px-4 py-2
            rounded-full
            border border-gray-300 dark:border-gray-700
            hover:bg-black hover:text-white
            dark:hover:bg-white dark:hover:text-black
            transition
          "
        >
          <FiArrowLeft />
          Go Back
        </button>

        {/* DOWNLOAD */}
        <a
          href={resumePdf}
          download
          className="
            flex items-center gap-2
            px-4 py-2
            rounded-full
            bg-black text-white
            dark:bg-white dark:text-black
            hover:scale-105
            transition
          "
        >
          <FiDownload />
          Download Resume
        </a>
      </div>

      {/* ================= RESUME VIEWER ================= */}
      <div className="max-w-6xl mx-auto">
        <div className="w-full h-[80vh] border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden">
          <iframe
            src={resumePdf}
            title="Mahipal Resume"
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Resume;
