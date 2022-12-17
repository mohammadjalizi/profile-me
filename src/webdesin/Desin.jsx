import React from 'react'
import web from '../img/web-design.png'
function Desin() {
  return (
    <div  className=' grid grid-cols-2 '>
<div>
    <div className=' py-32 md:px-24  '>  
    <h2>طراحی سایت حرفه ای شخصی در مشهد</h2>
    <p className=' max-w-lg py-4 '>ما انواع خدمات طراحی وبسایت با سیستم مدیریت محتوای وردپرس را با تیمی خلاق به صورت حرفه ای ارائه می‌دهیم. امروزه نیاز به کسب و کار های اینترنتی و دیجیتال بیشتر از قبل حس می شود و شما هم می توانید برای کسب و کار خود با داشتن وبسایت اعتبار برند و مشتریان خود را افزایش و کسب و کارتان را توسعه دهید</p>

    <button class="">مطالعه بیشتر + ثبت سفارش</button>
    </div>
    
    </div>
<div>
<img src={web}/>


</div>

    </div>
  )
}

export default Desin