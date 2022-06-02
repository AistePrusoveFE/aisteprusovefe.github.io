import { useState } from "react";
import data, { CategoryType } from "../content";
import SectionTitle from "../ui/SectionTitle";
import Tag from "../ui/Tag";
import Wrapper from "../ui/Wrapper";
import SingleProject from "./SingleProject";

const Projects = () => {
    const [projects, setProjects] = useState(data.projects)

    const onFilterItem = (category: CategoryType) => {
        setProjects(data.projects.filter(categoryItem => categoryItem.category === category))
    }

    return (
        <Wrapper className="px-4">
            <SectionTitle text="Check My Works"/>
            <div className="py-4 text-center">
                <Tag text="web development" onClick={() => onFilterItem('web')}/>
                <Tag text="design &amp; branding" onClick={() => onFilterItem('design')}/>
                <Tag text="illustrations" onClick={() => onFilterItem('art')}/>
            </div>
            <div id="works" className="grid gap-y-4 md:gap-12 md:grid-cols-2">
                { projects.map((project, index) => {
                    return <SingleProject key={index} {...project} />
                })}
            </div>
        </Wrapper>
    )
}

export default Projects
