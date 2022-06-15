import { RiGithubFill, RiInstagramLine, RiLinkedinBoxFill } from "react-icons/ri"
import BtnIcon from "../ui/BtnIcon"

const Footer = () => {
    const openUrl = (url: string) => {
        window.open(url, '_blank')
    }

    return (
        <div id="contact" className="text-pink-600 p-4 h-20 ">&copy; 2022
            <BtnIcon onClick={() => openUrl('https://github.com/AistePrusoveFE')} className="" icon={<RiGithubFill />} />
            <BtnIcon onClick={() => openUrl('https://www.linkedin.com/in/aist%C4%97-prusov%C4%97-6b8aa61b8/')} className="" icon={<RiLinkedinBoxFill />} />
            <BtnIcon onClick={() => openUrl('https://www.instagram.com/awesome_perky_illustrations/')} className="" icon={<RiInstagramLine />} />
        </div>
    )
}

export default Footer
