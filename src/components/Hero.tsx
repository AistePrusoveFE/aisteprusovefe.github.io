import Wrapper from "../ui/Wrapper";
import avatar from "../assets/img/avatar.png"
import useMediaQuery from "../hooks/useMediaQuery";
import { useEffect, useState } from "react";

const Hero = () => {
    // auto-typing reference https://lo-victoria.com/making-typing-animation-with-react-hooks

    const isSmall = useMediaQuery('(min-width: 550px)')
    return (
        <Wrapper>
            <h1 className="font-medium text-2xl mb-4 apolline">Hello there! I am <span className="text-4xl block title mt-2">Aiste Prusove</span></h1>
            <div className={`${isSmall ? 'max-w-[450px] mx-auto' : ''} text-center`}>
                <img src={avatar} alt="" className={`mx-auto m-8 border-8 border-red-400 border-dotted rounded-full`} />
            </div>
            <div>
                <p className="apolline mb-40">awesome &amp; perky developer</p>
            </div>
        </Wrapper>
    )
}

export default Hero
