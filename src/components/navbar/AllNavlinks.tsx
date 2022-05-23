import ToggleTheme from "../ToggleTheme"
import { CloseMenu } from "./Menu"
import SingleNavlink from "./SingleNavlink"

const AllNavlinks = ({ onClick, className }: CloseMenu) => {
    return (
        <div className={`${className}`}>
            <SingleNavlink linkId="works" text="works" onClick={onClick} />
            <SingleNavlink linkId="about" text="about" onClick={onClick}/>
            <SingleNavlink linkId="blog" text="articles" onClick={onClick}/>
            <SingleNavlink linkId="contact" text="contact" onClick={onClick}/>
            <ToggleTheme />
        </div>
    )

}

export default AllNavlinks