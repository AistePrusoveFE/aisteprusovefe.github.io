// import logo from "../assets/img/ap-logo-black.png"
import { useContext } from "react"
import logo_black from "../assets/img/black.png"
import logo_white from "../assets/img/white.png"
import { ThemeContext } from "../context/theme-context"

import NavMenu from "./navbar/NavMenu"

const Navbar = () => {
    const {theme, setTheme} = useContext(ThemeContext)

    return (
        <div className="py-4 mx-auto md:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg 2xl:max-w-screen-xl">
            <nav className="h-16 py-1 px-4 md:px-0 flex justify-between items-center">
                <img src={theme === 'dark' ? logo_white : logo_black} alt="AwesomePerky" className="h-full py-1" />
                <NavMenu />
            </nav>
        </div>
    )
}

export default Navbar
