import { RiInstagramLine } from "react-icons/ri"
import ToggleTheme from "../ToggleTheme"
import { CloseMenu } from "./Menu"
import SingleNavlink from "./SingleNavlink"

const AllNavlinks = ({ onClick, className }: CloseMenu) => {

    return (
        <div className={`${className}`}>
            <ToggleTheme />
            <SingleNavlink linkId="works" text="works" onClick={onClick} />
            <SingleNavlink linkId="about" text="about" onClick={onClick} />
            <SingleNavlink linkId="blog" text="articles" onClick={onClick} />
            <a href="https://www.instagram.com/awesome_perky_tech.diaries/" 
               target="_blank" 
               className="text-pink-400 text-lg"><RiInstagramLine />
            </a>
        </div>
    )

}

export default AllNavlinks