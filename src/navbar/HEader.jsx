import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
function HEader() {
    useEffect(()=>{

Aos.init({duration:2000})

    },[])
  return (
    <div className=' absolute   md:bottom-[50%]      m-auto '>
        <div className='     flex flex-wrap   px-40    '>
        <div>    
        <h1 className=' text-white text-4xl '>درباره من</h1>
        <p className=' text-3xl text-white font-semibold   max-w-2xl '>سلام رضا رستگار هستم. برنامه نویس فرانت اند وب (Joniur Front End Developer)، به دنیای وب ، تکنولوژی و دیجیتال مارکتینگ علاقه دارم. هر روز و هر لحظه در حال یادگیری هستم و این مسیر ادامه دارد...</p>
        </div>
        </div>
        
        </div>
  )
}

export default HEader