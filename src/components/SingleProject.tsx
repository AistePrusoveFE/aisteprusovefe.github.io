import { SingleProjectProps } from "../content"
import GridCol from "../ui/Gridcol"

const SingleProject = ({ title, content, category }: SingleProjectProps) => {
    let projectContent: JSX.Element;

    if (typeof content !== 'string') {
        const { url, subtitle, img } = content

        projectContent = (
            <div>
                <h5 className="p-2 text-black font-bold text-2xl">{ category.join(', ')}</h5>
                <h5>{subtitle}</h5>
                <div className="h-full">
                    <img src={img} alt="webpage preview" />
                    <a href={url}>Visit Page</a>
                </div>
            </div>
        )
    } else {
        projectContent = <p>{content}</p>
    }

    
    // border-[#FF0088]
    return (
        <GridCol className="border-2 border-zinc-800">
            <h4>{title}</h4>
            {projectContent}
        </GridCol>

    )
}

export default SingleProject