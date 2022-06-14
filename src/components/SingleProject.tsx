import { SingleProjectProps } from "../content"
import GridCol from "../ui/Gridcol"

const SingleProject = ({ title, content, category }: SingleProjectProps) => {
    const { url, subtitle, img } = content

    const categoryTitle = (category: string) => {
        if (category === 'art') {
            return 'digital art'
        } else if (category === 'web') {
            return 'web & design'
        } else {
            return category
        }
    }

    // border-[#FF0088]
    // http://brenna.github.io/csshexagon/
    return (
        <GridCol className="h-72 relative">
            <img src={img} alt="webpage preview" className="h-full w-full object-cover rounded-md" />
            <div className="bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 p-2 rounded-full">
                <div className="h-28 w-28 text-center flex flex-col items-center justify-center text-xs uppercase gap-y-2">
                    <h4 className="font-extrabold text-pink-900">{title}</h4>
                    <h4 className="text-zinc-400 font-bold apolline">{categoryTitle(category)}</h4>
                </div>
            </div>

        </GridCol>

    )
}

export default SingleProject