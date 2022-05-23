import { motion } from "framer-motion";
import About from "./components/About";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

const App = () => {
    return (
        <div className="bg-gradient-to-r from-pink-200 to-pink-400 min-h-screen p-2">
            <motion.div 
                className="bg-red-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <Navbar />
                <div className="max-w-[550px] md:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg 2xl:max-w-screen-xl mx-auto">
                    <Hero /> 
                    <About />
                    <Projects />
                    <Blog />
                    <Footer />
                </div>
            </motion.div>
        </div>
    );
}

export default App;
