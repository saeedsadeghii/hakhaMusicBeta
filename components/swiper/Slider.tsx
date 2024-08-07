'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
export const Slide =({children}:{children:JSX.Element})=>(
    <SwiperSlide>{children}</SwiperSlide>
)

export const Slider = ({children}:{children:JSX.Element}) => {
  return (
    <Swiper
    spaceBetween={50}
    slidesPerView={5}
    onSlideChange={() => console.log('slide change')}
    onSwiper={(swiper) => console.log(swiper)}
  >
    {children}
  </Swiper>
  )
}

export default Slider