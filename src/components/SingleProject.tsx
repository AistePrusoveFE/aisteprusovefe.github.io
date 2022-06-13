import { SingleProjectProps } from "../content"
import GridCol from "../ui/Gridcol"

const beautify = (word: string) => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
}

const SingleProject = ({ title, content, category }: SingleProjectProps) => {
    const { url, subtitle, img } = content

    const categoryTitle = (category: string) => {
        if (category === 'art') {
            return beautify('illustration')
        } else if (category === 'web') {
            return beautify(category) + ' Development & Design'
        } else {
            return beautify(category)
        }
    }

    // border-[#FF0088]
    return (
        <GridCol className="h-72 relative">
            <img src={img} alt="webpage preview" className="h-full w-full object-cover rounded-md" />
            <div className="bg-white h-40 w-40 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-center flex flex-col items-center justify-center  uppercase p-2 gap-y-2">
                <h4 className="font-bold text-sm">{title}</h4>
                <h4 className="text-xs">{categoryTitle(category)}</h4>
            </div>
        </GridCol>

    )
}

export default SingleProject