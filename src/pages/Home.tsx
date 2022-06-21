import { motion } from "framer-motion"
import About from "../components/About"
import Blog from "../components/Blog"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import Projects from "../components/Projects"
import BtnIcon from "../ui/BtnIcon"
import { BsFillArrowUpCircleFill } from 'react-icons/bs'

const Home = () => {
    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    return (
        <>
            <div className="bg-gradient-to-r from-pink-400 to-pink-800 min-h-screen p-2">
                <div className="w-full bg-zinc-900">
                    <Navbar />
                </div>
                <motion.div
                    className="bg-red-50 dark:bg-zinc-900 transition-colors text-zinc-700"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="max-w-[550px] md:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg 2xl:max-w-screen-xl mx-auto">

                        <Hero />
                        <About />
                        <Projects />
                        <Blog />
                        <div className="text-center">
                            <BtnIcon onClick={goToTop} icon={<BsFillArrowUpCircleFill />} className="text-2xl" />
                        </div>
                        <Footer />
                    </div>
                </motion.div>
            </div>
        </>

    )
}

export default Home