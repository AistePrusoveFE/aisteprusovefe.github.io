import Wrapper from "../ui/Wrapper";
import avatar from "../assets/img/avatar.png"
import useMediaQuery from "../hooks/useMediaQuery";
import { useEffect, useState } from "react";

const Hero = () => {
    // auto-typing reference https://lo-victoria.com/making-typing-animation-with-react-hooks

    const isSmall = useMediaQuery('(min-width: 550px)')
    return (
        <Wrapper className="font-mono">
            <h1 className="font-mono font-medium text-2xl mb-4">Hi there! I am <span className="text-3xl p-2 block">Aiste Prusove</span></h1>
            <div className={`${isSmall ? 'max-w-[450px] mx-auto' : ''} text-center`}>
                <img src={avatar} alt="" className={`mx-auto m-8 border-8 border-red-400 border-dotted rounded-full `} />
            </div>
            <div>
                <h2>you may know me as:</h2>
                {/* <p className="font-mono text-lg"><span className="font-bold">A</span>wesome</p>
                <p className="font-mono text-lg"><span className="font-bold">P</span>erky</p>
                <p className="font-mono text-lg"><span className="font-bold">D</span>eveloper</p> */}
                <p className="font-mono"><span className="font-bold">A</span>wesome &amp; <span className="font-bold">P</span>erky <span className="font-bold">T</span>ech <span className="font-bold">D</span>iaries</p>
            </div>
        </Wrapper>
    )
}

export default Hero
