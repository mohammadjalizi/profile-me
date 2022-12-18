import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import photo from '../img/project1.png'
import photo1 from '../img/project2.png'
function Swiper1() {
  return (
    <div className=' bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  rounded-3xl   shadow-2xl '>  
    <div  className=' md:w-[70%] md:m-auto   rounded-2xl  text-white'>
     
     <div class=" flex justify-between">
<h2 class="work__title-h2"> آخرین نمونه کارها</h2>
<a href="https://github.com/rezarastegar2003?tab=repositories" target="_blank">
<p class="work__title-p">مشاهده بیشتر</p>
</a>
</div>
      <div>

      <Swiper className=''
 
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={80}
      slidesPerView={3}
      navigation
     

    >
      <div data-aos="zoom-out-right">
      <SwiperSlide>
<div className='  bg-fuchsia-500  h-auto '>
<img className=' py-5 ' src={photo}/>
<div className=' py-8'>   
<h3>پروژه  تمرینی</h3>
<p className=' py-4'>این پروژه کلون سایت تمرینی . می باشد. در این پروژه از فریم ورک بوت استرب   استفاده شده و از
html5 و
 bootstrap و
اندکی js استفاده
شده است و همچنین ریسپانسیو شده و مناسب برای تمام دستگاه ها</p>
</div>
<div class=" flex justify-between mt-6">
<a href="https://github.com/mohammadjalizi/siteme" target="_blank"><button className='  bg-gradient-to-r from-cyan-500 to-blue-500 p-4 rounded-3xl shadow-2xl hover:from-pink-500 hover:to-yellow-500"'>سورس
کد</button></a>
   <a href="home/mohammad/Desktop/New%20Folder%201/siteme-master/index-fa.html" target="_blank">   <button class="   bg-gradient-to-r from-cyan-500 to-blue-500 p-4 rounded-3xl shadow-2xl hover:from-pink-500 hover:to-yellow-500">مشاهده آنلاین</button> </a> 
</div>

</div>


      </SwiperSlide>
      <SwiperSlide>
      <div className='  bg-fuchsia-500  h-auto '>
      <img className=' py-4 ' src={photo1}/>
<div className=' py-8'>   
<h3>پروژه نوبیتکس</h3>
<p className=' py-4'>      این پروژه با استفاده از فریم ورک تایلویند  استفاده شده واز html5و اندکی js استفاده

شده است و همچنین ریسپانسیو شده و مناسب برای تمام دستگاه ها</p>
</div>
<div class=" flex justify-between mt-6">
<a href="https://github.com/mohammadjalizi/play" target="_blank"><button className='  bg-gradient-to-r from-cyan-500 to-blue-500 p-4 rounded-3xl shadow-2xl hover:from-pink-500 hover:to-yellow-500"'>سورس
کد</button></a>
<button class="   bg-gradient-to-r from-cyan-500 to-blue-500 p-4 rounded-3xl shadow-2xl hover:from-pink-500 hover:to-yellow-500">مشاهده آنلاین</button>
</div>

</div>
      </SwiperSlide>
      <SwiperSlide>
      <div className='  bg-fuchsia-500  h-auto '>
      <img className=' py-5 ' src={photo}/>
<div className=' py-8'>   
<h3>پروژه تپسی</h3>
<p className=' py-4'>این پروژه کلون سایت تپسی tapsi.ir می باشد. در این پروژه از فریم ورک استفاده نشده و از
html5 و
css3 و
اندکی js استفاده
شده است و همچنین ریسپانسیو شده و مناسب برای تمام دستگاه ها</p>
</div>
<div class=" flex justify-between mt-6">
<a href="https://github.com/mohammadjalizi/play" target="_blank"><button className='  bg-gradient-to-r from-cyan-500 to-blue-500 p-4 rounded-3xl shadow-2xl hover:from-pink-500 hover:to-yellow-500"'>سورس
کد</button></a>
<button class="   bg-gradient-to-r from-cyan-500 to-blue-500 p-4 rounded-3xl shadow-2xl hover:from-pink-500 hover:to-yellow-500">مشاهده آنلاین</button>
</div>

</div>

      </SwiperSlide>
      <SwiperSlide className= '  '>
      <div className='  bg-fuchsia-500  h-auto  rounded-3xl shadow-2xl ' >
      <img className=' py-5 ' src={photo}/>
<div className=' py-8'>   
<h3>پروژه تپسی</h3>
<p className=' py-4'>این پروژه کلون سایت تپسی tapsi.ir می باشد. در این پروژه از فریم ورک استفاده نشده و از
html5 و
css3 و
اندکی js استفاده
شده است و همچنین ریسپانسیو شده و مناسب برای تمام دستگاه ها</p>
</div>
<div class=" flex justify-between mt-6">
<a href="https://github.com/mohammadjalizi/play" target="_blank"><button className='  bg-gradient-to-r from-cyan-500 to-blue-500 p-4 rounded-3xl shadow-2xl hover:from-pink-500 hover:to-yellow-500"'>سورس
کد</button></a>
<button class="   bg-gradient-to-r from-cyan-500 to-blue-500 p-4 rounded-3xl shadow-2xl hover:from-pink-500 hover:to-yellow-500">مشاهده آنلاین</button>
</div>

</div>

      </SwiperSlide>
      ...</div>
    </Swiper>
        </div>      
    </div>
    </div>
  )
}

export default Swiper1;