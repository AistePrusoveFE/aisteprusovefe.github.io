import { SingleProjectProps } from "../content"
import GridCol from "../ui/Gridcol"

const SingleProject = ({ title, content, category }: SingleProjectProps) => {
    const { url, subtitle, img } = content

    // border-[#FF0088]
    return (
        <GridCol className={`border-2 border-zinc-800`}>
            <h4>{title}</h4>
            <div>
                <h5 className="p-2 font-bold text-2xl">{category.join(', ')}</h5>
                <h5>{subtitle}</h5>
                <div className="h-full">
                    <img src={img} alt="webpage preview" />
                    <a href={url}>Visit Page</a>
                </div>
            </div>
        </GridCol>

    )
}

export default SingleProject