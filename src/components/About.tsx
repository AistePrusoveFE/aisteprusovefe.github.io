import data from "../content";
import SectionSubtitle from "../ui/SectionSubtitle";
import SectionTitle from "../ui/SectionTitle";
import Wrapper from "../ui/Wrapper";
import Question from "./Question";

const About = () => {
    const questions = data.about

    return (
        <Wrapper>
            <div id="about" className="">
                <SectionTitle text="Let me introduce myself" />
                <SectionSubtitle text="I am a frontend web developer and web designer with a passion for custom illustrations"/>
                <div className="">
                    { questions.map((question, index) => {
                        return <Question key={index} {...question}/>
                    }) }
                </div>
            </div>
        </Wrapper>
    )
}

export default About
