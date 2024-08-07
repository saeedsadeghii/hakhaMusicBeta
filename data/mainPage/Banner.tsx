"use client";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectCreative,
  Autoplay,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-creative";
import Image from "next/image";
import banner from "@/assets/banners/2.png";
import Link from "next/link";
import { useRef } from "react";
export const Banner = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s: any, time: any, progress: any) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <Swiper
    style={{
        '--swiper-navigation-color': '#916eff',
        '--swiper-pagination-color': '#916eff',
      }}
      className="" // install Swiper modules
      modules={[Navigation, Scrollbar, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      // autoplay={{
      //   delay: 5500,
      //   disableOnInteraction: false,
      // }}
      navigation
      onAutoplayTimeLeft={onAutoplayTimeLeft}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      <SwiperSlide className="">
        <Link href={"/"} className="w-full h-full">
          <Image
            className="w-full h-full object-contain"
            src={banner}
            alt="banner"
            loading="lazy"
          />
        </Link>
      </SwiperSlide>
      <SwiperSlide className="">
        <Link href={"/"} className="w-full h-full">
          <Image
            className="w-full h-full object-contain"
            src={banner}
            alt="banner"
            loading="lazy"
          />
        </Link>
      </SwiperSlide>
      <div className="autoplay-progress " slot="container-end">
        <svg viewBox="0 0 48 48" ref={progressCircle}>
          <circle cx="24" cy="24" r="20"></circle>
        </svg>
        <span ref={progressContent}></span>
      </div>
    </Swiper>
  );
};

{
  /* <Swiper
        dir="rtl"
      className="rounded-xl h-[300px] mySwiper3"
      grabCursor={true}
      effect={"creative"}
      creativeEffect={{
        prev: {
          shadow: true,
          translate: ["-20%", 0, -1],
        },
        next: {
          translate: ["100%", 0, 0],
        },
      }}
      modules={[EffectCreative]}
    >
      <SwiperSlide>
        <Link href={"/"} className="w-full h-full">
          <Image
            className="w-full h-full object-contain"
            src={banner}
            alt="banner"
          />
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link href={"/"} className="w-full h-full">
          <Image
            className="w-full h-full object-contain"
            src={banner}
            alt="banner"
          />
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link href={"/"} className="w-full h-full">
          <Image
            className="w-full h-full object-contain"
            src={banner}
            alt="banner"
          />
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link href={"/"} className="w-full h-full">
          <Image
            className="w-full h-full object-contain"
            src={banner}
            alt="banner"
          />
        </Link>
      </SwiperSlide>
    </Swiper>
 */
}
