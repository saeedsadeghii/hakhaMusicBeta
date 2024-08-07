"use client";
import { ChevronDown, ChevronUp, InfoFill, Language, PersonCheck } from "akar-icons";
import Image from "next/image";
import React, { useState } from "react";
import { SongName } from "../functions/Functions";
import Link from "next/link";

const ArtistCard = ({ artistDetails }: any) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <div className="element-glass cursor-pointer min-w-[200px] gap-y-1 flex flex-col h-72 rounded-tr-[40%] rounded-md">
      <Link href={`/artist/${artistDetails.en_singer}`} className="flex justify-center items-center main-gradient hover:main-gradient artist-card-radius">
        <Image
          src={artistDetails.image as string}
          alt="Artist Image"
          width={150}
          height={150}
          className="h-[150px] w-[150px]"
        />
      </Link>
      <div className="p-5 flex justify-between items-center">
        <Link href={`/artist/${artistDetails.en_singer}`} className="flex items-center gap-x-1 font-yekanBlack text-white hover:text-forth hover:underline duration-200">
          <PersonCheck strokeWidth={1.5} size={20} />
          <span>{SongName(artistDetails.name, 12)}</span>
        </Link>
        <h4 className="flex items-center gap-x-1 text-xs text-gray-500">
          <Language strokeWidth={1} size={15} />
          <span>{artistDetails.national}</span>
        </h4>
      </div>
      <div className="p-5 pt-0">
        <div className="flex items-center gap-x-2">
          <InfoFill strokeWidth={2} size={20} />
          <div className="flex-between gap-x-2">
            <p className="text-xs text-gray-40">
              {SongName(artistDetails.discription, !readMore ? 22 : 256)}
            </p>
            <button className="p-2 rounded-xl text-white article-glass flex justify-center items-center hover:border-third hover:text-third duration-200" onClick={()=>setReadMore(!readMore)}>
                {readMore ? <ChevronUp strokeWidth={1.5} size={10} /> :<ChevronDown strokeWidth={1.5} size={10} />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtistCard;
