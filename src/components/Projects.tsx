import GridCol from "../ui/Gridcol";
import Wrapper from "../ui/Wrapper";

const Projects = () => {
    return (
        <Wrapper>
            <h2 className="text-4xl">Check my works</h2>
            <div id="works" className="grid gap-4">
                <GridCol content="Creta Beauty Studio" />
                <GridCol content="E-shop Nursery Garden" />
                <GridCol content="Meal Planner" />
                <GridCol content="Mood Tracker" />
            </div>
        </Wrapper>
    )
}

export default Projects
