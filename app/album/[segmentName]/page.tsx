import Button from "@/components/Button";
import PlayPauseBtn from "@/components/musicPlayer/PlayPauseBtn";
import prisma from "@/utils/db";
import {
  Alarm,
  Calendar,
  CloudDownload,
  Language,
  PersonCheck,
} from "akar-icons";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import BlueTick from "@/assets/imgIcons/BlueTick.png";
import MusicLineBox from "@/components/musicLineBox/MusicLineBox";
import Like from "@/components/like/Like";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/auth";
const page = async ({ params }: { params: any }) => {
  const albumPathName = params.segmentName;
  const session = await getServerSession(authOptions);
  const getData = async () => {
    try {
      const response = await prisma.albums.findFirst({
        where: { pathName: albumPathName },
      });
      const GetSongs = await prisma.musics.findMany({
        where: { album: response?.name },
      });
      const user = await prisma.user.findFirst({
        where: { email: session?.user?.email },
      });
      const userId = user?.id;

      return { response, GetSongs, userId };
    } catch (error) {
      console.error("Request Failed");
    }
  };
  const likeCheck = async () => {
    const foundMusic = await prisma.albums.findFirst({
      where: {
        id: album?.id,
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
  const data = await getData();
  const songs = data?.GetSongs;
  const album = data?.response;
  const userId = data?.userId;
  const isLiked = await likeCheck();
  const albumYear = album?.year.getFullYear();
  return (
    <article className="flex flex-col gap-y-7 md:gap-y-0">
      <div
        key={album?.id}
        className={`w-full shadow-md md:rounded-3xl md:p-5 pt-5 flex flex-col justify-center md:justify-start items-center md:items-start md:flex-row md:gap-x-8`}
      >
        <Image
          width={500}
          height={500}
          src={album?.cover as string}
          alt="Music Cover"
          className="rounded-3xl shadow-lg border-secondary w-5/6 md:w-[240px]"
        />

        <div className="pt-6 flex flex-col gap-y-3 justify-between w-4/5 md:w-fit ">
          <div className="flex flex-col gap-y-2 ">
            <h1 className="gradient-text text-4xl font-yekanBlack">
              {album?.name}
            </h1>
            <Link
              href={"/"}
              className="flex hover:underline duration-200 gap-x-1 mb-3 items-center"
            >
              <PersonCheck strokeWidth={1.5} size={16} />
              <Link
                href={`/artist/${album?.en_singer}`}
                className="text-lg text-gray-400 items-center flex gap-x-1"
              >
                <span>{album?.singer}</span>
                <Image src={BlueTick} alt="Blue Tick" width={20} height={20} />
              </Link>
            </Link>
            <div className="grid grid-cols-2 gap-2 md:flex md:flex-col gap-y-1 flex-wrap">
              <div
                className="
              flex gap-x-2 items-center col-span-1 md:flex-1
              p-3 rounded-xl md:p-0 md:rounded-none 
              "
              >
                <Alarm strokeWidth={1.5} size={16} />
                <span className="text-sm text-gray-400">{album?.genre}</span>
              </div>
              <div
                className="
              flex gap-x-2 items-center md:flex-1 col-span-1
              p-3 rounded-xl md:p-0 md:rounded-none 
              "
              >
                <Language strokeWidth={1.5} size={16} />
                <span className="text-sm text-gray-400">{album?.language}</span>
              </div>
              <div
                className="
              flex gap-x-2 items-center md:flex-1 col-span-1
              p-3 rounded-xl md:p-0 md:rounded-none 
              "
              >
                <Calendar strokeWidth={1.5} size={16} />
                <span className="text-sm text-gray-400">
                  {albumYear} میلادی
                </span>
              </div>
              <div
                className="
              flex gap-x-2 items-center md:flex-1 col-span-1
              p-3 rounded-xl md:p-0 md:rounded-none 
              "
              >
                <Calendar strokeWidth={1.5} size={16} />
                <span className="text-sm text-gray-400">
                  {albumYear?.toLocaleString("FA-IR")}
                </span>
              </div>
            </div>
          </div>

          <div className="flex gap-x-5 items-center justify-between md:justify-start">
            <PlayPauseBtn songID={songs} />
            <Button px="px-5">
              <CloudDownload strokeWidth={2} size={22} />
              <span>دانلود آلبوم</span>
            </Button>
            <Like
              identifyMusic={album?.id}
              userId={userId}
              isLiked={isLiked}
              contentType="album"
              Disabeld={session?false:true}
            />
          </div>
        </div>
      </div>
      <div className="flex-col flex article-glass p-5 gap-y-2 md:mx-5 rounded-b-3xl">
        {songs?.map((song, index) => (
          <MusicLineBox musicDetails={song} />
        ))}
      </div>
    </article>
  );
};

export default page;

// const getData = async (pathName) => { // Single function for both album and songs
//   try {
//     const album = await prisma.albums.findUnique({
//       where: { pathName },
//       include: { musics: true }, // Eager loading for nested data
//     });

//     if (!album) {
//       // Handle case where no album is found
//       console.error("Album not found");
//       return null; // Or throw an error if appropriate
//     }

//     const albumYear = album.year.getFullYear();
//     const songs = album.musics; // Utilize eager-loaded songs

//     return { album, songs, albumYear }; // Return all relevant data in a single object
//   } catch (error) {
//     console.error("Request Failed:", error); // More informative error logging
//   }
// };

// const fetchData = async (albumPathName) => {
//   const data = await getData(albumPathName);

//   if (data) {
//     console.log(data.album);
//     console.log(data.songs);
//     console.log(data.albumYear);
//   }
// };

// fetchData(albumPathName);
