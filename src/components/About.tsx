import data from "../content";
import SectionSubtitle from "../ui/SectionSubtitle";
import SectionTitle from "../ui/SectionTitle";
import Wrapper from "../ui/Wrapper";
import SingleFact from "./SingleFact";

const About = () => {
    const facts = data.about

    return (
        <Wrapper>
            <div id="about">
                <SectionTitle text="I just have a passion for &lt;code&gt; &amp;&amp; &#10000;design&#9998; " />
                <SectionSubtitle text="" />
                <div className="mt-4">
                    { facts.map((fact, index) => {
                        return <SingleFact key={index} {...fact}/>
                    }) }
                </div>
            </div>
        </Wrapper>
    )
}

export default About
