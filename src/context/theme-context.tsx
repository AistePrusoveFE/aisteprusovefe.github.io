import { createContext, useEffect, useState } from "react"

const getInitialTheme = (): ThemeColor => {
    if (typeof window !== 'undefined' && window.localStorage) {
        const storedPrefs = window.localStorage.getItem('color-theme')

        if (storedPrefs === 'dark' || storedPrefs === 'light'){
            return storedPrefs
        }

        const userMedia = window.matchMedia('(prefers-color-scheme): dark')

        if (userMedia.matches){
            return 'dark'
        }
    }

    return 'light'
}

export const ThemeContext = createContext<{theme: ThemeColor, setTheme: (s: ThemeColor) => void}>({
    theme: getInitialTheme(), 
    setTheme: (s: ThemeColor) => {}
})

interface ThemeProviderProps {
    children: JSX.Element | JSX.Element[]
}

type ThemeColor = 'light' | 'dark'

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const [theme, setTheme] = useState<ThemeColor>(getInitialTheme)

    const rawSetTheme = (rawTheme: ThemeColor) => {
        const root = window.document.documentElement

        root.classList.remove('light', 'dark')
        root.classList.add(rawTheme)

        localStorage.setItem('color-theme', rawTheme)
    }

    useEffect(() => {
        rawSetTheme(theme)
    }, [theme])

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}