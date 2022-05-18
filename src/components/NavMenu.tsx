import { RiMenu5Fill, RiCloseFill } from "react-icons/ri"
import { useState } from "react"
import useMediaQuery from "../hooks/useMediaQuery"
import { motion } from "framer-motion"

export default function NavMenu() {
    const [showMenu, setShowMenu] = useState(false)
    const isMedium = useMediaQuery('(min-width: 768px)')
  
    const showMenuHandler = () => {
      setShowMenu(!showMenu)
    }
    return (
        <div>
            <div className={isMedium ? 'hidden' : 'cursor-pointer p-2 hover:bg-red-200 rounded-full relative z-20'} onClick={showMenuHandler}>
                { showMenu && <RiCloseFill className="text-2xl text-white"/> }
                { !showMenu && <RiMenu5Fill className="text-2xl" /> }
            </div>
            <motion.div 
                initial={{ y: !showMenu ? "-100%" : 0 }}
                animate={{ y: showMenu ? 0 : "-100%" }}
                transition={{ duration: 0.6 }}
                className={`${isMedium ? 'hidden' : 'fixed inset-0 w-screen h-screen bg-black opacity-70 z-10'}`}>

            </motion.div>
        </div>
    )
}
