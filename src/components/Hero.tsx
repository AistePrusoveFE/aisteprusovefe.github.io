import Wrapper from "../ui/Wrapper";
import avatar from "../assets/img/portrait.png"

const Hero = () => {

    return (
        <Wrapper>
            <div className="text-center md:grid md:grid-cols-7 md:grid-rows-3 items-center md:mb-20 lg:mb-60">
                <div className="max-w-[500px] mx-auto mb-6 md:mb-0 col-start-5 col-span-3 row-span-3 lg:mx-0 justify-self-end">
                    <img src={avatar} alt="flat illustration portrait of Aiste Prusove" className="px-2 md:px-0" />
                </div>
                <div className="col-start-1 col-span-4 row-start-1 row-span-3 md:text-left">
                    <p className="text-5xl mb-4 font-bold md:text-6xl lg:text-7xl xl:text-8xl">Aiste Prusove</p>
                    <p className="text-2xl md:text-3xl lg:text-4xl xl:text-6xl">&lt;code&gt; &amp;&amp; &#10000;design&#9998;</p>
                </div>
            </div>
        </Wrapper>
    )
}

export default Hero
