import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import SocialSidebar from "./components/SocialSidebar";
import CustomCursor from "./components/CustomCursor";
import ChatSupport from "./components/ChatSupport";
import Resume from "./pages/Resume";




import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";


const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white transition-colors duration-300">
        <Navbar />
        <SocialSidebar />
        <CustomCursor />
        <ChatSupport />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />

        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
