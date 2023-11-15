import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import SwiperCore from 'swiper';
import 'swiper/css';
import imgSlide_1 from "../../images/slide-06.png" 
import imgSlide_3 from "../../images/slide-03.png" 
import imgSlide_4 from "../../images/slide-04.png" 
import imgSlide_5 from "../../images/slide-05.png" 
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Sliderr = () => {

  SwiperCore.use([Autoplay])

  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        navigation={true}
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{delay: 4000}}
        speed={900}
        scrollbar={{ draggable: true }}
        className='my-swiper duration-500'>
        
        <SwiperSlide className='relative flex flex-row justify-center items-center gap-2 slide-01'><img className='h-[16rem] object-scale-down ' src={imgSlide_1} alt='img'></img><h1 className='text-black  font-extrabold text-3xl '>خصم يصل الى 50% عند استخدام الكوبون</h1></SwiperSlide>
        <SwiperSlide className='relative flex flex-row justify-center items-center gap-2 slide-02'><img className='h-[16rem] object-scale-down ' src={imgSlide_5} alt='img'></img><h1 className='text-black  font-extrabold text-3xl '>خصم يصل الى 50% عند استخدام الكوبون</h1></SwiperSlide>
        <SwiperSlide className='relative flex flex-row justify-center items-center gap-2 slide-03'><img className='h-[16rem] object-scale-down ' src={imgSlide_3} alt='img'></img><h1 className='text-black  font-extrabold text-3xl '>خصم يصل الى 50% عند استخدام الكوبون</h1></SwiperSlide>
        <SwiperSlide className='relative flex flex-row justify-center items-center gap-2 slide-04'><img className='h-[16rem] object-scale-down ' src={imgSlide_4} alt='img'></img><h1 className='text-black  font-extrabold text-3xl '>خصم يصل الى 50% عند استخدام الكوبون</h1></SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Sliderr
