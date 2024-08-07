"use client";
import React, { useContext, useEffect, useState } from "react";
import { ContextProvider } from "../providers/Provider";
import { Pause, Play } from "akar-icons";
import RadioWave from '@/assets/imgIcons/voice.png';
import Image from "next/image";
import {motion, spring} from 'framer-motion'
const PlayPauseBtn = ({ songID }:any) => {
  //const musicDetail = useSearchParams();
  const {
    isplaying,
    setIsPlaying,
    setMusicID,
    setOpenMP,
    openMP,
    iswavesurfer,
    musicID,
  } = useContext(ContextProvider);


  const [localIsPlaying, setLocalIsPlaying] = useState(false);
  const MusicBoxPlayPause = () => {
    const MBhandlePlayPause = () => {
      if (Array.isArray(songID)) {
        setMusicID(songID)
      }else{
        setMusicID([songID])
      }
      setOpenMP(true);
      setIsPlaying(true)
    };
    return (
      <motion.div
      whileHover={{
        scale:1.1,
      }}
      >
        <button className="musicBoxPlayPause" onClick={MBhandlePlayPause}>
          <Image src={RadioWave} alt="Sound Wave" width={28} height={28}/>
        </button>
      </motion.div>
    );
  };
  const MusicPlayerPlayPause = () => {
    const MPhandlePlayPause = () => {
      if (iswavesurfer) {
        if (isplaying) {
          iswavesurfer.pause();
        } else {
          iswavesurfer.play();
        }
        setIsPlaying(!isplaying); 
      }
      
    };
    return (
      <div>
        <motion.button
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:0.,delay:0.1,type:'spring'}}
        whileHover={{
          scale:1.1,
          boxShadow:'0px 0px 5px #030610',
        }}
        className="playPauseBtn" onClick={MPhandlePlayPause}
        >
          {isplaying ? (
            <Pause strokeWidth={2} size={30} />
          ) : (
            <Play strokeWidth={2} size={30} />
          )}
        </motion.button>
      </div>
    );
  };
  return songID ? MusicBoxPlayPause() : MusicPlayerPlayPause()
};
export default PlayPauseBtn;


      // setMusicID([songID]);
      // setOpenMP(true);
      //setLocalIsPlaying(!localIsPlaying);
      // setMusicID(Array.isArray(songID) ? songID : [songID]);
      // const MBhandlePlayPause = () => {
      //   if (localIsPlaying) {
      //     return setIsPlaying(true);
      //   } else if(!localIsPlaying){
      //     setOpenMP(true);
      //     if (Array.isArray(songID)) {
      //       setMusicID(songID)
      //     }else{
      //       setMusicID([songID])
      //     }
      //     console.log(musicID)
      //     return setIsPlaying(false);
      //   }
      // };