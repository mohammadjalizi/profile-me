import React from 'react'   
import images from '../navbar/pic.jpeg'

function Navbar() {
  return (
    <div className=' bg-black text-white'>
<div className=' navbar flex  justify-between container '>

<div>
    <img  className=' w-[80px]  border  rounded-full ' src={images}/ >
    
     </div>
<div className=' flex items-center justify-center'>
<ul className=' flex gap-x-4 '>

    <li className=' cursor-pointer hover:border  hover:rounded-full hover:bg-gradient-to-r from-green-400 to-blue-500  p-2  translate transition ease-in duration-700'>درباره من</li>
    <li className=' cursor-pointer hover:border  hover:rounded-full hover:bg-gradient-to-r from-green-400 to-blue-500   p-2  translate transition ease-in duration-700'>مهارت ها</li>
    <li className=' cursor-pointer hover:border  hover:rounded-full hover:bg-gradient-to-r from-green-400 to-blue-500  p-2  translate transition ease-in duration-700'>تماس با من</li> 
    <li className=' cursor-pointer hover:border  hover:rounded-full hover:bg-gradient-to-r from-green-400 to-blue-500  p-2  translate transition ease-in duration-700'> رزومه من(CV) </li>
    </ul>

</div>


</div>



    </div>
  )
}

export default Navbar