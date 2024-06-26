import React from 'react'
import SectionSvg from '../assets/svg/SectionSvg'
const Section = ({className,id,crosses,crossesOffset,customPadding,children}) => { 
  return (
    <div id={id} className={`relative ${customPadding || `py-10 lg:py-16 xl:py-20 ${crosses ? 'lg:py-36 xl:py-40' :''} ${className || ''}`} `}>
      {children}
      <div className='hidden absolute top-0 left-5 w-0.25 h-full bg-stroke-1 pointer-events-none md:block right-7.5 xl:left-10'>
        {crosses && 
        <>
        <SectionSvg crossesOffset={crossesOffset}/>
        </>}
      </div>
      <div className='hidden absolute top-0 right-5 w-0.25 h-full bg-stroke-1 pointer-events-none md:block  xl:right-10'>
        {crosses && 
        <>
        <SectionSvg crossesOffset={crossesOffset}/>
        </>}
      </div>
    </div>
  )
}

export default Section
