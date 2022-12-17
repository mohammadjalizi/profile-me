import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import photo from '../img/tapsi-screenshot.webp'
function Swiper1() {
  return (
    <div className=' bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 '>  
    <div  className=' md:w-[70%] md:m-auto  bg-slate-400  rounded-2xl  text-white'>
     
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
      pagination={{ clickable: true }}
     

    >
      <SwiperSlide>
<div className=' bg-black h-[50vh] '>
<img src={photo}/>
<h3>پروژه تپسی</h3>
<p>این پروژه کلون سایت تپسی tapsi.ir می باشد. در این پروژه از فریم ورک استفاده نشده و از
html5 و
css3 و
اندکی js استفاده
شده است و همچنین ریسپانسیو شده و مناسب برای تمام دستگاه ها</p>

<div class=" flex justify-between mt-6">
<a href="https://github.com/mohammadjalizi/play" target="_blank"><button>سورس
کد</button></a>
<button class="popup-post popupPostTapsi">مشاهده آنلاین</button>
</div>

</div>


      </SwiperSlide>
      <SwiperSlide>
      <div className=' bg-black h-[50vh] '>
<img src={photo}/>
<h3>پروژه تپسی</h3>
<p>این پروژه کلون سایت تپسی tapsi.ir می باشد. در این پروژه از فریم ورک استفاده نشده و از
html5 و
css3 و
اندکی js استفاده
شده است و همچنین ریسپانسیو شده و مناسب برای تمام دستگاه ها</p>

<div class=" flex justify-between mt-6">
<a href="https://github.com/mohammadjalizi/play" target="_blank"><button>سورس
کد</button></a>
<button class="popup-post popupPostTapsi">مشاهده آنلاین</button>
</div>

</div>

      </SwiperSlide>
      <SwiperSlide>
      <div className=' bg-black h-[50vh] '>
<img src={photo}/>
<h3>پروژه تپسی</h3>
<p>این پروژه کلون سایت تپسی tapsi.ir می باشد. در این پروژه از فریم ورک استفاده نشده و از
html5 و
css3 و
اندکی js استفاده
شده است و همچنین ریسپانسیو شده و مناسب برای تمام دستگاه ها</p>

<div class=" flex justify-between mt-6">
<a href="https://github.com/mohammadjalizi/play" target="_blank"><button>سورس
کد</button></a>
<button class="popup-post popupPostTapsi">مشاهده آنلاین</button>
</div>

</div>

      </SwiperSlide>
      <SwiperSlide>
      <div className=' bg-black h-[50vh] '>
<img src={photo}/>
<h3>پروژه تپسی</h3>
<p>این پروژه کلون سایت تپسی tapsi.ir می باشد. در این پروژه از فریم ورک استفاده نشده و از
html5 و
css3 و
اندکی js استفاده
شده است و همچنین ریسپانسیو شده و مناسب برای تمام دستگاه ها</p>

<div class=" flex justify-between mt-6">
<a href="https://github.com/mohammadjalizi/play" target="_blank"><button>سورس
کد</button></a>
<button class="popup-post popupPostTapsi">مشاهده آنلاین</button>
</div>

</div>


      </SwiperSlide>
      ...
    </Swiper>
        </div>      
    </div>
    </div>
  )
}

export default Swiper1;