import { ReactNode } from "react"

interface TooltipProps {
    message: string
    children: ReactNode
}

const Tooltip = ({ message, children }: TooltipProps) => {
    return (
        <div className="relative flex flex-col items-center group">
            { children }
            <div className="absolute bottom-0 flex-col items-center hidden mb-6 group-hover:flex">
                <span className="relative z-10 p-2 text-xs leading-none text-white whitespace-nowrap bg-gray-600 shadow-lg rounded-md">{ message }</span>
                <div className="w-3 h-3 -mt-2 rotate-45 bg-gray-600"></div>
            </div>
        </div>
    )
}

export default Tooltip