import fairyBackground from  "../assets/background/fairyBg2.png"
import Wrapper from "../ui/Wrapper"

export default function Hero() {
  return (
    <Wrapper> 
      <section className="relative">  
        <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">Hi, I am Aiste</h1>
        <img src={fairyBackground} alt="gradient background" />
      </section>
    </Wrapper>
  )
}
