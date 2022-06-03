import { SingleProjectProps } from "../content"
import GridCol from "../ui/Gridcol"

const SingleProject = ({ title, content, category }: SingleProjectProps) => {
    let projectContent = <></>;

    if (typeof content !== 'string') {
        const { url, subtitle, img } = content

        projectContent = (
            <div>
                <h5>{category}</h5>
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