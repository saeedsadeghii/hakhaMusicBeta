import Button from "@/components/Button";
import Like from "@/components/like/Like";
import MusicLineBox from "@/components/musicLineBox/MusicLineBox";
import PlayPauseBtn from "@/components/musicPlayer/PlayPauseBtn";
import { authOptions } from "@/utils/auth";
import prisma from "@/utils/db";
import {
  Alarm,
  CloudDownload,
  DoubleCheck,
  MusicNote,
  PersonCheck,
} from "akar-icons";
import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = async ({ params }: any) => {
  const playlistName = params.segmentName;
  const session = await getServerSession(authOptions);
  const getData = async () => {
    try {
      const response = await prisma.playlist.findFirst({
        where: { pathName: playlistName },
      });
      const musics = await prisma.musics.findMany({
        where: { playlist: response?.name },
      });
      const updatedvisitedCount = await prisma.playlist.update({
        where: { id: response?.id },
        data: { visited: { increment: 1 } },
      });
      const user = await prisma.user.findFirst({
        where: { email: session?.user?.email },
      });
      const userId = user?.id;
      return { response, musics,userId };
    } catch (error) {
      console.log(error);
    }
  };
  const data = await getData();
  const playlist = data?.response;
  const musics = data?.musics;
  const userId = data?.userId;
  const likeCheck = async () => {
    const foundMusic = await prisma.playlist.findFirst({
      where: {
        id: playlist?.id,
        likes: {
          some: {
            userId: userId,
          },
        },
      },
    });
    if (foundMusic !== null) {
      return true;
    } else {
      return false;
    }
  };
  const isLiked = await likeCheck();
  return (
    <article>
      <div
        className="w-full bg-primary shadow-md rounded-s-full p-5 ps-0 flex md:flex-row flex-col gap-x-8
        justify-center items-center md:items-start md:justify-start md:h-[275px]"
      >
        <div className="w-5/6 md:w-[240px]">
          <Image
            src={playlist?.cover as string}
            width={400}
            height={400}
            alt="play list name"
            className="w-full rounded-2xl"
          />
        </div>

        <div className="pt-6 flex flex-col justify-between h-full">
          <div className="flex flex-col gap-y-5">
            <h1 className="gradient-text font-yekanBlack text-4xl">
              <span>{playlist?.name}</span>
            </h1>
            <div className="flex gap-y-1 flex-col">
              <h5 className="flex items-center gap-x-1">
                <MusicNote strokeWidth={1.5} size={16} />
                <span>{playlist?.genre}</span>
              </h5>
              <h5 className="flex items-center gap-x-1">
                <DoubleCheck strokeWidth={1.5} size={16} />
                <span>{playlist?.visited?.toLocaleString("FA-IR")} نفر</span>
              </h5>
            </div>
          </div>
          <div className="flex gap-x-5 items-center justify-between md:justify-start">
            <PlayPauseBtn songID={musics} />
            <Button  px="px-5">
              <CloudDownload strokeWidth={2} size={22} />
              <span>دانلود پلی لیست</span>
            </Button>
            <Like
              identifyMusic={playlist?.id}
              userId={userId}
              isLiked={isLiked}
              contentType="playlist"
              Disabeld={session?false:true}
            />
          </div>
        </div>
      </div>

      <div className="px-[5vw] py-10 flex-col flex gap-y-4">
        {musics?.map((music) => (
          <MusicLineBox musicDetails={music} />
        ))}
      </div>
    </article>
  );
};

export default page;
