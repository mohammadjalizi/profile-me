import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import imges from '../img/me.jpg'
import { AiFillGithub }from "react-icons/ai";
import{AiFillLinkedin} from "react-icons/ai";
import{AiFillTwitterCircle} from "react-icons/ai";
import imges1 from '../navbar/Profile (1).svg'
function HEader() {
    useEffect(()=>{

Aos.init({duration:2000})

    },[])
  return (
    <div className=' grid grid-cols-2  photo' >     
    <div className='   md:bottom-[10%]  md:p-[128px]    m-auto '>
        <div className=' md:bg-gradient-to-r shadow-lg shadow-cyan-500/50 from-indigo-500 via-purple-500 to-pink-500  rounded-2xl p-[40px]       ' data-aos="fade-left" id='me'>
        <div className=' '>    
        <h1 className=' text-white md:text-4xl  flex  items-center gap-x-2'>
            <img className=' mt-1 ' src={imges1}/>
            درباره من</h1>
        <p className='  md:text-sm py-5 text-white    max-w-[55rem] '>سلام محمد جلیزی هستم. برنامه نویس فرانت اند وب (Joniur Front End Developer)، به دنیای وب و تکنولوژی    علاقه دارم. هر روز و هر لحظه در حال یادگیری هستم و این مسیر ادامه دارد...</p>
        </div>

        <div className=' socialmedia flex gap-x-6 '>
<AiFillGithub  className=' cursor-pointer  text-2xl   hover:scale-125 '  /  >
<AiFillLinkedin  className=' cursor-pointer  text-2xl  hover:scale-125  '   />
<AiFillTwitterCircle  className=' cursor-pointer  text-2xl     hover:scale-125   '    />

</div>
        </div>
        
        </div>
        <div data-aos="fade-right" className='card '>
       <div className=' card ' >
        <img className=' w-[342px]  hover:scale-125   rounded-full ' src={imges}/>
       </div>
       </div>
        </div>
  )
}

export default HEader