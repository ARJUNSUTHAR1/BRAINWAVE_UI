import React, { useRef } from 'react'
import Section from './Section'
import curve from '../assets/hero/curve.png'
import robot from '../assets/background.jpg'
import Button from './Button'
import { heroBackground } from '../assets'
import { BackgroundCircles,BottomLine,Gradient } from '../design/Hero.jsx'
import { ScrollParallax } from 'react-just-parallax'
import { heroIcons } from '../constants/constant'
import Generating from './Generating.jsx'
import Notification from '../design/Notification.jsx'
import CompanyLogos from './CompanyLogos.jsx'

const Hero = () => {
  const parallaxRef = useRef(null)
  return (
    <div>
      <Section
      className="pt-[9rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem] lg:-translate-x-[2.5rem]"
      
      id='hero'
      >

        <div ref={parallaxRef} className='container relative text-center'>
            <div className='relative mx-auto  z-1 max-w-[62rem] mb-[4rem] md:mb-20 lg:mb-[6rem]'></div>
        <h1 className=' h1 mb-6 capitalize'>
            explore the posibilities of ai chatting with 
            <span className='ml-2 inline-block relative'>brainwave <img className='top-full left-0 absolute w-full xl:-mt-2' src={curve} width={624} height={28} alt="curve" /></span>
        </h1>
        <p className='body-1 max-w-3xl mx-auto mb-6 text-n-2 xl:mb-8'> unleash the power of ai with brainwave. upgrade your productivity with brainwave </p>
        <Button href='#started' >get started</Button>
        </div>
      

      <div className='relative max-w-[23rem] mx-auto md:max-w-3xl xl:mb-24 my-5'>
        <div className='relative p-0.5 z-1 rounded-2xl bg-conic-gradient'>
       <div className='relative bg-n-8 rounded-[1rem]'>
        <div className='h-[1.4rem] bg-n-10 rounded-t-[0.9rem]'/>
        <div className='aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]'>
          <img src={robot}
          className='w-full scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[24%]'  width={1024} height={490} alt="robot" />
       
        </div>
        <ScrollParallax>
       <Generating className='left-4 right-4 absolute bottom-5 md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2'/>
       </ScrollParallax>
        <ScrollParallax isAbsolutelyPositioned>
          <ul className='top-1/2 z-50000000 hidden absolute -left-[5.5rem] b-[7.5] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex'>
            {heroIcons.map((icon,index)=>(
              <li className='p-5' key={index}>
                <img src={icon} width={24} height={25} alt="icon" />
              </li>)

            
            )}
          </ul>
        </ScrollParallax>

        <ScrollParallax>
          <Notification
          title="Code Generation"
          className="hidden absolute -right-[5.5rem] bottom-[11rem] w-[18rem] xl:flex" />
          
        </ScrollParallax>
      
      {/* <BackgroundCircles/> */}
       

       </div>
       </div>

       <div className='absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%]  lg:-top-[104%] -z-50'>
          <img src={heroBackground}
          width={1440} height={1800}
          className='w-full' alt="ai" 
        />


      <BottomLine/> 
       
         </div>

      </div>  
<CompanyLogos className="hidden relative z-10000 mt-20 lg:block"/>


      </Section>

    </div>
  )
}

export default Hero
