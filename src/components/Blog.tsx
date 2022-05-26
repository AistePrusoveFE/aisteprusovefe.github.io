import GridCol from "../ui/Gridcol";
import SectionSubtitle from "../ui/SectionSubtitle";
import Wrapper from "../ui/Wrapper";

const Blog = () => {
    return (
        <Wrapper>
            <h2 className="text-4xl font-bold apolline text-center">Recent Articles</h2>
            <SectionSubtitle text="If you feel like reading.. "/> 
            <div id="blog" className="grid gap-y-4 md:grid-cols-2 md:gap-x-4">
                <GridCol size="h-40" content="My Career Change" />
                <GridCol size="h-40" content="Apps I like" />
                <GridCol size="h-40" content="How I stay sane" />
                <GridCol size="h-40" content="New Illustration!" />
            </div>
        </Wrapper>
    )
}

export default Blog
