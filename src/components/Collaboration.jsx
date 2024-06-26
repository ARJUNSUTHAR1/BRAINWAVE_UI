import React from 'react'
import Section from './Section'
import { collabApps, collabContent, collabText } from '../constants/constant'
import { brainwaveSymbol, check } from '../assets'
import Button from './Button'

const Collaboration = () => {
  return (
    <Section crosses>
    <div className='container lg:flex xl:flex '>
      <div className='max-w-[25rem]'>
        <h2 className='h2 mb-4 md:mb-8 captilize'>Ai chat app for seamless connection </h2>
        <ul className='max-w-[22rem] mb-10 md:mb-14'>
            {collabContent.map((item,index)=>(
              <li className='py-3 mb-3' key={item.id}>
                <div className='flex items-center gap-3'>
                    <img src={check} width={24} height={24} alt="" />
                <h6>{item.title}</h6>
                
                 
                </div>
                <div>
                {item.text &&
                  <p className='body-2 text-n-4 mt-3'>{item.text}</p>}
                </div>
              </li>
            ))}
        </ul>

        <Button>Try It Now</Button>
      </div>
      <div className='lg:ml-auto xl:w-[38rem] mt-4 h-fit '>
        <p className='body-2 text-n-4 mb-4 md:mb-16 lg:mb-32 lg:w-[22rem] lg:mx-[auto]'>{collabText}</p>
      
      <div className='relative left-1/2 border border-n-6 rounded-full flex w-[22rem] -translate-x-1/2 scale:75 md:scale-100 aspect-square '>
      <div className='  border border-n-6 rounded-full flex w-60 aspect-square m-auto '>
      <div className=' border border-n-6 rounded-full w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient '>
        <div className='flex justify-center items-center w-full h-full rounded-full bg-n-8'>
          <img src={brainwaveSymbol} width={48} height={48} alt="" />
        </div>
      </div>

      </div>
     <ul>
      {collabApps.map((app, index)=>(
        <li key={app.id} className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${index * 45}`}>
          <div className={`relative flex items-center justify-center -top-[1.6rem] h-[3.2rem] w-[3.2rem] bg-n-7 border border-n-1/15 rounded-xl -rotate-${index*45}`}><img src={app.icon} width={app.width} height={app.height} alt="" /></div>
        </li>
      ))}
     </ul>
     </div>
      </div>
    </div>
    </Section>
  )
}

export default Collaboration
