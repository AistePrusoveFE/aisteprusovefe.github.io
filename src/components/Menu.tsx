import useMediaQuery from "../hooks/useMediaQuery"
import MenuNavlinks from "./navbar/MenuNavlinks"

const Menu = () => {
    const isMedium = useMediaQuery('(min-width: 768px)')

    if (isMedium) {
        return (
            <div className="font-mono text-black py-4 pl-4 gap-x-8 flex">
                <MenuNavlinks />
            </div>
        )
    }

    return (
        <div className="font-mono text-white flex flex-col p-4 items-center pt-60 text-2xl gap-y-8 bg-black opacity-90 h-screen">
            <MenuNavlinks />
        </div>
    )

}

export default Menu
