import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <HomePage />
      <AboutPage />
      <ProjectsPage />
      <ContactPage />
    </>
  );
}

export default App;
