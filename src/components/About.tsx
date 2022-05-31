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
                <SectionSubtitle text="a girl with a passion for" />
                <SectionTitle text="&lt;code&gt; &amp;&amp; &#10000;design&#9998; " />

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
