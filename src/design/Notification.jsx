import React from 'react'
import { notificationImages } from '../constants/constant'
import { notification1 } from '../assets'

const Notification = ({className,title}) => {
  return (
    <div className={`${className || ''} absolute items-center p-4 pr-6 bg-n-9/40 backdrop-blur border-n-1/10 rounded-2xl gap-5 `}>
        <img src={notification1} width={62} height={62} className='rounded-xl' alt="" />
      <div className='flex-1'>

        <h1 className='mb-1 font-semibold text-base'>
            {title}
        </h1>
        <div className='flex items-center justify-between'>
            <ul className='flex -m-0.5 '>
                {notificationImages.map((item,index)=>(
                    <li key={index} className='flex w-6 h-6 border-2 border-n-12 rounded-full overflow-hidden'>
                        <img className ="w-full" height={20} width={20} src={item}  alt="" />
                    </li>
                ))}
            </ul>
            <div className='body-2 text-n-13 '>
              1m ago
            </div>
        </div>
      </div>
    </div>
  )
}

export default Notification
