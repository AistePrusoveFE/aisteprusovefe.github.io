import Wrapper from "../ui/Wrapper";
// import avatar from "../assets/img/portrait.png"
import avatar_2 from "../assets/img/portrait_2.png"
import { BiRefresh } from 'react-icons/bi'
import BtnIcon from "../ui/BtnIcon";
import { useState } from "react";

const aisteLoves = [
    'loves apples & PB',
    'is actually a Sim',
    'grows her own veggies & fruits',
    'has 2 meow meows',
    'paints illustrations',
    'loves cooking',
    'is thankful for coming by! ❤️'
]

const Hero = () => {
    const [index, setIndex] = useState(0)

    const onTextChangeHandler = () => {
       setIndex(prevIndex => {
           return (prevIndex + 1) % aisteLoves.length
       })
    }

    const textChecker = (text: string) => {
        if (text.includes('loves')){
            return text.replace('loves', '❤️')
        }

        return text
    }

    return (
        <Wrapper>
            <div className="text-center lg:grid lg:grid-cols-7 lg:grid-rows-3 items-center xl:mt-10">
                <div className="max-w-[500px] mx-auto mb-6 col-start-5 col-span-3 row-span-3 lg:mx-0 justify-self-end">
                    <img src={avatar_2} alt="flat illustration portrait of Aiste Prusove" className="px-2 md:px-0" />
                </div>
                <div className="col-start-1 col-span-4 row-start-1 row-span-3 md:text-left mb-6">
                    <p className="text-center lg:text-left text-6xl mb-4 sm:text-6xl md:text-7xl xl:text-8xl 2xl:text-9xl lg:mb-10 dark:text-zinc-100 chonk text-zinc-900 break-words">Aiste Prusove</p>
                    <p className="text-center lg:text-left text-2xl md:text-3xl lg:text-4xl xl:text-5xl dark:text-zinc-100 apolline text-zinc-900">{textChecker(aisteLoves[index])}</p>
                </div>
            </div>
            <div className="text-center">
                <BtnIcon onClick={onTextChangeHandler} icon={<BiRefresh className="text-2xl text-zinc-900 dark:text-zinc-100" />} />
            </div>
        </Wrapper>
    )
}

export default Hero
