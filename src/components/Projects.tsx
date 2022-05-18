import GridCol from "../ui/Gridcol";
import Wrapper from "../ui/Wrapper";

export default function Projects() {
  return (
    <Wrapper>
      <div id="works" className="grid gap-4">
        <GridCol content="Creta Beauty Studio" />
        <GridCol content="E-shop Nursery Garden"/>
        <GridCol content="Meal Planner"/>
        <GridCol content="Mood Tracker"/>
      </div>
    </Wrapper>
  )
}
