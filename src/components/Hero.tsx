import Wrapper from "../ui/Wrapper";
import avatar from "../assets/img/avatar.png"
import useMediaQuery from "../hooks/useMediaQuery";

export default function Hero() {
  const isSmall = useMediaQuery('(min-width: 550px)')
  return (
    <Wrapper>
      <section>
        <h1 className="font-mono font-medium text-4xl mb-2">Hi! I am Aistė</h1>
        <p className="font-mono">Frontend Web Developer and Multimedia enthusiast</p>
        <div className={`${isSmall ? 'max-w-[450px] mx-auto' : ''} text-center`}>
          <img src={avatar} alt="" className={`mx-auto m-8 border-8 border-red-400 border-dotted rounded-full `}/>
        </div>
      </section>
    </Wrapper>
  )
}
