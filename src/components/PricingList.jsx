import React from 'react'
import { pricing } from '../constants/constant'
import Button from './Button'
import { check } from '../assets'

const PricingList = () => {
  return (
    <div className='flex gap-[1rem] max-lg:flex-wrap'>
      {pricing.map((price,index)=>(
          
          <div key={price.id} className='w-]19rem] max-lg:w-full h-full px-6 bg-n-8 border border-n-6 rounded-[2rem] lg:w-auto even:py-14 odd:py-8 [&>h4]:first:text-color-2 [&>h4]:even:text-color-1 [&>h4]:last:text-color-3'>
            <h1 className='h4 mb-4'>{price.title}</h1>
            <p className='body-2'>{price.description}</p>

            <div className='flex text-4xl mb-4 mt-4'>
                {price.price && (
                    <>
                    <div>$</div>
                    <div>{price.price}</div>
                    </>
                )}
            </div>
            <Button
            className="w-full mb-6  "
            href={price.price ? "/pricing" : "mailtoarjun"}
            >
                {price.price ? "Get Started" : "Contact Us"}
            </Button>

            <ul >
              {price.features.map((feature,index)=>(
                 <li key={index} className='flex gap-2 justify-start items-center mb-4'>
                  <img src={check} width={24} height={24} alt="" />
                  <p>{feature}</p>
                 </li>
              ))}
            </ul>
          </div>
      ))}
    </div>
  )
}

export default PricingList
