import React from 'react'
import Section from './Section'
import Heading from './Heading'
import { benefits } from '../constants/constant'
import Arrow from '../assets/svg/Arrow'
import { GradientLight } from '../design/Benefits'
const Benefits = () => {
  return (
    <Section id='features'>
      <div className="container relative z-4 w-full">
        <Heading className=' md:max-w-md lg:max-w-2xl' title="chat smarter, not harder with brainwave">

        </Heading>
        <div className='flex flex-wrap justify-center items-center  gap-10 w-full '>
        {benefits.map((benefit,index)=>(
            <div className='z-2 relative bg-no-repeat bg-contain max-w-[28rem] bg-center h-fit p-0.5 md:max-w-[24rem] '
            style={{
                backgroundImage : `url(${benefit.backgroundUrl})`
            }} key={index}>
                
                <div className='z-4 relative flex flex-col p-[2.4rem] min-h-[24rem]'> 
                <h5 className='h2 mb-5'>{benefit.title}</h5>
                <p className='body-2 mb-6 text-n-3'>{benefit.text}</p>
                <div className='flex items-center mt-auto'>
                    <img src={benefit.iconUrl} width={48} height={48} alt="icon" />
                    <p className='ml-auto font-code capitalize'>explore more</p>
                    <Arrow/>
                </div>
                 
               
                 <div className='bg-transparent z-4 absolute inset-0.5 bg-n-8'
                 style={{clipPath : "url(#benefits)"}}>
                    <div className='absolute inset-0 opacity-0 transition-opacity hover:opacity-10'>
                        {benefit.imageUrl && 
                        <img className='w-full h-full object-cover' src={benefit.imageUrl}
                        width={380}
                        height={362} alt="" />
                         }

                    </div>

                 </div>
                 </div>

                 {benefit.light && <GradientLight/>}
            </div>

        ))}
      </div>
      </div>
    </Section>
  )
}

export default Benefits
