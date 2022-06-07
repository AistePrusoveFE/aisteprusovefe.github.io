import { useState } from "react";
import data, { SingleProjectProps } from "../content";
import { CategoryType } from "../content"
import SectionTitle from "../ui/SectionTitle";
import Tag from "../ui/Tag";
import Wrapper from "../ui/Wrapper";
import SingleProject from "./SingleProject";

const Projects = () => {
    const [projects, setProjects] = useState(data.projects)

    const onSelectItems = (tag: CategoryType) => {
        let filteredPrjs: SingleProjectProps[] = [];

        data.projects.forEach(prj => {
            if (prj.category.includes(tag)) {
                filteredPrjs.push(prj)
            }
        })

        setProjects(filteredPrjs)
    }

    const onResetProjects = () => {
        setProjects(data.projects)
    }

    return (
        <Wrapper className="px-4 min-h-screen">
            <SectionTitle text="Check My Works" />
            <div className="py-4 text-center">
                <Tag text="web development &amp; design" onClick={() => onSelectItems('web')} />
                <Tag text="branding" onClick={() => onSelectItems('branding')} />
                <Tag text="illustrations" onClick={() => onSelectItems('art')} />
                <button
                    onClick={onResetProjects}
                    className={`bg-zinc-900 inline-block px-4 text-xs w-fit py-1 m-1 rounded-full border-2 border-zinc-900  text-zinc-50 hover:border-[#ff0088]`}>
                    all
                </button>
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
