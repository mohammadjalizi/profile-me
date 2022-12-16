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
    
    <div  className=' md:w-[50%] md:m-auto  text-white'>
     
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
      scrollbar={{ draggable: true }}

    >
      <SwiperSlide>
<div className=' bg-black '>
<img src={photo}/>
<p>hello</p>

<div>

 <h2>link</h2>
 <h1>mohammadjalizi</h1>
</div>

</div>


      </SwiperSlide>
      <SwiperSlide className=' bg-black '>Slide 2</SwiperSlide>
      <SwiperSlide className=' bg-black '>Slide 3</SwiperSlide>
      <SwiperSlide className=' bg-black '>Slide 4</SwiperSlide>
      ...
    </Swiper>
        </div>      
    </div>
  )
}

export default Swiper1;