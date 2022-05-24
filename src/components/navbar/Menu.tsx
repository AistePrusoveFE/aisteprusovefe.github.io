import useMediaQuery from "../../hooks/useMediaQuery"
import AllNavlinks from "./AllNavlinks"

export interface CloseMenu {
    onClick: () => void
    className?: string
}

const Menu = ({ onClick }: CloseMenu) => {
    const isMedium = useMediaQuery('(min-width: 768px)')

    if (isMedium) {
        return <AllNavlinks onClick={onClick} className="text-black py-4 pl-4 gap-x-4 flex items-center"/>

    }

    return <AllNavlinks onClick={onClick} className="text-white flex flex-col p-4 items-center pt-60 text-2xl gap-y-8 bg-black opacity-90 h-screen"/>

}

export default Menu
