import logo from "../../assets/img/ap_logo_2.png"
import NavMenu from "./NavMenu"

const Navbar = () => {

    return (
        <div className="pt-4 pb-8">
            <nav className="h-16 py-2 px-4 flex justify-between items-center">
                <img src={logo} alt="" className="h-full" />
                <NavMenu />
            </nav>
        </div>
    )
}

export default Navbar
