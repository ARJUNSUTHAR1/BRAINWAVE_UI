import React from 'react'
import ButtonSvg from '../assets/svg/ButtonSvg'
const Button = ({className,children,px,href,onclick,white}) => {
    const classes = `button relative inline-flex justify-center items-center h-11 transition-colors hover:text-color-1 ${px || 'px-7'} ${className || ''} ${white ? 'text-n-8':'test-n-1'}` 
    const renderButton =()=>(
        <button className={classes} onClick={onclick}>
            <span>{children}</span>
            {ButtonSvg(white)}
        </button>
    )
    const renderLink =()=>(
        <a href={href} className={classes} >
          <span>{children}</span>
            {ButtonSvg(white)}
        </a>
    )
  return href ? renderLink() : renderButton();
  
}

export default Button
