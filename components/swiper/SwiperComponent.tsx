"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-coverflow';
const SwiperComponent = ({ content, options = {} ,BreakPoint}:any) => {
  return (
    <Swiper
    breakpoints={BreakPoint}
    style={{
      '--swiper-navigation-color': '#916eff',
      '--swiper-pagination-color': '#916eff',
    }}
      {...options}
      modules={[Navigation, Scrollbar, A11y]}
    >
      {content?.map((item:any, index:any) => (
        <SwiperSlide key={index}>
          {item}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperComponent;
