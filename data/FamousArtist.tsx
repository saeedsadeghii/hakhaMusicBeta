import { FamousArtistPrompt } from "@/types/types";
import axios from "axios";
import React from "react";
import prisma from "@/utils/db";
import Image from "next/image";
import BlueTick from "@/assets/imgIcons/BlueTick.png";
import Link from "next/link";
const FamousArtist = async () => {
  const getData = async () => {
    const artists = await prisma.artists.findMany({
      where: { famous: "yes" },
      skip: 0,
      take: 5,
      orderBy: { followers: "desc" },
    });
    return artists;
  };
  const famousArtists = await getData();
  return (
    <div className="flex flex-col gap-y-4 rounded-3xl ">
      <h1 className="font-yekanBold text-2xl mb-10 flex justify-between items-center"><span>خواننده های محبوب</span> <span className="text-xs font-yekan opacity-70"></span></h1>
      <div className="flex flex-col gap-y-2 overflow-y-scroll lg:max-h-[315px] xl:min-h-[350px] 2xl:max-h-max">
        {famousArtists.map((artist: any, index) => (
          <Link
            href={`/artist/${artist.en_singer}`}
            key={artist.id}
            className="flex items-center justify-between  element-glass overflow-hidden rounded-2xl border border-transparent hover:border-forth hover:border-double hover:text-forth duration-200"
          >
            <div className="flex items-center gap-x-5 w-full">
              <div className="main-gradient artist-line-radius overflow-hidden">
                <Image
                  src={artist.image}
                  alt="ArtistImage"
                  width={70}
                  height={70}
                  className="rounded-xl"
                />
              </div>
              <div>
                <h3 className="gradient-text font-yekanBlack text-xl flex items-center gap-x-1 mb-2">
                  <span>{artist.name}</span>
                  <Image src={BlueTick} alt="BT" width={17} height={17} />
                </h3>
                <h5 className="text-sm font-thin text-gray-400">{artist.discription}</h5>
              </div>
            </div>
            <div
              className="opacity-10 px-3 font-yekanBlack"
              style={{ fontSize: "1.5rem" }}
            >
              0{index + 1}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FamousArtist;
