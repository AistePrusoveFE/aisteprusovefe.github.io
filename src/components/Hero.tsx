import Wrapper from "../ui/Wrapper";
import avatar from "../assets/img/portrait.png"
import useMediaQuery from "../hooks/useMediaQuery";

const Hero = () => {
    const isSmall = useMediaQuery('(min-width: 550px)')
    const isMedium = useMediaQuery('(min-width: 769px)')

    return (
        <Wrapper>
            <div className={`${isMedium ? 'grid grid-cols-5 grid-rows-2 my-20' : 'text-center'}`}>
                <h1 className="font-medium text-2xl apolline col-span-3 self-end">Hello there! I am - <span className="text-4xl block title mt-2"> Aiste Prusove</span></h1>
                <div className={`${isSmall ? 'max-w-[500px] mx-auto' : ''} col-span-2 row-span-2 text-center`}>
                    <img src={avatar} alt="flat illustration portrait of Aiste Prusove" />
                </div>
                <div className="col-span-3">
                    <p className="apolline text-lg font-medium pt-4">awesome &amp; perky developer</p>
                </div>
            </div>
        </Wrapper>
    )
}

export default Hero
