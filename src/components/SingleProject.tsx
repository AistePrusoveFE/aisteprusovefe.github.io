import { SingleProjectProps } from "../content"
import GridCol from "../ui/Gridcol"


const SingleProject = ({ title, content }: SingleProjectProps) => {
    return (
        <GridCol size="h-40">
            <h4>{title}</h4>
            <div className="h-full">
                <a href="https://jade-fudge-91c3a3.netlify.app/">Visit Page</a>
            </div>
        </GridCol>

    )
}

export default SingleProject