import NavMenu from "./navbar/NavMenu"

const Navbar = () => {

    return (
        <div className="py-2 mx-auto md:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg 2xl:max-w-screen-xl">
            <nav className="h-16 py-1 px-4 md:px-0 flex justify-between items-center">
                <a href="/" className="text-white chonk text-2xl">AP</a>
                <NavMenu />
            </nav>
        </div>
    )
}

export default Navbar
