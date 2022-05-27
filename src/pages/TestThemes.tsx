// isivaizduojam, kad cia App component
import useLocalStorage from 'use-local-storage'
import * as Icon from 'react-icons/bs'
import './themeToggler.css'

export default function TestThemes() {
    const [theme, setTheme] = useLocalStorage<string>('theme', 'light')

    const switchTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light'
        setTheme(newTheme)
    }

    return (
        <div className='main h-screen flex flex-col justify-center text-sm transition-all duration-500' data-theme={theme}>
            <div className="login text-center -mt-24 mx-0 mb-8">
                <h1 className='text-center p-4 text-5xl'>Login</h1>
                <div className="container flex flex-col justify-center items-center p-6 w-[300px] mx-auto rounded-md">
                    <div className="top flex justify-between w-full text-base">
                        <Icon.BsGoogle />
                        <Icon.BsFacebook />
                        <Icon.BsLinkedin />
                        <Icon.BsTwitter />
                        <Icon.BsApple />
                    </div>
                    <p className='divider w-full text-center leading-[0.1rem] my-8'><span className='px-[10px]'>Or</span></p>
                    <form className='w-full flex flex-col'>
                        <label>E-mail</label>
                        <input type="email" placeholder='enter your email' />
                        <label>Password</label>
                        <input type="password" placeholder='enter your password' />
                        <div className="remember flex items-center w-full">
                            <input type="checkbox" checked />
                            <p className='pl-4'>Remember me</p>
                        </div>
                        <button className='my-4 rounded-lg p-2 cursor-pointer font-bold'>Login</button>
                    </form>
                    <div className="bottom flex justify-between w-full text-sm">
                        <p>Forgot your password?</p>
                        <a href="/">Reset Password</a>
                    </div>
                    <p className='create text-base mt-4 cursor-pointer'>Create account</p>
                </div>
                <div className="theme-toggle text-[2rem] cursor-pointer text-center mt-8">
                    <h2>{theme === 'light' ? 'Come to the dark side' : 'Go light'}</h2>
                    <div className='mx-auto w-fit mt-4 text-[2rem]' onClick={switchTheme} >
                        {theme === 'light' ? <Icon.BsToggleOff /> : <Icon.BsToggleOn />}
                    </div>
                </div>
            </div>
        </div>
    )
}
