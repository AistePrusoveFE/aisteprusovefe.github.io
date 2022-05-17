import About from "./components/About";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <Navbar/>
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Footer />
    </>
  );
}

export default App;
