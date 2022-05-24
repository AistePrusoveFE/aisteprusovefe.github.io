import Wrapper from "../ui/Wrapper";
import avatar from "../assets/img/portrait.png"
import useMediaQuery from "../hooks/useMediaQuery";

const Hero = () => {
    const isSmall = useMediaQuery('(min-width: 550px)')
    const isMedium = useMediaQuery('(min-width: 769px)')

    return (
        <Wrapper>
            <div className={`text-center`}>
                <div className={`max-w-[500px] mx-auto`}>
                    <img src={avatar} alt="flat illustration portrait of Aiste Prusove" className="p-4" />
                </div>
                <p className="text-5xl mb-4 font-bold fenwick">Aiste Prusove</p>
                <p className="text-2xl">&lt;code&gt; &amp;&amp; &#10000;design&#9998;</p>
            </div>
        </Wrapper>
    )
}

export default Hero
