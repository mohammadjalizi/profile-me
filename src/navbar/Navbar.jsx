import React from 'react'   
import images from '../navbar/pic.jpeg'

function Navbar() {
  return (
    <div className=' text-white photo'>
<div className=' navbar flex  justify-between container '>

<div>
    <img  className=' w-[80px]  border  rounded-full ' src={images}/ >
    
     </div>
<div className=' flex items-center justify-center'>
<ul className=' flex gap-x-4  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500   rounded-full  p-[13px] '>

    <li className=' cursor-pointer hover:border  hover:rounded-full hover:bg-gradient-to-r from-green-400 to-blue-500    p-2    transition ease-in duration-700'>درباره من</li>
    <li className=' cursor-pointer hover:border  hover:rounded-full hover:bg-gradient-to-r from-green-400 to-blue-500     p-2  transition ease-in duration-700'>مهارت ها</li>
    <li className=' cursor-pointer hover:border  hover:rounded-full hover:bg-gradient-to-r from-green-400 to-blue-500    p-2   transition ease-in duration-700'>تماس با من</li> 
    <li className=' cursor-pointer hover:border  hover:rounded-full hover:bg-gradient-to-r from-green-400 to-blue-500    p-2   transition ease-in duration-700'> رزومه من(CV) </li>
    </ul>

</div>


</div>



    </div>
  )
}

export default Navbar