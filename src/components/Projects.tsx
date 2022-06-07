import { useState } from "react";
import data, { SingleProjectProps } from "../content";
import { CategoryType } from "../content"
import SectionTitle from "../ui/SectionTitle";
import Tag from "../ui/Tag";
import Wrapper from "../ui/Wrapper";
import SingleProject from "./SingleProject";

const Projects = () => {
    const [projects, setProjects] = useState(data.projects)

    const onFilterHandler = (tag: CategoryType) => {
        let filteredPrjs: SingleProjectProps[] = [];

        projects.forEach(prj => {
            if (prj.category.includes(tag)){
                filteredPrjs.push(prj)
            }
        })
        
        setProjects(filteredPrjs)
    }

    return (
        <Wrapper className="px-4">
            <SectionTitle text="Check My Works" />
            <div className="py-4 text-center">
                <Tag text="web development" onClick={() => onFilterHandler('web')}/>
                <Tag text="design &amp; branding" onClick={() => onFilterHandler('design')}/>
                <Tag text="illustrations" onClick={() => onFilterHandler('art')}/>
            </div>
            <div id="works" className="mt-8 grid gap-y-4 md:gap-12 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project, index) => {
                    return <SingleProject key={index} {...project} />
                })}
            </div>
        </Wrapper>
    )
}

export default Projects
