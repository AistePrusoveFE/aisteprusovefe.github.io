import logo from "../assets/img/ap-logo-black.png"
import NavMenu from "./navbar/NavMenu"

const Navbar = () => {

    return (
        <div className="py-4">
            <nav className="h-16 py-1 px-4 flex justify-between items-center">
                <img src={logo} alt="AwesomePerky" className="h-full py-1" />
                <NavMenu />
            </nav>
        </div>
    )
}

export default Navbar
