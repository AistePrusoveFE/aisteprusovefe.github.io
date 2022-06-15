
import ToggleTheme from "../../ui/ToggleTheme"
import { CloseMenu } from "./Menu"
import SingleNavlink from "./SingleNavlink"

const AllLinks = ({ onClick, className }: CloseMenu) => {

    return (
        <div className={`${className ?? ''}`}>
            <SingleNavlink linkId="about" text="about" onClick={onClick} />
            <SingleNavlink linkId="works" text="works" onClick={onClick} />
            <SingleNavlink linkId="blog" text="articles" onClick={onClick} />
            <ToggleTheme />
        </div>
    )

}

export default AllLinks