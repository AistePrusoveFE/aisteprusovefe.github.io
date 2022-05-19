import { RiMenu5Fill, RiCloseFill } from "react-icons/ri"
import { useState } from "react"
import useMediaQuery from "../../hooks/useMediaQuery"
import { motion } from "framer-motion"
import Menu from "./Menu"

const NavMenu = () => {
    const [showMenu, setShowMenu] = useState(false)
    const isMedium = useMediaQuery('(min-width: 769px)')
  
    const showMenuHandler = () => {
      setShowMenu(!showMenu)
    }

    const closeMenuHandler = () => {
        setShowMenu(false)
    }

    return (
        <div className={`${showMenu ? 'fixed top-9 right-6' : ''}`}>
            <div className={isMedium ? 'hidden' : 'cursor-pointer p-2 bg-red-100 hover:bg-red-200 rounded-full relative z-20 text-3xl'} onClick={showMenuHandler}>
                { showMenu && <RiCloseFill className="text-white"/> }
                { !showMenu && <RiMenu5Fill /> }
            </div>
            <motion.div 
                initial={{ y: !showMenu ? "-150%" : 0 }}
                animate={{ y: showMenu ? 0 : "-150%" }}
                transition={{ duration: 0.3 }}
                className={`${isMedium ? 'hidden' : 'fixed inset-0 backdrop-blur-sm z-10'}`}>
                <Menu onClick={closeMenuHandler} />
            </motion.div>
            {isMedium && <Menu onClick={closeMenuHandler}  />}
        </div>
    )
}

export default NavMenu
