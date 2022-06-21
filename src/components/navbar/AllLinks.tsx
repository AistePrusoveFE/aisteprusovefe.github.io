import ToggleTheme from "../../ui/ToggleTheme"
import SingleNavlink from "./SingleNavlink"

interface AllLinksProps {
    onClick: () => void
    className?: string
}

const AllLinks = ({ onClick, className }: AllLinksProps) => {

    return (
        <div className={`${className ?? ''}`}>
            <SingleNavlink linkId="about" text="about" onClick={onClick} />
            <SingleNavlink linkId="works" text="projects" onClick={onClick} />
            <SingleNavlink linkId="blog" text="blog" onClick={onClick} />
            <ToggleTheme />
        </div>
    )

}

export default AllLinks