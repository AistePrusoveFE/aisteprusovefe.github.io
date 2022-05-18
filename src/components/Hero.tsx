import Wrapper from "../ui/Wrapper";
import avatar from "../assets/img/avatar.png"

export default function Hero() {
  return (
    <Wrapper>
      <section className="mt-10">
        <h1 className="font-mono font-bold text-4xl mb-6">Hi! I am Aistė</h1>
        <p className="font-mono">Frontend Web Developer and Multimedia enthusiast</p>
        <div className="text-center">
          <img src={avatar} alt="" className="w-full mx-auto m-8 border-8 border-red-400 border-dotted rounded-full"/>
        </div>
      </section>
    </Wrapper>
  )
}
