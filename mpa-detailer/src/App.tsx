import Navbar from "./components/Navbar.tsx";
import Hero from "./components/Hero.tsx";
import About from "./components/About.tsx";
import Gallery from "./components/Gallery.tsx";
import Services from "./components/Services.tsx";
import Projects from "./components/Projects.tsx";
import Contact from "./components/Contact.tsx";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Gallery />
      <Services />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
