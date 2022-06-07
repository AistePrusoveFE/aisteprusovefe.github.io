import { useState } from "react";
import data from "../content";
import Tags from "../ui/Tags";
import Wrapper from "../ui/Wrapper";
import SectionTitle from "../ui/SectionTitle";
import SingleProject from "./SingleProject";

const Projects = () => {
    const [projects, setProjects] = useState(data.projects)

    const categoryItems = Array.from(new Set(data.projects.map(prj => prj.category)))

    const filterItem = (curCat: string) => {
        const newItem = data.projects.filter(newVal => {
            return newVal.category === curCat
        })

        setProjects(newItem)
    }


    return (
        <Wrapper className="px-4 min-h-screen">
            <SectionTitle text="Check My Works" />
            <Tags 
                categoryItems={categoryItems} 
                setProjects={setProjects} 
                filterItem={filterItem}/>
            <div id="works" className="mt-8 grid gap-y-4 md:gap-12 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project, index) => {
                    return <SingleProject key={index} {...project} />
                })}
            </div>
        </Wrapper>
    )
}

export default Projects
