import AlbumLineBox from "@/components/albumLineBox/AlbumLineBox";
import ArtistCard from "@/components/ArtistBox/ArtistCard";
import PlayPauseBtn from "@/components/musicPlayer/PlayPauseBtn";
import MusicShow from "@/components/MusicShow/MusicShow";
import PlayListBox from "@/components/PlayListBox/PlayListBox";
import SwiperComponent from "@/components/swiper/SwiperComponent";
import { authOptions } from "@/utils/auth";
import prisma from "@/utils/db";
import { getServerSession } from "next-auth";
import Link from "next/link";

import { notFound, redirect } from "next/navigation";
import React from "react";

const page = async () => {
  const session = await getServerSession(authOptions);
  if (!session) {
    // return redirect('/')
    return notFound();
  }
  const getData = async () => {
    try {
      const user = await prisma.user.findFirst({
        where: { email: session?.user?.email },
      });
      const likedAlbums = await prisma.albums.findMany({
        where: {
          likes: {
            some: {
              userId: user?.id,
            },
          },
        },
        include: {
          likes: true,
        },
      });
      const likedPlaylists = await prisma.playlist.findMany({
        where: {
          likes: {
            some: {
              userId: user?.id,
            },
          },
        },
        include: {
          likes: true,
        },
      });
      return { likedAlbums, likedPlaylists };
    } catch (error) {
      console.error("Error fetching liked musics:", error);
      return null;
    }
  };
  const data = await getData();
  const playlists = data?.likedPlaylists;
  const albums = data?.likedAlbums;
  const myOptions = {
    spaceBetween: 20,
    navigation: true,
    pagination: { clickable: true },
  };
  return (
    <article className="flex flex-col gap-y-8">
      <div className="flex gap-5 flex-wrap px-3 md:px-0">
        <Link href='/favourites/musics' className="flex-1 p-5 rounded-3xl element-glass flex items-center justify-center content-center min-h-96 min-w-[200px]">
          <h1 className="font-yekanBlack text-3xl">موسیقی های مورد علاقه</h1>
        </Link>
        <Link href='/favourites/artists' className="flex-1 p-5 rounded-3xl element-glass flex items-center justify-center content-center min-h-96 min-w-[200px]">
          <h1 className="font-yekanBlack text-3xl">ارتیست های مورد علاقه</h1>
        </Link>
      </div>
      <div>
        <h1 className="title-h1">آلبوم های مورد علاقه</h1>
        <div className="flex items-center gap-x-5 flex-wrap px-5">
          {albums?.map((album: any) => (
            <div className="min-w-80">
              <AlbumLineBox albumDetails={album} />
            </div>
          ))}
        </div>
      </div>
      <div>
        <h1 className="title-h1">پلی لیست های مورد علاقه</h1>
        <div className="flex items-center gap-x-5 flex-wrap">
          {playlists?.map((playlist: any) => (
            <div className="min-w-80">
              <PlayListBox playlistDetails={playlist} />
            </div>
          ))}
        </div>
      </div>
    </article>
  );
};

export default page;
