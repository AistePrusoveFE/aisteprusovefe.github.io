import ToggleTheme from "../ToggleTheme"
import { CloseMenu } from "./Menu"
import SingleNavlink from "./SingleNavlink"

const AllNavlinks = ({ onClick, className }: CloseMenu) => {
    return (
        <div className={`${className}`}>
            <SingleNavlink linkId="works" text="works" onClick={onClick} />
            <SingleNavlink linkId="about" text="about" onClick={onClick}/>
            <SingleNavlink linkId="blog" text="articles" onClick={onClick}/>
            <a href="https://www.instagram.com/awesome_perky_tech.diaries/" target="_blank" className="fenwick text-pink-400">@awesome_perky_tech</a>
            <ToggleTheme />
        </div>
    )

}

export default AllNavlinks