import React from 'react'
import { SongName } from "@/components/functions/Functions";
import PlayPauseBtn from "@/components/musicPlayer/PlayPauseBtn";
import MusicShow from "@/components/MusicShow/MusicShow";
import SwiperComponent from "@/components/swiper/SwiperComponent";
import FamousAlbums from "@/data/FamousAlbums";
import prisma from "@/utils/db";
import { ArrowRight, ChevronLeft, Microphone } from "akar-icons";
import Image from "next/image";
import Link from "next/link";

const MostFamous = async () => {
    const getData = async () => {
        try {
          const response = await prisma.musics.findMany();
          return response;
        } catch (error) {
          console.error("Request Failed");
        }
      };
      const songs = await getData();
    
      const myOptions = {
        spaceBetween: 15,
        navigation: true,
        pagination: { clickable: true },
        // coverflowEffect={{
        //   rotate: 50,
        //   stretch: 0,
        //   depth: 100,
        //   modifier: 1,
        //   slideShadows: true,
        // }}
      };
      const musicSlides = songs?.map((song: any) => (
        <MusicShow songDetails={song}/>
      ));
      return (
        <div className="w-full">
          <div className='flex justify-between items-center'>
          <h1 className="title-h1">محبوب ترین ها</h1>
          <Link href={`/genre/monstFamous`} className='flex gap-x-1 text-sm text-gray-500 items-center'><span>دیدن همه</span><ChevronLeft strokeWidth={1} width={15}/></Link>
          </div>
          <SwiperComponent
            content={musicSlides}
            options={myOptions}
            BreakPoint={{
              1400: {
                slidesPerView: 8,
              },
              868: {
                slidesPerView: 7,
              },
              568: {
                slidesPerView: 5,
              },
              400: {
                slidesPerView: 2.5,
              },
              370: {
                slidesPerView: 2.2,
              },
            }}
          />
        </div>
      );
}

export default MostFamous