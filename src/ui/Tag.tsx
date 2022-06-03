import { useState } from "react"

interface TagProps {
    text: string
    onClick: () => void
    category: string
    filteredCat: string
}

const Tag = ({ text, onClick, category, filteredCat }: TagProps) => {

    return (
        <button
            onClick={onClick}
            className={`${filteredCat === category ? 'bg-[#ff0088]' : 'bg-zinc-900'} inline-block px-4 text-xs w-fit py-1 m-1 rounded-full border-2 border-zinc-900  text-zinc-50 hover:border-[#ff0088]`}>
            {text}
        </button>

    )
}

export default Tag