import { Heart, Microphone, MoreVerticalFill, MusicAlbum } from "akar-icons";
import Image from "next/image";
import Link from "next/link";
import React, { ReactNode } from "react";
import { SongName } from "../functions/Functions";

const PlayListBox = ({ playlistDetails }: any) => {
  return (
    <div className="element-glass max-w-56 p-2 rounded-3xl h-fit md:h-[290px] flex justify-between items-center hover:scale-95 flex-col duration-300">
      <div className="w-full">
        <Image
          src={playlistDetails.cover}
          alt="PlayList Image"
          width={170}
          height={170}
          className="mx-auto w-full h-full rounded-2xl hover:grayscale duration-200"
        />
      </div>
      <div className="w-full flex flex-col mt-2 md:mt-0 gap-y-2">
        <Link
          href={`/playlist/${playlistDetails.pathName}`}
          className="flex items-center gap-x-1 hover:underline font-yekanBlack duration-200"
        >
          <MusicAlbum strokeWidth={1} size={20} />
          <span>{SongName(playlistDetails.name,25)}</span>
        </Link>
        <Link href={`/artist/${playlistDetails.en_singer}`} className="text-gray-500 flex gap-x-1">
          <Microphone strokeWidth={1} size={16} />
          <span className="text-xs">{playlistDetails.singer}</span>
        </Link>
      </div>

      <div className="w-full flex justify-between text-gray-400">
        <div className="flex items-center gap-x-2 cursor-pointer hover:text-third duration-300">
          <Heart strokeWidth={1} size={25} />
          <span>{0}</span>
        </div>
        <div className="pr-2 cursor-pointer hover:text-third duration-300">
          <MoreVerticalFill strokeWidth={1} size={20} />
        </div>
      </div>
    </div>
  );
};

export default PlayListBox;
