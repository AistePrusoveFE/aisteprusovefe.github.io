import logo from "../../assets/img/ap_logo_2.png"
import NavMenu from "./NavMenu"

const Navbar = () => {

    return (
        <div className="pt-4 pb-8">
            <nav className="h-16 py-1 px-4 flex justify-between items-center">
                <img src={logo} alt="AwesomePerky logo image" className="h-full" />
                <NavMenu />
            </nav>
        </div>
    )
}

export default Navbar
