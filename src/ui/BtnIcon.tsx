import { ReactNode } from "react"

// implement dynamic btn with icon
interface BtnIconProps {
    icon: ReactNode
    className?: string
    onClick?: () => void
}

const BtnIcon = ({ icon, className, onClick}: BtnIconProps) => {
    return (
        <button onClick={onClick} className={`${className ?? ''} cursor-pointer p-2 bg-red-100 hover:bg-red-200 rounded-full`}>
            { icon }
        </button>
    )
}

export default BtnIcon 