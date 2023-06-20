import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage";
import ContactPage from "./pages/ContactPage/ContactPage";

function App() {
  return (
    <>
      <Navbar />
      <HomePage />
      <AboutPage />
      <ProjectsPage />
      <ContactPage />
    </>
  );
}

export default App;
