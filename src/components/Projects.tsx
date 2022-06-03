import { useState } from "react";
import data, { CategoryType, SingleProjectProps } from "../content";
import SectionTitle from "../ui/SectionTitle";
import Tag from "../ui/Tag";
import Wrapper from "../ui/Wrapper";
import SingleProject from "./SingleProject";

const Projects = () => {
    const [projects, setProjects] = useState(data.projects)
    const [filteredCategory, setFilteredCategory] = useState(false)

    const onFilterItem = (category: CategoryType) => {
        if (!filteredCategory) {
            let foundProjects: SingleProjectProps[] = []
            projects.forEach(project => {
                if (project.category.includes(category)) {
                    foundProjects.push(project)
                }
            })

            setProjects(foundProjects)
            setFilteredCategory(true)
        }

        if (filteredCategory) {
            projects.forEach(project => {
                if (project.category.every(prjCat => prjCat === category)) {
                    setProjects(data.projects)
                    setFilteredCategory(false)
                }

                if (!project.category.includes(category)) {
                    let foundProjects: SingleProjectProps[] = []
                    data.projects.forEach(project => {
                        if (project.category.includes(category)) {
                            foundProjects.push(project)
                        }
                    })

                    setProjects(foundProjects)
                    setFilteredCategory(true)
                }
            })
        }
    }

    return (
        <Wrapper className="px-4">
            <SectionTitle text="Check My Works" />
            <div className="py-4 text-center">
                <Tag text="web development" onClick={() => onFilterItem('web')} />
                <Tag text="design &amp; branding" onClick={() => onFilterItem('design')} />
                <Tag text="illustrations" onClick={() => onFilterItem('art')} />
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
