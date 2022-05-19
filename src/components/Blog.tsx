import GridCol from "../ui/Gridcol";
import Wrapper from "../ui/Wrapper";

const Blog = () => {
    return (
        <Wrapper>
            <h2 className="text-4xl font-bold">Recent Articles</h2>
            <div id="blog" className="grid gap-4">
                <GridCol size="h-40" content="My Career Change" />
                <GridCol size="h-40" content="Apps I like" />
                <GridCol size="h-40" content="How I stay sane" />
                <GridCol size="h-40" content="New Illustration!" />
            </div>
        </Wrapper>
    )
}

export default Blog
