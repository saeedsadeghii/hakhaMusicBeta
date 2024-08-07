"use client";
import { Microphone, MusicAlbum, MusicNote, Pause, Play } from "akar-icons";
import Link from "next/link";
import React, { ReactNode, useContext, useEffect, useState } from "react";
import PlayPauseBtn from "./musicPlayer/PlayPauseBtn";
import { Music } from "@/types/types";
import { ContextProvider } from "./providers/Provider";
import { SongName } from "./functions/Functions";
const MusicBox: React.FC<any> = ({musicDetails}) => {
  const { isplaying, setIsPlaying, musicID, setMusicID,menuOpen } =
    useContext(ContextProvider);
  return (
    <div
      className="min-w-44 h-44 rounded-3xl bg-contain relative shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]"
      key={musicDetails.id}
      style={{ backgroundImage: `url(${musicDetails.cover})`,backgroundSize:'cover' }}
    >
      <div
        className="article-glass rounded-3xl absolute bottom-0 w-full flex items-center p-2 justify-between"
        dir="ltr"
      >
        <div className="">
          <h1 className="">
            <Link
              href={`/music/${musicDetails.pathName}`}
              className="text-lg font-semibold font-yekanBlack flex items-center duration-200 hover:underline hover:text-fifth"
            >
              <MusicNote strokeWidth={1.5} size={20} />
              {SongName(musicDetails.name,menuOpen ? 8 : 9)}
            </Link>
          </h1>
          <Link
            href={`/artist/${musicDetails.en_singer.toLowerCase()}`}
            className="text-sm font-thin  hover:underline flex items-center"
          >
            <Microphone strokeWidth={1.5} size={14} />
            {musicDetails.singer}
          </Link>
        </div>
        <div className="flex items-center justify-center">
          <PlayPauseBtn songID={musicDetails} />
        </div>
      </div>
    </div>
  );
};

export default MusicBox;
