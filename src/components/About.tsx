import data from "../content";
import SectionSubtitle from "../ui/SectionSubtitle";
import SectionTitle from "../ui/SectionTitle";
import Wrapper from "../ui/Wrapper";
import SingleQuestion from "./SingleQuestion";

const About = () => {
    const questions = data.about

    return (
        <Wrapper>
            <div id="about">
                <SectionTitle text="Something about me" />
                <SectionSubtitle text="Frontend web developer who loves web design, branding and has weird passion to make custom illustrations" />
                <div className="mt-20">
                    { questions.map((question, index) => {
                        return <SingleQuestion key={index} {...question}/>
                    }) }
                </div>
            </div>
        </Wrapper>
    )
}

export default About
