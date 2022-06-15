import { useState } from "react";
import data, { CategoryType } from "../content";
import Wrapper from "../ui/Wrapper";
import SectionTitle from "../ui/SectionTitle";
import SingleProject from "./SingleProject";
import TagBtn from "../ui/TagBtn";

const Projects = () => {
    const [activeTags, setActiveTags] = useState<CategoryType[]>([])

    const categoryItems = Array.from(new Set(data.projects.map(prj => prj.category)))

    const onActivate = (catItem: CategoryType) => {
        setActiveTags([catItem])
        // setActiveTags([...activeTags, catItem])
    }

    const onDeactivate = (catItem: CategoryType) => {
        setActiveTags([])
        // setActiveTags(activeTags.filter((a) => a != catItem))
    }

    const filteredProjects = data.projects.filter(prj => {
        if (activeTags.length <= 0) {
            return true
        }

        return activeTags.includes(prj.category)
    })


    // const filteredProjects2 = activeTags.length <= 0 ? data.projects : data.projects.filter(prj => {
    //     return activeTags.includes(prj.category)
    // })

    return (
        <Wrapper className="px-4">
            <SectionTitle text="My Projects are created with:" />
            <div className="flex flex-wrap gap-2 justify-center mb-12">
                {data.skills.map((skill, i) => {
                    // return <span style={{color: "#6C6", fontSize: "135px"}}>&#x2B22;</span>
                    return <img key={i} src={skill} alt="badge of skill" className="rounded-md" />
                })}
            </div>
            <div className="flex justify-center gap-x-2">
                {categoryItems.map((catItem: CategoryType, i: number) => {
                    return (
                        <TagBtn active={activeTags.includes(catItem)} catItem={catItem} onActivate={onActivate} onDeactivate={onDeactivate} key={i} />
                    )
                })}
            </div>
            <div id="works" className="mt-8 grid gap-2 grid-cols-[repeat(auto-fit,_minmax(150px,_1fr))] md:gap-4">
                {filteredProjects.map((project, index) => {
                    return <SingleProject key={index} {...project} />
                })}
            </div>
        </Wrapper>
    )
}

export default Projects
