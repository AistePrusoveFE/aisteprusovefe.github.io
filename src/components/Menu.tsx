import useMediaQuery from "../hooks/useMediaQuery"

export default function Menu() {
    const isMedium = useMediaQuery('(min-width: 768px)')

    if (isMedium){
        return (
            <div className="font-mono text-black p-4 gap-x-8 flex">
                <a href="#works">works</a>
                <a href="#about">about</a>
                <a href="#contact">contact</a>
            </div>
      )
    }

    return (
        <div className="font-mono text-white flex flex-col p-4 items-center pt-60 text-2xl gap-y-8 bg-black opacity-90 h-screen">
            <a href="#works">works</a>
            <a href="#about">about</a>
            <a href="#contact">contact</a>
        </div>
    )
    
}
