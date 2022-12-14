import React from 'react'   
import images from '../navbar/pic.jpeg'

function Navbar() {
  return (
    <div className=' bg-black text-white'>
<div className=' navbar'>

<div>
    <img  className=' w-[80px]  border  rounded-full ' src={images}/ >
    
     </div>
<div>
<ul>

    <li>درباره من</li>
    <li>مهارت ها</li>
    <li></li>
    <li></li>
</ul>


</div>


</div>



    </div>
  )
}

export default Navbar