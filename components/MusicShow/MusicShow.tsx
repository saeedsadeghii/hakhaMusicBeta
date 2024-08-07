"use client";
import Link from "next/link";
import React, { useState } from "react";
import { SongName } from "../functions/Functions";
import Image from "next/image";
import { Microphone } from "akar-icons";
import PlayPauseBtn from "../musicPlayer/PlayPauseBtn";
import {motion} from 'framer-motion'

const MusicShow = ({ songDetails,classes }: any) => {
  const [hoveredSong, setHoveredSong] = useState(null);
  return (
    <div
      key={songDetails.id}
      className={`flex flex-col justify-center items-center gap-y-1 rounded-3xl cursor-pointer ${classes}`}
    >
      <div 
      className="relative"
      onMouseEnter={() => setHoveredSong(songDetails.id)}
      onMouseLeave={() => setHoveredSong(null)}
      >
        <Image
          src={songDetails.cover as string}
          width={340}
          height={340}
          alt="Album"
          className="rounded-3xl shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] border-2 border-double border-transparent hover:border-secondary duration-300"
        />
        {hoveredSong === songDetails.id && (
          <motion.div className="absolute -bottom-1 -right-1 w-24 bg-primary p-4 rounded-l-3xl rounded-b-3xl"
          initial={{y:'5vw',opacity:0}}
          animate={{y:0,opacity:1}}
          transition={{delay:0,duration:0.1,type:"spring",stiffness:200}}
          >
            <div className="flex justify-end items-end"><PlayPauseBtn songID={songDetails} /></div>
          </motion.div>
        )}
      </div>
      <div>
        <Link href={`/music/${songDetails.pathName}`} className="musicshow-name hover:underline gradient-text">
          {SongName(songDetails.name, 15)}
        </Link>
        <Link
          href={`/artist/${songDetails.en_singer}`}
          className="musicshow-singer"
        >
          <Microphone strokeWidth={1} width={12} />
          <span>{songDetails.singer}</span>
        </Link>
      </div>
    </div>
  );
};

export default MusicShow;
