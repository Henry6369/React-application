import React from 'react'
import screens from '../assets/screens.png';
const About = () => {
  return (
    <div className='pt-[10vh]'>
      <h2 className="text-[52px] leading-[62px] text-center justify-center justify-items-center"> About Us </h2>
        <div className="text-[52px] leading-[62px]" >
           <p className="text-[22px] leading-[62px]  text-center justify-center justify-items-center"> At figma we're passionate about innovative solutions</p>
        </div>
        <img src={screens} alt="img" className=" w-[100%] flex justify-center justify-items-center "/>
    </div>
  )
}

export default About;
