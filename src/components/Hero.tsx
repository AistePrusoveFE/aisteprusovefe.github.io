import Wrapper from "../ui/Wrapper";
import avatar from "../assets/img/avatar.png"

export default function Hero() {
  return (
    <Wrapper>
      <section className="mt-10">
        <h1 className="font-mono font-bold text-4xl mb-6">Hi! I'm Aiste Prusove</h1>
        <p className="font-mono">Frontend Web Developer and Multimedia enthusiast</p>
        <div className="text-center">
          <img src={avatar} alt="" className="w-1/2 mx-auto m-8 border-4 border-pink-400 border-dotted rounded-full"/>
        </div>
      </section>
    </Wrapper>
  )
}
