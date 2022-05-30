import { useContext } from "react"
import { ThemeContext } from "../context/theme-context"
import BtnIcon from "./BtnIcon"
import { BsSun } from 'react-icons/bs'
import { MdDarkMode } from 'react-icons/md'

const ToggleTheme = () => {
    const {theme, setTheme} = useContext(ThemeContext)

    return (
        <div>
            <BtnIcon icon={theme === 'dark' ? <BsSun /> : <MdDarkMode />} onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}/>
        </div>
    )
}

export default ToggleTheme