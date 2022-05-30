import { useContext } from "react"
import { ThemeContext } from "../context/theme-context"
import BtnIcon from "./BtnIcon"
import * as Icon from 'react-icons/bs'

const ToggleTheme = () => {
    const {theme, setTheme} = useContext(ThemeContext)

    return (
        <div>
            <BtnIcon icon={theme === 'dark' ? <Icon.BsSun /> : <Icon.BsFillSunFill />} onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}/>
        </div>
    )
}

export default ToggleTheme