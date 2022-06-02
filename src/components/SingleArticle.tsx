import { SingleArticleProps } from "../content"
import GridCol from "../ui/Gridcol"

const SingleArticle = ({ title, content }: SingleArticleProps) => {
    return (
        <GridCol size="h-40">
            <h4>{title}</h4>
            <p>{content}</p>
        </GridCol>
    )
}

export default SingleArticle