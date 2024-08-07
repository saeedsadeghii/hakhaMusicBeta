'use client'
import React, { useContext } from "react";
import {motion, spring} from 'framer-motion'
import Image from "next/image";
import RadioWave from '@/assets/imgIcons/voice.png';
import { ContextProvider } from "../providers/Provider";
const MultiPlayPouseBtn = ({songID}:any) => {
    const {
        isplaying,
        setIsPlaying,
        setMusicID,
        setOpenMP,
        openMP,
        iswavesurfer,
        musicID,
      } = useContext(ContextProvider);
      const MBhandlePlayPause = () => {
        setMusicID(songID)
        setOpenMP(true);
        setIsPlaying(true)
      };
  return (
    <div>
      <motion.div
        whileHover={{
          scale: 1.1,
        }}
      >
        <button className="musicBoxPlayPause" onClick={MBhandlePlayPause}>
          <Image src={RadioWave} alt="Sound Wave" width={28} height={28} />
        </button>
      </motion.div>
      
    </div>
  );
};

export default MultiPlayPouseBtn;
