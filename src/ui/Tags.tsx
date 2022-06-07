import data from "../content"

interface TagsProps {
    categoryItems: any
    setProjects: any
    filterItem: (item: string) => void
}

const Tags = ({categoryItems, setProjects, filterItem}: TagsProps) => {
    return (
        <div className="py-4 text-center">
            {categoryItems.map((catItem: string, i: number) => {
                return (
                    <button
                    onClick={() => filterItem(catItem)}
                    key={i}
                    className={`bg-zinc-900 inline-block px-4 text-xs w-fit py-1 m-1 rounded-full border-2 border-zinc-900  text-zinc-50 hover:border-[#ff0088]`}>
                    { catItem }
                </button>
                )
            })}
            <button
                onClick={() => setProjects(data.projects)}
                className={`bg-zinc-900 inline-block px-4 text-xs w-fit py-1 m-1 rounded-full border-2 border-zinc-900  text-zinc-50 hover:border-[#ff0088]`}>
                all
            </button>
        </div>
    )
}

export default Tags