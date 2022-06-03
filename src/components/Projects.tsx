import { useState } from "react";
import data, { CategoryType, SingleProjectProps } from "../content";
import SectionTitle from "../ui/SectionTitle";
import Tag from "../ui/Tag";
import Wrapper from "../ui/Wrapper";
import SingleProject from "./SingleProject";

const Projects = () => {
    const [projects, setProjects] = useState(data.projects)
    const [isFiltered, setIsFiltered] = useState(false)
    const [filteredCat, setFilteredCat] = useState('')

    const onFilterItem = (category: CategoryType) => {
        if (!isFiltered) {
            let foundProjects: SingleProjectProps[] = []
            projects.forEach(project => {
                if (project.category.includes(category)) {
                    foundProjects.push(project)
                }
            })

            setProjects(foundProjects)
            setIsFiltered(true)
            setFilteredCat(category)
        }

        if (isFiltered) {
            projects.forEach(project => {
                if (project.category.every(prjCat => prjCat === category)) {

                    setProjects(data.projects)
                    setIsFiltered(false)
                    setFilteredCat('')
                }

                if (!project.category.includes(category)) {
                    let foundProjects: SingleProjectProps[] = []
                    data.projects.forEach(project => {
                        if (project.category.includes(category)) {
                            foundProjects.push(project)
                        }
                    })

                    setProjects(foundProjects)
                    setIsFiltered(true)
                    setFilteredCat(category)
                }
            })
        }
    }

    return (
        <Wrapper className="px-4">
            <SectionTitle text="Check My Works" />
            <div className="py-4 text-center">
                <Tag 
                    filteredCat={filteredCat}
                    category="web" 
                    text="web development" 
                    onClick={() => onFilterItem('web')} 
                />
                <Tag 
                    filteredCat={filteredCat}
                    category="design" 
                    text="design &amp; branding" 
                    onClick={() => onFilterItem('design')} 
                />
                <Tag 
                    filteredCat={filteredCat}
                    category="art" 
                    text="illustrations" 
                    onClick={() => onFilterItem('art')} 
                />
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
