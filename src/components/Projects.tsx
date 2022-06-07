import { useState } from "react";
import data, { CategoryType } from "../content";
import Wrapper from "../ui/Wrapper";
import SectionTitle from "../ui/SectionTitle";
import SingleProject from "./SingleProject";
import TagBtn from "../ui/TagBtn";

const Projects = () => {
    // visi projektu objektai
    // const [projects, setProjects] = useState(data.projects)
    const [activeTags, setActiveTags] = useState<CategoryType[]>([])

    // sudaromas naujas masyvas, kuriame yra kategorijos (stringai)
    const categoryItems = Array.from(new Set(data.projects.map(prj => prj.category)))

    // filtro funkcijam kuriai paduodama kategorija
    // const filterItem = (curCat: CategoryType) => {
    //     const filteredProjects = data.projects.filter(prj => {
    //         return prj.category === curCat
    //     })

    //     setProjects(filteredProjects)
    // }

    const onActivate = (catItem: CategoryType) => {
        // setActiveTags([catItem])
        setActiveTags([...activeTags, catItem])
    }

    const onDeactivate = (catItem: CategoryType) => {
        // setActiveTags([])
        setActiveTags(activeTags.filter((a) => a != catItem))
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
                {/* <button
                    onClick={() => setProjects(data.projects)}
                    className={`bg-zinc-900 inline-block px-4 text-xs w-fit py-1 m-1 rounded-full border-2 border-zinc-900  text-zinc-50 hover:border-[#ff0088]`}>
                    all
                </button> */}
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
