import { Dispatch, SetStateAction, useEffect, useState } from "react"

function useStickyState<T>(key: string, default_value: T): [T, Dispatch<SetStateAction<T>>] {
    const [value, setValue] = useState<T>(() => {
        const stickyValue = window.localStorage.getItem(key)
        return stickyValue !== null ? JSON.parse(stickyValue) : default_value
    })

    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(value))
    }, [key, value])

    return [value, setValue]
}

export default useStickyState