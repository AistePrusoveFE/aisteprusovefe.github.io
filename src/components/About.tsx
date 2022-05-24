import data from "../content";
import SectionTitle from "../ui/SectionTitle";
import Wrapper from "../ui/Wrapper";
import Question from "./Question";

const About = () => {
    const questions = data.about

    return (
        <Wrapper>
            <div id="about" className="">
                <SectionTitle text="Nice to meet you!" />
                <h2 className="font-bold">First things first</h2>
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
