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
        <Wrapper className="px-4 min-h-screen">
            <SectionTitle text="Check My Works" />
            <div className="py-4 text-center">
                {categoryItems.map((catItem: CategoryType, i: number) => {
                    return (
                        <TagBtn active={activeTags.includes(catItem)} catItem={catItem} onActivate={onActivate} onDeactivate={onDeactivate} key={i} />
                    )
                })}
            </div>
            <div id="works" className="mt-8 grid gap-y-4 md:gap-12 md:grid-cols-2 xl:grid-cols-3">
                {filteredProjects.map((project, index) => {
                    return <SingleProject key={index} {...project} />
                })}
            </div>
        </Wrapper>
    )
}

export default Projects
