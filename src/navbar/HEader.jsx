import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import imges from '../img/me.jpg'
import { FaBeer } from 'react-icons/fa';
function HEader() {
    useEffect(()=>{

Aos.init({duration:2000})

    },[])
  return (
    <div className=' grid grid-cols-2  photo'>     
    <div className='   md:bottom-[10%]      m-auto '>
        <div className='       ' data-aos="fade-left">
        <div className=' md:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  rounded-2xl p-[40px] '>    
        <h1 className=' text-white text-4xl '>درباره من</h1>
        <p className='  md:text-sm py-5 text-white    max-w-[55rem] '>سلام رضا رستگار هستم. برنامه نویس فرانت اند وب (Joniur Front End Developer)، به دنیای وب ، تکنولوژی و دیجیتال مارکتینگ علاقه دارم. هر روز و هر لحظه در حال یادگیری هستم و این مسیر ادامه دارد...</p>
        </div>
<div className=' socialmedia'>
<FaBeer />

</div>
 
        </div>
        
        </div>
        <div data-aos="fade-right" className='card'>
       <div className=' card ' >
        <img className=' w-[170px]   rounded-3xl ' src={imges}/>
       </div>
       </div>
        </div>
  )
}

export default HEader