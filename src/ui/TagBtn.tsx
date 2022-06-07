import { CategoryType } from "../content"

interface SingleTagProps {
    catItem: CategoryType
    onActivate: (catItem: CategoryType) => void
    onDeactivate: (catItem: CategoryType) => void
    active: boolean
}

const TagBtn = ({ catItem, onActivate, onDeactivate, active }: SingleTagProps) => {

    const onActiveToggle = () => {
        if (active) {
            onDeactivate(catItem)
        } else {
            onActivate(catItem)
        }
    }

    return (
        <button
            onClick={onActiveToggle}
            className={`${active ? 'bg-[#ff0088] border-[#ff0088]' : 'bg-zinc-900 '} inline-block px-4 text-xs w-fit py-1 m-1 rounded-full border-2 border-zinc-900 text-zinc-50 hover:border-[#ff0088] dark:border-zinc-600`}>
            {catItem}
        </button>
    )
}

export default TagBtn