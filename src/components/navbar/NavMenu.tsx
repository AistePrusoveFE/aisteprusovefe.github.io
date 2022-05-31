import { RiMenu5Fill, RiCloseFill } from "react-icons/ri"
import { useState } from "react"
import useMediaQuery from "../../hooks/useMediaQuery"
import { motion } from "framer-motion"
import Menu from "./Menu"
import BtnIcon from "../../ui/BtnIcon"

const NavMenu = () => {
    const [showMenu, setShowMenu] = useState(false)
    const isMedium = useMediaQuery('(min-width: 768px)')
  
    const showMenuHandler = () => {
      setShowMenu(!showMenu)
    }

    const closeMenuHandler = () => {
        setShowMenu(false)
    }

    return (
        <div className={`${showMenu ? 'fixed top-4 right-4' : ''}`}>
            <BtnIcon className={isMedium ? 'hidden' : 'relative z-20 text-3xl text-pink-300'} onClick={showMenuHandler} icon={ showMenu ? <RiCloseFill/> : <RiMenu5Fill /> } />
            <motion.div 
                initial={{ y: !showMenu ? "-150%" : 0 }}
                animate={{ y: showMenu ? 0 : "-150%" }}
                transition={{ duration: 0.3 }}
                className={`${isMedium ? 'hidden' : 'fixed inset-0 backdrop-blur-sm z-10'}`}>
                <Menu onClick={closeMenuHandler} />
            </motion.div>
            { isMedium && <Menu onClick={closeMenuHandler} /> }
        </div>
    )
}

export default NavMenu
