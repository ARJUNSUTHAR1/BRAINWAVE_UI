import React from 'react'
import Section from './Section'
import { smallSphere, stars } from '../assets'
import Heading from './Heading'
import PricingList from './PricingList'
import {LeftLine,RightLine} from "../design/Pricing"
const Pricing = () => {
  return (
    <Section className="overflow-hidden " id="pricing">
       <div className='container relative z-2'>
        <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
            <img src={smallSphere} alt="sphere"
            width={255}
            height={255} />

<div className='absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none'>
        <img src={stars} alt="stars"
        className='w-full'
        width={900}
        height={450}
         /></div>
        </div>
       <Heading tag = "Get Started With Brainwave"
       title="Pay Once, Use Forever"
       />

       <div className="relative">
        <PricingList/>
        <LeftLine/>
        <RightLine/>
       </div>
       </div>
    </Section>
  )
}

export default Pricing
