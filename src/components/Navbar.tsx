import logo from "../assets/img/ap_logo_2.png"
import { FaBars } from "react-icons/fa"

export default function Navbar() {
  return (
    <div className="pt-4 pb-8">
      <nav className="h-16 py-2 px-4 flex justify-between items-center">
        <img src={logo} alt="" className="h-full"/>
        <FaBars className="text-2xl"/>
      </nav>
    </div>
  )
}
