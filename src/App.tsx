import { motion } from "framer-motion";
import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/Projects";

const App = () => {
    return (
        <div className="bg-gradient-to-r from-pink-200 to-pink-300 min-h-screen p-2">
            <motion.div 
                className="bg-red-50 min-h-screen"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <Navbar />
                <Hero />
                <Projects />
                <About />
                <Footer />
            </motion.div>
        </div>
    );
}

export default App;
