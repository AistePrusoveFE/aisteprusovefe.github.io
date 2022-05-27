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
                <SectionTitle text="I am a Frontend Web Developer with a passion for UI &amp; Graphic Design" />
                <SectionSubtitle text="Learn more about me" />
                <div className="mt-4">
                    { questions.map((question, index) => {
                        return <SingleQuestion key={index} {...question}/>
                    }) }
                </div>
            </div>
        </Wrapper>
    )
}

export default About
