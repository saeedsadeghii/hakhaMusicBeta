"use client";
import { MusicShowLoader } from "@/components/loading/loading";
import MusicShow from "@/components/MusicShow/MusicShow";
import SearchInput from "@/components/Search/SearchInput";
import SwiperComponent from "@/components/swiper/SwiperComponent";
import { notFound } from "next/navigation";
import React, { useEffect } from "react";
import useSWR from "swr";
interface MusicData{
  id: string;
  genre: string;
}
const page = () => {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, error, isLoading } = useSWR("/api/songs/lastsongs", fetcher);
  const myOptions = {
    spaceBetween: 20,
    navigation: true,
    pagination: { clickable: true },
  };
  const popMusics = data?.filter((i: MusicData) => i.genre === "پاپ")
  .map((i: MusicData) => <MusicShow songDetails={i} />);
  const rapMusics = data?.filter((i: MusicData) => i.genre === "pop")
  .map((i: MusicData) => <MusicShow songDetails={i} />);
  const DanceElectronicMusics = data?.filter((i: MusicData) => i.genre === "دنس الکترونیک")
  .map((i: MusicData) => <MusicShow songDetails={i} />);

  return (
    <article className="p-2 md:p-0">
      <div className="w-full grid grid-cols-1">
        <h1 className="title-h1">جدید ترین های پاپ</h1>
        <div className="col-span-1">
          {!isLoading ? 
          <SwiperComponent content={popMusics} options={myOptions} BreakPoint={
            {
              1700: {
                slidesPerView: 8,
              },
              1600: {
                slidesPerView: 6.5,
              },
              1550: {
                slidesPerView: 6,
              },
              1500: {
                slidesPerView: 5.5,
              },
              1400: {
                slidesPerView: 5,
              },
              1000: {
                slidesPerView: 4,
              },
              888: {
                slidesPerView: 5,
              },
              800: {
                slidesPerView: 4,
              },
              568: {
                slidesPerView: 3.5,
              },
              400: {
                slidesPerView: 3,
              },
              399: {
                slidesPerView: 2.5,
              },
              350: {
                slidesPerView: 2.20,
              },
              300: {
                slidesPerView: 2,
              },
            }
          } />
         : 
         <div className="flex items-center gap-x-10 flex-nowrap justify-center"><MusicShowLoader/><MusicShowLoader/><MusicShowLoader/><MusicShowLoader/><MusicShowLoader/><MusicShowLoader/><MusicShowLoader/><MusicShowLoader/><MusicShowLoader/></div>
        }
      </div>
      </div>
      <div className="w-full grid grid-cols-1">
        <h1 className="title-h1">جدید ترین های رپ</h1>
        <div className="col-span-1">
          {!isLoading ? 
          <SwiperComponent content={rapMusics} options={myOptions} BreakPoint={
            {
              1700: {
                slidesPerView: 8,
              },
              1600: {
                slidesPerView: 6.5,
              },
              1550: {
                slidesPerView: 6,
              },
              1500: {
                slidesPerView: 5.5,
              },
              1400: {
                slidesPerView: 5,
              },
              1000: {
                slidesPerView: 4,
              },
              888: {
                slidesPerView: 5,
              },
              800: {
                slidesPerView: 4,
              },
              568: {
                slidesPerView: 3.5,
              },
              400: {
                slidesPerView: 3,
              },
              399: {
                slidesPerView: 2.5,
              },
              350: {
                slidesPerView: 2.20,
              },
              300: {
                slidesPerView: 2,
              },
            }
          } />
         : 
         <div className="flex items-center gap-x-10 flex-nowrap justify-center"><MusicShowLoader/><MusicShowLoader/><MusicShowLoader/><MusicShowLoader/><MusicShowLoader/><MusicShowLoader/><MusicShowLoader/><MusicShowLoader/><MusicShowLoader/></div>
        }
      </div>
      </div>
      <div className="w-full grid grid-cols-1">
        <h1 className="title-h1">جدید ترین های دنس الکترونیک</h1>
        <div className="col-span-1">
          {!isLoading ? 
          <SwiperComponent content={DanceElectronicMusics} options={myOptions} BreakPoint={
            {
              1700: {
                slidesPerView: 8,
              },
              1600: {
                slidesPerView: 6.5,
              },
              1550: {
                slidesPerView: 6,
              },
              1500: {
                slidesPerView: 5.5,
              },
              1400: {
                slidesPerView: 5,
              },
              1000: {
                slidesPerView: 4,
              },
              888: {
                slidesPerView: 5,
              },
              800: {
                slidesPerView: 4,
              },
              568: {
                slidesPerView: 3.5,
              },
              400: {
                slidesPerView: 3,
              },
              399: {
                slidesPerView: 2.5,
              },
              350: {
                slidesPerView: 2.20,
              },
              300: {
                slidesPerView: 2,
              },
            }
          } />
         : 
         <div className="flex items-center gap-x-10 flex-nowrap justify-center"><MusicShowLoader/><MusicShowLoader/><MusicShowLoader/><MusicShowLoader/><MusicShowLoader/><MusicShowLoader/><MusicShowLoader/><MusicShowLoader/><MusicShowLoader/></div>
        }
      </div>
      </div>
    </article>
  );
};

export default page;
