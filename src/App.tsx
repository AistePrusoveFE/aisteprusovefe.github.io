import { motion } from "framer-motion";
import About from "./components/About";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import DividerHorizontal from "./ui/DividerHorizontal";

const App = () => {
    return (
        <div className="bg-gradient-to-r from-pink-200 to-pink-400 min-h-screen p-2">
            <motion.div
                className="bg-red-50 text-zinc-700"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >

                <div className="max-w-[550px] md:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg 2xl:max-w-screen-xl mx-auto">
                    <div className="h-screen lg:h-auto mb-20 lg:mb-40">
                        <Navbar />
                        <Hero />
                    </div>
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
