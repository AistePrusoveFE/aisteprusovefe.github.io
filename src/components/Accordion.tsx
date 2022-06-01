import data from "../content"
import SingleFact from "./SingleFact"

const Accordion = () => {
    const facts = data.about

    return (
        <div className="mt-4">
            {facts.map((fact, index) => {
                return <SingleFact index={index} key={index} {...fact} />
            })}
        </div>
    )

}

export default Accordion

