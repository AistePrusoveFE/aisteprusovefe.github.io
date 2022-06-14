import { SingleProjectProps } from "../content"
import GridCol from "../ui/Gridcol"


const SingleProject = ({ title, content, category }: SingleProjectProps) => {
    const { url, subtitle, img, shape } = content

    const categoryTitle = (category: string) => {
        if (category === 'art') {
            return 'digital art'
        } else if (category === 'web') {
            return 'web & design'
        } else {
            return category
        }
    }

    const openUrl = (url: string) => {
        window.open(url)
    } 

    return (
        <GridCol onClick={() => openUrl(url)} className="h-72 relative bg-white">
            <img src={img} alt="webpage preview" className="h-full w-full object-cover rounded-md" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-40 h-40">
                <img src={shape} alt="" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center justify-center text-xs uppercase gap-y-2">
                    <h4 className="font-extrabold text-black">{title}</h4>
                    <h4 className="text-zinc-400 font-bold apolline">{categoryTitle(category)}</h4>
                </div>
            </div>


        </GridCol>

    )
}

export default SingleProject