import React from 'react'
import Heading from './Heading'
import { check, service1, service2, service3 } from '../assets'
import { brainwaveServices, brainwaveServicesIcons } from '../constants/constant'
import Generating from './Generating'
import {PhotoChatMessage, VideoBar ,Gradient ,VideoChatMessage} from '../design/Services'

const Services = () => {
  return (
    
    <div className='container'>
      <Heading
      title = "Generative Ai Made For Creators"
      text = "BrainWave unlocks the potential of Ai-Powerd applications">

      </Heading>
      <div className='relative'>
        <div className='z-1 relative items-center flex h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl lg:p-20 xl:h-[46rem] overflow-hidden '>
            <div className='absolute h-full w-full top-0 left-0 pointer-events-none md:w-3/5 xl;w-auto'>
                <img src={service1} className='w-full h-full object-cover md:object-right ' width={800} height={730} alt="" />
            </div>

            <div className='relative z-1 max-w-[17rem] ml-auto'>
                <h4 className='h4 mb-4'>Smartest Ai</h4>
                <p className='text-n-3 body-2 mb-[3rem]'>BrainWave unlocks the potential of Ai-Powerd applications</p>

                <ul className=' body-2'>
                    {brainwaveServices.map((service,index)=>(
                        <li className='flex gap-3 items-start py-4 border-t border-n-6' key={index}>
                            <img width={24} height={24} src={check}  alt="" />
                            <p>{service}</p>
                        </li>
                    ))}
                </ul>
            </div>
            <Generating className="absolute left-4 right-4 bottom-4 border-n-1/10 border lg:left-1/2 lg:right-auto lg:bottom-8 lg:-translate-x-1/2"/>

        </div>

      </div>

      <div className='relative z-1 grid gap-5 lg:grid-cols-2'>
        <div className='border border-n-1/10 relative min-h-[39rem] rounded-3xl overflow-hidden'  >
    
            <div className='absolute inset-0 '>
                <img src={service2} className='w-full h-full object-cover' alt="robot" height={750} width={630} />
            </div>
            
            <div className='absolute flex flex-col justify-end p-8 inset-0 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15'>
                <h4 className='h4 mb-4'>Photo Editing</h4>
                <p className='text-n-3 body-2 mb-[3rem]'>BrainWave unlocks the potential of Ai-Powerd applications</p>
                </div>
                <PhotoChatMessage/>
        </div>
        
        <div className='p-4 overflow-hidden bg-n-7 rounded-3xl lg: min-h-[46rem]'>
          <div className="py-12 px-4 xl:px-8"> 
          <h4 className='h4 mb-4'>Video generation</h4>
          <p className='body-2 mb-[2rem] text-n-3'>the world's most powerful photo and video art generator</p>

          <ul className='flex justify-between items-center'>
            {brainwaveServicesIcons.map((item,index)=>{
              return <li key={index}
              className={`rounded-2xl flex items-center justify-center ${index === 2 ? "w-[3rem] h-[3rem] bg-conic-gradient p-0.2 md:w-[4.5rem] md:h-[4.5rem]" : "flex w-10 h-10 bg-n-6 md:w-15 md:h-15" }`}>
                <div className={index === 2 ? "flex justify-center items-center bg-n-7 rounded-[1rem] w-full h-full " : ""}>
                        <img src={item} alt="" />
                </div>
              </li>
            })}
          </ul>
          </div>
 
          <div className='relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem]'>
            <img src={service3} alt="scary robo"
            className='w-full h-full object-cover '
            width={520}
            height={400} />
            <VideoChatMessage/>
            <VideoBar/>
          </div>

        </div>
      </div>

      {/* <Gradient/> */}
    </div>
  )
}

export default Services
