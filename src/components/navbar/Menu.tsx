import AllLinks from "./AllLinks"

export interface CloseMenu {
    onClick: () => void
    className?: string
    isMedium: boolean
}

const Menu = ({ onClick, isMedium }: CloseMenu) => {

    if (isMedium) {
        return <AllLinks onClick={onClick} className="text-zinc-100 py-4 pl-4 gap-x-4 flex items-center" />

    }

    return <AllLinks onClick={onClick} className="text-zinc-100 flex flex-col p-4 items-center pt-60 text-2xl gap-y-8 bg-black opacity-90 h-screen " />

}

export default Menu
