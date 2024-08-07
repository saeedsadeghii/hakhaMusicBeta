"use client"
import AlbumBox from "@/components/AlbumBox";
import { AlbumBoxLoader } from "@/components/loading/loading";
import SwiperComponent from "@/components/swiper/SwiperComponent";

import prisma from "@/utils/db";
import useSWR from "swr";

const FamousAlbums = () => {
  const fetcher = (url:string) => fetch(url).then((res) => res.json());
  const { data, error,isLoading } = useSWR('/api/songs/famousalbums', fetcher);
  console.log(data)
  const myOptions = {
    spaceBetween: 30,
    navigation: true,
    pagination: { clickable: true },
  };
  const musicSlides = data?.map((album:any) => (
    <AlbumBox albumDetails={album}/>
  ));
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-center text-4xl font-yekanBlack px-7 py-5 "><span>محبوب ترین آلبوم ها</span></h1>
      <div className="flex items-center rounded-3xl shadow-xl md:p-10 w-full">
        {!isLoading ?
                <SwiperComponent
                content={musicSlides}
                options={myOptions}
                BreakPoint={{
                  1600: {
                    slidesPerView: 4.05,
                  },
                  1268: {
                    slidesPerView: 3.05,
                  },
                  1000: {
                    slidesPerView: 2.05,
                  },
                  768: {
                    slidesPerView: 1.5,
                  },
                  370: {
                    slidesPerView: 1.04,
                  },
                }}
              />
              :
              <div className="flex flex-1 justify-around items-center flex-nowrap overflow-hidden gap-x-2"><AlbumBoxLoader/><AlbumBoxLoader/><AlbumBoxLoader/><AlbumBoxLoader/></div>
            }
      </div>
    </div>
  );
};

export default FamousAlbums;
