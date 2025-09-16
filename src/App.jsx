import ButtonGradient from "./assets/svg/ButtonGradient"
import Benefits from "./components/Benefits"
import Collaboration from "./components/Collaboration"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero1 from "./design/BackgroundCircles"
import Hero from "./components/Hero"
import Pricing from "./components/Pricing"
import Roadmap from "./components/Roadmap"
import Services from "./components/Services"

const App = () => {
  return (
    <>
    <div className="pt-[4.75 rem] lg:pt-[5.25rem] overflow-hidden h-fit">
      <Header/>
      <Hero1/>
      <Hero/>
      <Benefits/>
      <Collaboration/>
      <Services/>
      <Pricing/>
      <Roadmap/>
      <Footer/>
      </div>
      <ButtonGradient/>
      
    </>
  )
}

export default App

