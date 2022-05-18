import logo from "../assets/img/ap_logo_2.png"
import { RiMenu5Fill } from "react-icons/ri"
import { useState } from "react"

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false)

  const showMenuHandler = () => {
    console.log(showMenu)
    setShowMenu(!showMenu)
  }

  return (
    <div className="pt-4 pb-8">
      <nav className="h-16 py-2 px-4 flex justify-between items-center">
        <img src={logo} alt="" className="h-full"/>
        <div className="cursor-pointer p-2 hover:bg-red-200 rounded-full relative z-20" onClick={showMenuHandler}>
            <RiMenu5Fill className="text-2xl"/>
        </div>
        <div className={showMenu ? 'visible fixed inset-0 w-screen h-screen bg-black opacity-70 z-10' : 'hidden'}></div>
      </nav>
    </div>
  )
}
