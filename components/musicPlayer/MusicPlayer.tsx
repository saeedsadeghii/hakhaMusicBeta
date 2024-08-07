"use client";
import Image from "next/image";
import {
  ChevronDown,
  ChevronUp,
  Download,
  EyeClosed,
  Ribbon,
  SoundOn,
} from "akar-icons";
import Link from "next/link";
import { TriangleLeft, TriangleRight } from "akar-icons";
import React, { useState, useEffect, useRef, useContext } from "react";
import WaveSurfer from "wavesurfer.js";

import { MusicPlayerInfoLoader, PlayBtnLoader, VoiceDownloadLoader } from "../loading/loading";
import { ContextProvider } from "../providers/Provider";
import PlayPauseBtn from "./PlayPauseBtn";
import {motion} from 'framer-motion'
import Button from "../Button";
import { FormatTime, SongName } from "../functions/Functions";

const MusicPlayer = () => {
  const {
    isplaying,
    setIsPlaying,
    iswavesurfer,
    setIsWavesurfer,
    musicID,
    setMusicID,
    openMP,
    setOpenMP
  } = useContext(ContextProvider);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [musicDuration, setMusicDuration] = useState<number|string>();
  const [currentTime, setCurrentTime] = useState<number|string>();
  const [wavesurferLoading, setWavesurferLoading] = useState<boolean>(true);
  //const [CurrentSong, setCurrentSong] = useState<any>();
  const [fullScreen, setFullScreen] = useState(false);
  const waveformRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (waveformRef.current && musicID.length > 0) {
      let wavesurfer = WaveSurfer.create({
        container: waveformRef.current,
        url: musicID[currentSongIndex].url,
        waveColor: "#c4c4c4",
        progressColor: "#322a77",
        dragToSeek: true,
        width: '100%',
        hideScrollbar: false,
        normalize: false,
        barGap: 1,
        barHeight: 1,
        barRadius: 20,
        barWidth: 7,
        cursorColor: "#8d9dfe",
        cursorWidth: 2,
        height: 25,
        duration: 60,
      });
      setIsWavesurfer(wavesurfer);
      wavesurfer.on("error", (err) => {
        console.error("Error loading audio:", err);
      });
      wavesurfer.on("ready", () => {
        const songDuration = wavesurfer.getDuration();
        const formattedsongDuration = FormatTime(songDuration)
        setMusicDuration(formattedsongDuration)
        wavesurfer.play()
        setWavesurferLoading(false)
      });
      

      wavesurfer.on("timeupdate", () => {
        if (wavesurfer) {
          const musicCurrentTime = wavesurfer.getCurrentTime();
          const formattedCurrentTime = FormatTime(musicCurrentTime)
          setCurrentTime(formattedCurrentTime);
        }
      });

      wavesurfer.on("play", () => {
        setIsPlaying(true);
      });


      wavesurfer.on("finish", () => {
        //wavesurfer.destroy();
        const newIndex = (currentSongIndex + 1) % musicID.length;
        setCurrentSongIndex(newIndex);
      });
      return () => wavesurfer.destroy();
    }
  }, [musicID,currentSongIndex,waveformRef.current]);

  const handlePreviousSong = () => {
    const newIndex = currentSongIndex - 1;
    setCurrentSongIndex(newIndex >= 0 ? newIndex : musicID.length - 1);
  };

  const handleNextSong = () => {
    const newIndex = (currentSongIndex + 1) % musicID.length;
    setCurrentSongIndex(newIndex);
  };
//${!openMP ? 'scale-0' :''}
const musicPlayerVariant ={
  hidden:{
    y:'100vh',
  },
  visible:{
    y:0,
  }
}
if(openMP){
  return (
    <motion.div
    variants={musicPlayerVariant}
    initial="hidden"
    animate='visible'
      className={`z-50 ${
        fullScreen ? "h-full inset-0" : "w-full bottom-0 right-0 left-0 p-2 "
      }${!openMP ? 'scale-0' :''}
    absolute z-30`}
      dir="ltr"
    >
      <div
        className={`${
          fullScreen
            ? "flex flex-col p-[5vw] pt-[10vw] bg-black h-full"
            : "h-28 my-auto border-double musicPlayer-glass rounded-3xl flex items-center content-center justify-between p-3 relative border border-transparent hover:shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] hover:duration-200"
        }`}
      >
        {wavesurferLoading ? (
          <MusicPlayerInfoLoader />
        ) : (
          <div
            className={`${
              fullScreen
                ? "flex flex-col items-center justify-center"
                : "flex flex-1 items-center gap-x-5"
            }`}
          >
            <Image
        
              src={musicID[currentSongIndex]?.cover}
              alt="music-album"
              width={400}
              height={400}
              className={`${
                fullScreen
                  ? "w-full max-w-[400px] rounded-2xl mb-5"
                  : "rounded-2xl max-w-32 w-[80px]"
              } shadow-indigo-950`}
            />
            <motion.div
            initial={{ y:'30vw'}}
            animate={{y:0}}
            transition={{delay:0.1,duration:0.3,type:"spring",stiffness:65}}
            className="w-full"
            >
              <h2
                className={
                  fullScreen
                    ? "flex items-start justify-between w-full"
                    : "flex gap-x-3 items-center"
                }
              >
                <span
                  className={`${
                    fullScreen
                      ? "font-yekanBold text-3xl gradient-text "
                      : "text-lg font-semibold"
                  }`}
                >
                  {SongName(musicID[currentSongIndex]?.name,20)}
                </span>
                <Ribbon
                  strokeWidth={1.5}
                  size={20}
                  className={`${
                    fullScreen
                      ? "hover:text-third duration-300"
                      : "hidden md:block"
                  }`}
                />
              </h2>
              <Link
                href={`/artist/${musicID[currentSongIndex]?.en_singer}`}
                className="font-yekan hover:underline duration-200"
              >
                {musicID[currentSongIndex]?.singer}
              </Link>
            </motion.div>
          </div>
        )}
        <div className={`${fullScreen ? " mt-3 flex flex-col-reverse" : "flex-1"}`}>
          {wavesurferLoading ? (
            <PlayBtnLoader />
          ) : (
            <div className={`flex items-center gap-x-3 justify-center m-2`}>
              <button
                onClick={handlePreviousSong}
                className={`${fullScreen ? "" : "hidden md:block"}`}
              >
                <TriangleLeft strokeWidth={1} size={30} />
              </button>
  
              <PlayPauseBtn/>
  
              <button onClick={handleNextSong} className="">
                <TriangleRight strokeWidth={1} size={30} />
              </button>
            </div>
          )}
          <div
            className={`${
              fullScreen
                ? "w-full relative pb-8"
                : "md:flex items-center gap-x-2 hidden"
            }`}
          >
            <span
              className={`${
                fullScreen
                  ? "absolute bottom-0 left-2"
                  : "text-sm text-gray-400"
              }`}
            >
              {currentTime ? currentTime : '00:00'}
            </span>
            <div ref={waveformRef} className={`waveform w-full md:w-[30vw]`}></div>

            <span
              className={`${
                fullScreen
                  ? "absolute bottom-0 right-2"
                  : "text-sm text-gray-400"
              }`}
            >
              {musicDuration ? musicDuration : '..'}
            </span>
          </div>
        </div>
        {wavesurferLoading ? (
          <VoiceDownloadLoader />
        ) : (
          <div
            className={`${
              fullScreen
                ? "flex justify-between flex-row-reverse mt-[2vw] gap-y-4 items-center"
                : "hidden md:flex"
            } flex-1 md:flex items-center gap-x-3 justify-end `}
          >
            <Button href={`${musicID[currentSongIndex]?.url}`} Dowloaded={musicID[currentSongIndex].name}>
              <Download strokeWidth={2} size={20} />
            </Button>
  
            <div
              className={`flex items-center gap-x-2`}
            >
              <SoundOn strokeWidth={1} size={20} />
              <input
                type="range"
                id="soundProgress"
                style={{ width: "80px" }}
              />
            </div>
          </div>
        )}
        <button
          className={`${
            fullScreen ? "bg-primary  p-5 rounded-3xl right-4 top-4" : "md:hidden right-8 -top-5 px-3 bg-primary rounded-t-full"
          } block absolute hover:text-third duration-200`}
          onClick={(e) => {
            e.preventDefault();
            setFullScreen(!fullScreen);
          }}
        >
          {fullScreen ? (
            <ChevronDown strokeWidth={1} size={20} />
          ) : (
            <ChevronUp strokeWidth={1} size={20} />
          )}
        </button>
        <div className="absolute -top-5 left-7 px-3 bg-primary rounded-t-full hover:text-third duration-200 cursor-pointer" onClick={()=>setOpenMP(false)}>
          <EyeClosed strokeWidth={1.5} size={20} />
        </div>
      </div>
    </motion.div>
  );
}
};

export default MusicPlayer;
