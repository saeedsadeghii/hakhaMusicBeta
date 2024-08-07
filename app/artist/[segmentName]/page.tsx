import AlbumBox from "@/components/AlbumBox";
import AlbumLineBox from "@/components/albumLineBox/AlbumLineBox";
import Like from "@/components/like/Like";
import MusicLineBox from "@/components/musicLineBox/MusicLineBox";
import { authOptions } from "@/utils/auth";
import prisma from "@/utils/db";
import {
  CircleCheck,
  Language,
  MusicAlbum,
  MusicAlbumFill,
  PersonCheck,
} from "akar-icons";
import { getServerSession } from "next-auth";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";

const page = async ({ params }: { params: any }) => {
  const singerName = params.segmentName;
  const session = await getServerSession(authOptions);
  const getData = async () => {
    // Single function for both album and songs
    try {
      const artist = await prisma.artists.findFirst({
        where: { en_singer: singerName },
      });
      const musics = await prisma.musics.findMany({
        where: { en_singer: singerName },
      });
      const albums = await prisma.albums.findMany({
        where: { en_singer: singerName },
      });
      const user = await prisma.user.findFirst({
        where: { email: session?.user?.email },
      });
      const userId = user?.id;
      return { artist, musics, albums, userId };
    } catch (error) {
      console.error("Request Failed:", error);
    }
  };
  const data = await getData();
  const artist = data?.artist;
  if (!artist) {
    console.error("Artist not found");
    return notFound();
  }
  const artistSongs = data?.musics;
  const artsitAlbums = data?.albums;
  const userId = data.userId;

  const likeCheck = async () => {
    const foundMusic = await prisma.artists.findFirst({
      where: {
        id: artist?.id,
        likes: {
          some: {
            userId,
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
    <article className={``}>
      <div key={artist.id} className="flex flex-col md:flex-row justify-center items-center md:justify-start md:items-start md:gap-x-5 py-5">
        <div className="bg-gradient-to-r from-indigo-500 to-forth w-4/5 md:w-[200px] md:h-[200px] artist-radius overflow-hidden">
          <Image
            src={artist?.image as string}
            alt="Artist Image"
            width={600}
            height={600}
            className="w-full h-full object-fill"
          />
        </div>
        <div className="pt-8 flex flex-col md:w-fit w-4/5">
          <div>
            {artist?.famous === "yes" ? (
              <h3 className="flex items-center gap-x-2 text-gray-400 text-base">
                <span>هنرمند تایید شده</span>
                <CircleCheck
                  className="text-blue-700"
                  strokeWidth={2}
                  size={26}
                />
              </h3>
            ) : (
              <h3>یک خواننده</h3>
            )}
            <h1 className="gradient-text text-5xl font-yekanBlack my-3">
              {artist?.name}
            </h1>
          </div>

          <div className=" flex items-center md:items-end justify-between flex-wrap">
            <div className="text-sm md:mt-3 text-gray-400 flex justify-between md:justify-start md:flex-col gap-y-1 flex-3 md:flex-none">
              <h4 className="flex items-center gap-x-1">
                <Language strokeWidth={1} size={17} />
                <span>{artist?.national}</span>
              </h4>
              <h4 className="flex items-center gap-x-1">
                <PersonCheck strokeWidth={1} size={17} />
                <span>
                  {artist?.followers.toLocaleString("fa-IR", {
                    maximumFractionDigits: 0,
                  })}{" "}
                  نفر
                </span>
              </h4>
            </div>
            <div className="flex-1 flex justify-end md:flex-none">
              <Like
                identifyMusic={artist?.id}
                userId={userId}
                isLiked={isLiked}
                contentType="artist"
                Disabeld={session?false:true}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="md:grid md:grid-cols-3 md:gap-x-5 md:grid-rows-1 flex flex-col">
        <div className="col-span-2 p-5 article-glass rounded-t-3xl md:rounded-3xl flex flex-col gap-y-3">
          <h1 className="text-2xl flex items-center font-yekanBold gap-x-2 mb-7">
            <MusicAlbum strokeWidth={2} size={26} />
            <span>محبوب ترین موزیک ها</span>
          </h1>
          {artistSongs?.map((singerSong) => (
            <MusicLineBox musicDetails={singerSong} />
          ))}
        </div>
        <div className="md:col-span-1 p-5 article-glass md:p-5 h-full md:rounded-3xl flex flex-col gap-y-3">
          <h1 className="text-2xl flex items-center font-yekanBold gap-x-2 mb-7">
            <MusicAlbumFill strokeWidth={2} size={26} />
            <span>محبوب ترین البوم ها</span>
          </h1>
          {artsitAlbums?.map((artistAlbum) => (
            <AlbumLineBox albumDetails={artistAlbum} />
          ))}
        </div>
      </div>
    </article>
  );
};

export default page;
