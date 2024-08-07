import AlbumLineBox from "@/components/albumLineBox/AlbumLineBox";
import ArtistBox from "@/components/ArtistBox/ArtistBox";
import MusicLineBox from "@/components/musicLineBox/MusicLineBox";
import SearchInput from "@/components/Search/SearchInput";
import prisma from "@/utils/db";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import React from "react";
import useSWR from "swr";
const page = async ({ searchParams }: any) => {
  const searchParam = searchParams.q;
  const searchQuery = searchParam ? searchParam : null;
  const encodedSearchQuery = encodeURI(searchQuery || "");
  const getData = async () => {
    try {
      const musicData = await prisma.musics.findMany({
        where: {
          OR: [
            {
              name: {
                contains: searchParam as string,
              },
            },
            {
              singer: {
                contains: searchParam as string,
              },
            },
            {
              en_singer: {
                contains: searchParam as string,
              },
            },
            {
              orginal_singer_name: {
                contains: searchParam as string,
              },
            },
          ],
        },
        orderBy: { visited: "desc" },
        take: 4,
      });
      console.log(musicData);
      const singerData = await prisma.artists.findMany({
        where: {
          OR: [
            {
              name: {
                contains: searchParam as string,
              },
            },
            {
              en_singer: {
                contains: searchParam as string,
              },
            },
            {
              national: {
                contains: searchParam as string,
              },
            },
            {
              orginal_singer_name: {
                contains: searchParam as string,
              },
            },
          ],
        },
      });
      console.log(singerData);
      const AlbumData = await prisma.albums.findMany({
        where: {
          OR: [
            {
              name: {
                contains: searchParam as string,
              },
            },
            {
              en_singer: {
                contains: searchParam as string,
              },
            },
            {
              singer: {
                contains: searchParam as string,
              },
            },
            {
              orginal_singer_name: {
                contains: searchParam as string,
              },
            },
          ],
        },
        orderBy: { like: "desc" },
        take: 4,
      });
      console.log(AlbumData);
      return { musicData, singerData, AlbumData };
    } catch (error) {
      console.log(error);
    }
  };
  const data = await getData();
  const foundedMusic = data?.musicData;
  const foundedArtist = data?.singerData;
  const foundedAlbum = data?.AlbumData;
  return (
    <article className="p-5">
      <SearchInput mobileHidden={false} desktopHidden={true}/>
      <h1 className="mx-auto p-5 m-5 bg-primary rounded-xl">
        <span>نتیجه جسو جو برای</span>
        <span className="gradient-text"> {searchParam} </span>
      </h1>
      <div className="my-5 flex flex-col gap-y-2">
        {foundedArtist?.map((artist) =>
          artist ? <ArtistBox artistDetails={artist} /> : null
        )}
      </div>
      <div className="my-5">
        {foundedMusic?.map((music: any) =>
          music ? <MusicLineBox musicDetails={music} /> : null
        )}
      </div>
      <div className="my-5 flex-col flex gap-y-3">
        {foundedAlbum?.map((album: any) =>
          album ? <AlbumLineBox albumDetails={album} /> : null
        )}
      </div>
    </article>
  );
};

export default page;