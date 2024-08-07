"use client"
import { HorzientalLoader, MusicBoxLoader, MusicShowLoader } from "@/components/loading/loading";
import MusicShow from "@/components/MusicShow/MusicShow";
import SwiperComponent from "@/components/swiper/SwiperComponent";
import prisma from "@/utils/db";
import { ChevronLeft } from "akar-icons";
import Link from "next/link";
import React from "react";
import useSWR from "swr";
import { date } from "yup";

const PopBests = () => {
  const fetcher = (url:string) => fetch(url).then((res) => res.json());
  const { data, error,isLoading } = useSWR('/api/songs/popbests', fetcher);
  const myOptions = {
    spaceBetween: 20,
    navigation: true,
    pagination: { clickable: true },
  };
  const musicSlides = data?.map((music:any) => (
    <MusicShow songDetails={music}/>
  ));
  return (
    <div className="w-full h-full">
      <div className="flex justify-between items-center">
        <h1 className="title-h1">بهترین های پاپ</h1>
        <Link
          href={`/genre/monstFamous`}
          className="flex gap-x-1 text-sm text-gray-500 items-center"
        >
          <span>دیدن همه</span>
          <ChevronLeft strokeWidth={1} width={15} />
        </Link>
      </div>
      <div>
        {!isLoading ?
                <SwiperComponent
                content={musicSlides}
                options={myOptions}
                BreakPoint={{
                  1700: {
                    slidesPerView: 9,
                  },
                  1500: {
                    slidesPerView: 8,
                  },
                  1300: {
                    slidesPerView: 7,
                  },
                  1100: {
                    slidesPerView: 6,
                  },
                  868: {
                    slidesPerView: 5,
                  },
                  768: {
                    slidesPerView: 4,
                  },
                  568: {
                    slidesPerView: 4,
                  },
                  468: {
                    slidesPerView: 2.5,
                  },
                  368: {
                    slidesPerView: 2.5,
                  },
                }}
              />
            :
            <div className="flex flex-nowrap gap-2 overflow-hidden">
                <MusicShowLoader/>
                <MusicShowLoader/>
                <MusicShowLoader/>
                <MusicShowLoader/>
                <MusicShowLoader/>
                <MusicShowLoader/>
                <MusicShowLoader/>
                <MusicShowLoader/>
                <MusicShowLoader/>
                <MusicShowLoader/>
            </div>
            }
      </div>
    </div>
  );
};

export default PopBests;
