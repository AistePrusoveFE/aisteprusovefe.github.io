import { useState } from "react"

interface TagProps {
    text: string
    onClick: () => void
}

const Tag = ({ text, onClick}: TagProps) => {
    const [filterOn, setFilterOn] = useState(false);

    const onFilterToggle = () => {
        if (!filterOn){
            setFilterOn(true)
        } else {
            setFilterOn(false)
        }
    }
    return (
        <button
            onClick={() => { onClick(); onFilterToggle()}}
            className={`${filterOn ? 'bg-[#ff0088]' : 'bg-zinc-900'} inline-block px-4 text-xs w-fit py-1 m-1 rounded-full border-2 border-zinc-900  text-zinc-50 hover:border-[#ff0088]`}>
            { text }
        </button>

    )
}

export default Tag