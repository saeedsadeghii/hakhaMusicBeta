import Image from "next/image";
import React, { ReactNode } from "react";
import Album from "@/public/musicAlbums/bornToDie.jpg";
import { CloudDownload, Heart, Microphone } from "akar-icons";
import Link from "next/link";
import PlayPauseBtn from "../musicPlayer/PlayPauseBtn";
import  { motion } from 'framer-motion';
import { SongName } from "../functions/Functions";


const MusicLineBox = ({musicDetails}:any) => {
  // console.log("music data is: ",musicDetails)
  const MusicLineBoxAnimation ={
    hidden:{
      opacity:'0',
    },
    visible:{
      opacity:'1',
    }
  }
  return (
    <div
    key={musicDetails.id}
    className="p-1 article-glass flex rounded-2xl items-center rounded-l-full"
    initial={{opacity:0}}
    transition={{duration:0.4,delay:0.2}}
    animate={{opacity:1}}
    >
      <div className="flex items-center gap-x-3 sm:flex-3">
        <Image
          src={musicDetails.cover}
          alt="Album"
          width={70}
          height={70}
          className="rounded-2xl"
        />

        <div className="">
          <Link href={`/music/${musicDetails.pathName}`} className="gradient-text text-xl md:text-2xl font-yekanBold">{SongName(musicDetails.name,15)}</Link>
          <Link
            href={`/`}
            className="flex items-center text-gray-400 text-xs md:text-sm hover:underline"
          >
            <Microphone strokeWidth={1} size={16} />
            <Link href={`/artist/${musicDetails.en_singer}`}>{musicDetails.singer}</Link>
          </Link>
        </div>

      </div>
      <div className="text-sm sm:mr-3 text-gray-500 flex flex-1 flex-col sm:flex-row items-center">
        <Heart strokeWidth={1.5} size={25} className="cursor-pointer hover:text-red-500 duration-200"/>
      </div>

      <div className="hidden md:flex  text-sm text-gray-500 flex-2">
        {musicDetails.album}
      </div>

      <a href={musicDetails.url} download={musicDetails.name} className="sm:flex-2 flex-1 py-3 rounded-xl hover:bg-primary  justify-center flex items-center hover:text-forth duration-300 gap-x-2">
        <CloudDownload strokeWidth={1.5} size={25} />
        <span className="text-balance hidden sm:block">دانلود موزیک</span>
      </a>

      <div className="flex-1  flex justify-end ml-4">
        <PlayPauseBtn songID={musicDetails} />
      </div>
    </div>
  );
};

export default MusicLineBox;
