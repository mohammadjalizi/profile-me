import React from 'react'
import phot from '../img/Skills.png'

function Skils() {
  return (
    <div className='  grid md:grid-cols-2   grid-cols-1  justify-center items-center skils  w-full my-[60px] mx-auto   m-auto  text-white p-[20px] shadow-2xl '>

<div data-aos="zoom-in"> <img className=' w-[400px] ' src={phot}/> </div>
<div data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom">
<h3 className=' text-center py-4 bg-slate-500 '>مهارت ها</h3>
<div className='  py-3 grid grid-cols-3  md:grid-cols-3 gap-5 '>

<div className=' w-[130px] h-[131px] bg-orange-500 flex justify-center items-center '> <p>html5</p>   </div>

<div className=' w-[130px] h-[131px] bg-orange-500 flex justify-center items-center '> <p>Css3</p>   </div>
<div className=' w-[130px] h-[131px] bg-orange-500 flex justify-center items-center '> <p>Git</p>   </div>
<div className=' w-[130px] h-[131px] bg-orange-500 flex justify-center items-center '> <p>Github</p>   </div>
<div className=' w-[130px] h-[131px] bg-orange-500 flex justify-center items-center '> <p>
JavaScript</p>   </div>
<div className=' w-[130px] h-[131px] bg-orange-500 flex justify-center items-center '> <p>
Bootstrap</p>   </div>
<div className=' w-[130px] h-[131px] bg-orange-500 flex justify-center items-center '> <p>tailwindcss</p>   </div>
<div className=' w-[130px] h-[131px] bg-orange-500 flex justify-center items-center '> <p>Github</p>   </div>
<div class="next-skill">

</div>
<p class="soon-skill aos-init aos-animate" data-aos="zoom-in" data-aos-duration="1500">I am currently
learning React JS</p>
</div>
</div>
</div>
  )
}

export default Skils