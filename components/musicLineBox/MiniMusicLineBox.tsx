import React, { ReactNode } from "react";
import Image from "next/image";
import Album from "@/public/musicAlbums/bornToDie.jpg";
import { CloudDownload, Heart, Microphone } from "akar-icons";
import Link from "next/link";
import PlayPauseBtn from "../musicPlayer/PlayPauseBtn";
import  { motion } from 'framer-motion';
import { SongName } from "../functions/Functions";

const MiniMusicLineBox = ({musicDetails}:any) => {
  return (
    <div
      key={musicDetails.musicId}
      className="p-1 article-glass border-r-4 border-transparent hover:border-r-secondary hover:border-r-4  duration-200 flex rounded-full items-center "
      initial={{ opacity: 0 }}
      transition={{ duration: 0.4, delay: 0.2 }}
      animate={{ opacity: 1 }}
    >
      <div className="flex items-center gap-x-3 flex-3">
        <Image
          src={musicDetails.musicCover || musicDetails.cover}
          alt="Album"
          width={60}
          height={60}
          className="rounded-2xl"
        />

        <div className="">
          <h2 className="gradient-text text-xl font-yekanBold">
            {SongName(musicDetails.musicName || musicDetails.name,15)}
          </h2>
          <Link
            href={`/artist/${musicDetails.en_singer || musicDetails.musicEnName}`}
            className="flex items-center text-gray-400 text-xs md:text-sm hover:underline"
          >
            <Microphone strokeWidth={1} size={16} />
            <span>{musicDetails.musicSinger || musicDetails.singer}</span>
          </Link>
        </div>

      </div>

      <Link
        href={musicDetails.musicUrl || musicDetails.url}
        className="flex-1 py-3 rounded-xl hover:bg-primary  justify-center flex items-center hover:text-forth duration-300 gap-x-2"
      >
        <CloudDownload strokeWidth={1.5} size={25} />
      </Link>

      <div className="flex-1  flex justify-end ml-4">
        <PlayPauseBtn songID={musicDetails} />
      </div>
    </div>
  );
};

export default MiniMusicLineBox;
