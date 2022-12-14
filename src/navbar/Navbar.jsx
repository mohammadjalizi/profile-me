import React from 'react'   


function Navbar() {
  return (
    <div data-aos="fade-down" className='   z-50 fixed w-full '>
    <div className=' text-white  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500    '>
<div className=' navbar flex  justify-between container '>

<div className=' flex justify-center items-center'>
<h1 className=' text-2xl '> محمد جلیزی</h1>
    
     </div>
<div className=' flex items-center justify-center'>
<ul className=' flex gap-x-4    rounded-full  p-[13px] '>

    <li className=' cursor-pointer hover:border  hover:rounded-full hover:bg-gradient-to-r from-green-400 to-blue-500    p-2    transition ease-in duration-700'>درباره من</li>
    <li className=' cursor-pointer hover:border  hover:rounded-full hover:bg-gradient-to-r from-green-400 to-blue-500     p-2  transition ease-in duration-700'>مهارت ها</li>
    <li className=' cursor-pointer hover:border  hover:rounded-full hover:bg-gradient-to-r from-green-400 to-blue-500    p-2   transition ease-in duration-700'>تماس با من</li> 
    <li className=' cursor-pointer hover:border  hover:rounded-full hover:bg-gradient-to-r from-green-400 to-blue-500    p-2   transition ease-in duration-700'> رزومه من(CV) </li>
    </ul>

</div>


</div>



    </div>
    </div>
  )
}

export default Navbar