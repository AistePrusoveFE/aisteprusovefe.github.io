import useMediaQuery from "../../hooks/useMediaQuery"
import MenuNavlinks from "./MenuNavlinks"

export interface CloseMenu {
    onClick: () => void
}

const Menu = ({ onClick }: CloseMenu) => {
    const isMedium = useMediaQuery('(min-width: 768px)')

    if (isMedium) {
        return (
            <div className="text-black py-4 pl-4 gap-x-8 flex">
                <MenuNavlinks onClick={onClick} />
            </div>
        )
    }

    return (
        <div className="text-white flex flex-col p-4 items-center pt-60 text-2xl gap-y-8 bg-black opacity-90 h-screen">
            <MenuNavlinks onClick={onClick}/>
        </div>
    )

}

export default Menu
