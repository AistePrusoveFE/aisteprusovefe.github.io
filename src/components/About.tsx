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
                <SectionTitle text="I am a Frontend Web Developer with a passion for UI &amp; Graphic Design" />
                <SectionSubtitle text="Learn more about me" />
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
