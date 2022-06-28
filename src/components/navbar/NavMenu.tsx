import { RiMenu5Fill, RiCloseFill } from "react-icons/ri"
import { useEffect, useState } from "react"
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

    useEffect(() => {
        if (showMenu) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }
    }, [showMenu])

    return (
        <>
            {!isMedium && (
                <div className={`${showMenu ?? 'fixed top-6 right-6'}`}>
                    <BtnIcon className='relative z-20 text-3xl text-white' onClick={showMenuHandler} icon={showMenu ? <RiCloseFill /> : <RiMenu5Fill />} />
                    <motion.div
                        initial={{ y: !showMenu ? "-150%" : 0 }}
                        animate={{ y: showMenu ? 0 : "-150%" }}
                        transition={{ duration: 0.3 }}
                        className='fixed inset-0 backdrop-blur-sm z-10'>
                        <Menu isMedium={isMedium} onClick={closeMenuHandler} />
                    </motion.div>
                </div>
            )}

            {isMedium && <Menu isMedium={isMedium} onClick={closeMenuHandler} />}
        </>

    )
}

export default NavMenu
