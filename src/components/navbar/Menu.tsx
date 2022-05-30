import useMediaQuery from "../../hooks/useMediaQuery"
import AllLinks from "./AllLinks"

export interface CloseMenu {
    onClick: () => void
    className?: string
}

const Menu = ({ onClick }: CloseMenu) => {
    const isMedium = useMediaQuery('(min-width: 768px)')

    if (isMedium) {
        return <AllLinks onClick={onClick} className="text-zinc-700 dark:text-zinc-100 py-4 pl-4 gap-x-4 flex items-center"/>

    }

    return <AllLinks onClick={onClick} className="text-slate-50 flex flex-col p-4 items-center pt-60 text-2xl gap-y-8 bg-black opacity-90 h-screen"/>

}

export default Menu
