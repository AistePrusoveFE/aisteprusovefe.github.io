import { RiInstagramLine } from "react-icons/ri"
import BtnIcon from "../../ui/BtnIcon"
import ToggleTheme from "../ToggleTheme"
import { CloseMenu } from "./Menu"
import SingleNavlink from "./SingleNavlink"

const AllLinks = ({ onClick, className }: CloseMenu) => {

    const openUrl = () => {
        window.open('https://www.instagram.com/awesome_perky_tech.diaries/', '_blank')
    }

    return (
        <div className={`${className ?? ''}`}>
            <ToggleTheme />
            <SingleNavlink linkId="about" text="about" onClick={onClick} />
            <SingleNavlink linkId="works" text="works" onClick={onClick} />
            <SingleNavlink linkId="blog" text="articles" onClick={onClick} />
            <BtnIcon onClick={openUrl} className="text-pink-400 text-lg" icon={<RiInstagramLine />}/>
        </div>
    )

}

export default AllLinks