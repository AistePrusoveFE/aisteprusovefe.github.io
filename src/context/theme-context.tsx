import React, { useEffect, useState } from "react"

const getInitialTheme = () => {
    if (typeof window !== 'undefined' && window.localStorage){
        const storedPrefs = window.localStorage.getItem('current-theme')

        if (typeof storedPrefs === 'string') return storedPrefs

        if (window.matchMedia('(prefers-color-scheme: dark)').matches){
            return 'dark'
        }
    }

    return 'light'
}

// default theme value???
export const ThemeContext = React.createContext({
    theme: 'light',
    setTheme: (string: string) => {}
})


interface ThemeProviderProps {
    initialTheme: any
    children: JSX.Element | JSX.Element[]
}

export const ThemeProvider = ({ initialTheme, children }: ThemeProviderProps) => {
    const [theme, setTheme] = useState(getInitialTheme)

    const checkTheme = (existing: string) => {
        const root = window.document.documentElement
        const isDark = existing === 'dark'

        root.classList.remove(isDark ? 'light' : 'dark')
        root.classList.add(existing)

        localStorage.setItem('current-theme', existing)
    }

    if (initialTheme){
        checkTheme(initialTheme)
    }

    useEffect(() => {
        checkTheme(theme)
    }, [theme])

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            { children }
        </ThemeContext.Provider>
    )
}