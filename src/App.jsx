import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import Sidebar from "./components/Sidebar/Sidebar";
import LogoLoader from "./components/LogoLoader/LogoLoader";
import "./components/LogoLoader/logoloader.css";
import { useEffect, useState } from "react";

function App() {
  const [showIntro, setShowIntro] = useState(true);

  const timeout = () => {
    setShowIntro(false);
  };

  useEffect(() => {
    setTimeout(timeout, 8000);
  }, []);

  return (
    <>
      {showIntro ? (
        <>
          <LogoLoader />
        </>
      ) : (
        <>
          <Navbar />
          <Sidebar />
          <HomePage />
          <AboutPage />
          <ProjectsPage />
          {/* <ContactPage /> */}
        </>
      )}
    </>
  );
}

export default App;
