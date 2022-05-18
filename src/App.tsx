import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="bg-gradient-to-r from-pink-200 to-pink-300 min-h-screen p-2">
      <div className="bg-red-50 min-h-screen p-2">
        <Navbar/>
        <Hero />
        <Projects />
        <About />
        <Footer />
      </div>
    </div>
  );
}

export default App;
