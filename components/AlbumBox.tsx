
import { AlbumBoxPrompt, albumPrompt } from "@/types/types";
import { Calendar, Heart, Language, Microphone, MusicAlbumFill } from "akar-icons";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SongName } from "./functions/Functions";

const AlbumBox = ({albumDetails}:any) => {
  return (
    <Link href={`/album/${albumDetails.pathName.toLocaleLowerCase()}`}
      key={albumDetails.id}
      style={{
        backgroundImage: `url(${albumDetails.cover})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        backgroundBlendMode: "multiply",
      }}
      className={`flex items-end gap-x-5 p-3 relative h-60 w-full rounded-2xl shadow-[5px_5px_0px_0px_#322a77] m-3 hover:shadow-[5px_5px_0px_0px_#ff88fe] hover:pb-14 hover:md:px-7 duration-300`}
    >
      <Image
        src={albumDetails.cover}
        width={100}
        height={100}
        alt={`آلبوم: ${albumDetails.name}`}
        className="rounded-xl shadow-[0px_5px_20px_0px_#41414133]"
      />
      <div className="w-full">
        <div className="flex items-center gap-x-2 font-yekanBold text-2xl">
          <MusicAlbumFill strokeWidth={1} size={26} />
          <span className="">{SongName(albumDetails.name,20)}</span>
        </div>
        <div className="flex items-center gap-x-1 mt-2">
          <Microphone strokeWidth={1} size={16} />
          <span className="text-sm text-gray-400">{albumDetails.singer}</span>
        </div>

        <div className="flex justify-between w-full mt-5">
        <div className="flex items-center gap-x-1">
          <Language strokeWidth={1} size={16} />
          <span className="text-sm text-gray-400">{albumDetails.language}</span>
        </div>
        <div className="flex items-center gap-x-1">
          <Calendar strokeWidth={1} size={16} />
          <span className="text-sm text-gray-400">
            {albumDetails.year}
            {/* {albumDetails.year.getFullYear()}*/}
          </span>
        </div>
        </div>

      </div>
      <div className="absolute top-5 left-3 cursor-pointer flex items-center gap-x-2">
        <span>{albumDetails.like}</span>
        <Heart
          strokeWidth={1}
          size={30}
          className=" hover:text-red-500 duration-200"
        />
      </div>
    </Link>
  );
};

export default AlbumBox;
