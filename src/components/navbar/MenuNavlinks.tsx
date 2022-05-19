import { CloseMenu } from "./Menu"
import Navlink from "./Navlink"


const MenuNavlinks = ({ onClick }: CloseMenu) => {
    return (
        <>
            <Navlink linkId="works" text="works" onClick={onClick} />
            <Navlink linkId="about" text="about" onClick={onClick}/>
            <Navlink linkId="contact" text="contact" onClick={onClick}/>
            <Navlink linkId="blog" text="articles" onClick={onClick}/>
        </>
    )

}

export default MenuNavlinks