import { Outlet } from "react-router-dom";
import { useState } from "react";

import Navbar from "../components/Navbar";
import SocialSidebar from "../components/SocialSidebar";
import Footer from "../components/Footer";
import CustomCursor from "../components/CustomCursor";
import ChatSupport from "../components/ChatSupport";
import FeedbackButton from "../components/FeedbackButton";
import FeedbackModal from "../components/FeedbackModal";

const PublicLayout = () => {
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
      <Navbar />
      <SocialSidebar />
      <CustomCursor />
      <ChatSupport />

      <main className="flex-grow">
        <Outlet />
      </main>

      <Footer />

      {/* ✅ Feedback Sidebar Icon (Right Side) */}
      <FeedbackButton onClick={() => setIsFeedbackOpen(true)} />

      {/* ✅ Modal */}
      <FeedbackModal
        isOpen={isFeedbackOpen}
        onClose={() => setIsFeedbackOpen(false)}
      />
    </div>
  );
};

export default PublicLayout;
