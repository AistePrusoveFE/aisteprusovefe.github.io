import GridCol from "../ui/Gridcol";
import SectionSubtitle from "../ui/SectionSubtitle";
import SectionTitle from "../ui/SectionTitle";
import Wrapper from "../ui/Wrapper";

const Projects = () => {
    return (
        <Wrapper>
            <SectionTitle text="My Works"/>
            <SectionSubtitle text="Latest"/>
            <div id="works" className="grid gap-y-4 md:grid-cols-2 md:gap-x-4">
                <GridCol size="h-40" content="Creta Beauty Studio" />
                <GridCol size="h-40" content="E-shop Nursery Garden" />
                <GridCol size="h-40" content="Meal Planner" />
                <GridCol size="h-40" content="Mood Tracker" />
            </div>
        </Wrapper>
    )
}

export default Projects
