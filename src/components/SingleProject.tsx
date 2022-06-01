import { SingleProjectProps } from "../content"
import GridCol from "../ui/Gridcol"


const SingleProject = ({ title, content }: SingleProjectProps) => {
    return (
        <GridCol size="h-40">
            <h4>{title}</h4>
            <div className="h-full">
                <iframe src={content} width="100%"></iframe>
            </div>
        </GridCol>

    )
}

export default SingleProject