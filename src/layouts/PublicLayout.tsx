import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import SocialSidebar from "../components/SocialSidebar";
import Footer from "../components/Footer";
import CustomCursor from "../components/CustomCursor";
import ChatSupport from "../components/ChatSupport";

const PublicLayout = () => {
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
    </div>
  );
};

export default PublicLayout;
