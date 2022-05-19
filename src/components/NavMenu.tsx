import { RiMenu5Fill, RiCloseFill } from "react-icons/ri"
import { useState } from "react"
import useMediaQuery from "../hooks/useMediaQuery"
import { motion } from "framer-motion"
import Menu from "./Menu"

const NavMenu = () => {
    const [showMenu, setShowMenu] = useState(false)
    const isMedium = useMediaQuery('(min-width: 768px)')
  
    const showMenuHandler = () => {
      setShowMenu(!showMenu)
    }

    return (
        <>
            <div className={isMedium ? 'hidden' : 'cursor-pointer p-2 hover:bg-red-200 rounded-full relative z-20'} onClick={showMenuHandler}>
                { showMenu && <RiCloseFill className="text-2xl text-white"/> }
                { !showMenu && <RiMenu5Fill className="text-2xl" /> }
            </div>
            <motion.div 
                // initial={{ y: !showMenu ? "-150%" : 0 }}
                animate={{ y: showMenu ? 0 : "-150%" }}
                transition={{ duration: 0.6 }}
                className={`${isMedium ? 'hidden' : 'fixed inset-0 backdrop-blur-sm z-10'}`}>
                <Menu />
            </motion.div>
            {isMedium && <Menu />}
        </>
    )
}

export default NavMenu
