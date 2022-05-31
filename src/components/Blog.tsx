import data from "../content";
import SectionSubtitle from "../ui/SectionSubtitle";
import SectionTitle from "../ui/SectionTitle";
import Wrapper from "../ui/Wrapper";
import SingleArticle from "./SingleArticle";

const Blog = () => {
    const articles = data.articles
    return (
        <Wrapper>
            <SectionTitle text="Recent Articles" />
            <SectionSubtitle text="If you feel like reading.. "/> 
            <div id="blog" className="grid gap-y-4 md:grid-cols-2 md:gap-x-4">
                {articles.map((article, index) => {
                    return <SingleArticle key={index} title={article.title} content={article.content} />
                })}
            </div>
        </Wrapper>
    )
}

export default Blog
