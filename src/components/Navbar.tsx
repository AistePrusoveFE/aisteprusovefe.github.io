import logo_black from "../assets/img/black.png"
import NavMenu from "./navbar/NavMenu"

const Navbar = () => {
    // const {theme, setTheme} = useContext(ThemeContext)

    return (
        <div className="py-2 mx-auto md:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg 2xl:max-w-screen-xl">
            <nav className="h-16 py-1 px-4 md:px-0 flex justify-between items-center">
                <img src={logo_black} alt="AwesomePerky" className="h-full py-1" />
                <NavMenu />
            </nav>
        </div>
    )
}

export default Navbar
