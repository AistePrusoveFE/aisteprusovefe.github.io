import Wrapper from "../ui/Wrapper";
import avatar from "../assets/img/portrait.png"
import useMediaQuery from "../hooks/useMediaQuery";

const Hero = () => {
    const isSmall = useMediaQuery('(min-width: 550px)')
    const isMedium = useMediaQuery('(min-width: 769px)')

    return (
        <Wrapper>
            <div className={`${isMedium ? 'grid grid-cols-7 grid-rows-3 my-20' : 'text-center'}`}>
                <h1 className="font-medium text-3xl md:text-5xl lg:text-6xl apolline col-span-4 self-end">Hello there!</h1>
                <div className={`${isMedium ? 'max-w-[500px] mx-auto' : ''} col-span-3 row-span-3 self-center`}>
                    <img src={avatar} alt="flat illustration portrait of Aiste Prusove" className="p-4"/>
                </div>
                <div className="col-span-4">
                    <p className="apolline text-2xl md:text-3xl font-medium">Welcome to my page - </p>
                </div>
                <span className="text-4xl md:text-5xl lg:text-6xl block title mt-2 col-span-4">awesome &amp; perky developer</span>
            </div>
        </Wrapper>
    )
}

export default Hero
