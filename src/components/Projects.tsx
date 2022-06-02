import data from "../content";
import SectionSubtitle from "../ui/SectionSubtitle";
import SectionTitle from "../ui/SectionTitle";
import Wrapper from "../ui/Wrapper";
import SingleProject from "./SingleProject";

const Projects = () => {
    const projects = data.projects
    return (
        <Wrapper>
            <SectionTitle text="Check My Works"/>
            <div id="works" className="grid gap-y-4 md:gap-12 md:grid-cols-2">
                { projects.map((project, index) => {
                    return <SingleProject key={index} title={project.title} content={project.content} />
                })}
            </div>
        </Wrapper>
    )
}

export default Projects
