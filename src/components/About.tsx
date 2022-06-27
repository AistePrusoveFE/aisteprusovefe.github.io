import SectionSubtitle from "../ui/SectionSubtitle";
import SectionTitle from "../ui/SectionTitle";
import Wrapper from "../ui/Wrapper";
import Accordion from "./Accordion";

const About = () => {

    return (
        <Wrapper className="px-4">
            <div id="about">
                <SectionSubtitle text="a girl with a passion for" />
                <SectionTitle text="&lt;code&gt; &amp;&amp; &#10000;design&#9998; " />
                <p>Show short, medium or long biography</p>
                <Accordion />
            </div>
        </Wrapper>
    )
}

export default About
