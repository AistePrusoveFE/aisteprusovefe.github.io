import data from "../content";
import SectionSubtitle from "../ui/SectionSubtitle";
import SectionTitle from "../ui/SectionTitle";
import Wrapper from "../ui/Wrapper";
import SingleArticle from "./SingleArticle";

const Blog = () => {
    const articles = data.articles
    return (
        <Wrapper>
            <SectionTitle text="Latest Activity" />
            <SectionSubtitle text="Behind the scenes of coding, design, branding and illustrating, tips &amp; tricks, my thoughts and etc. "/>
            <SectionSubtitle text="Enjoy reading!"  />
            <div id="blog" className="mt-8">
                {articles.map((article, index) => {
                    return <SingleArticle key={index} {...article}/>
                })}
            </div>
        </Wrapper>
    )
}

export default Blog
