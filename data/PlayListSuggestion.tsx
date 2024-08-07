"use client";
import { PlaylistBoxLoader } from "@/components/loading/loading";
import PlayListBox from "@/components/PlayListBox/PlayListBox";
import SwiperComponent from "@/components/swiper/SwiperComponent";
import prisma from "@/utils/db";
import React from "react";
import useSWR from "swr";

const PlayListSuggestion =  () => {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    "/api/songs/playlistsuggestion",
    fetcher
  );
  const myOptions = {
    spaceBetween: 20,
    navigation: true,
    pagination: { clickable: true },
  };
  const playlistSlide = data?.map((playlist: any) => (
    <PlayListBox playlistDetails={playlist} />
  ));
  return (
    <div className="w-full h-full">
      <h2 className="title-h1">
        <span>پلی لیست های محبوب</span>
      </h2>
      <div className="flex p-1 bg-red-800">
        {!isLoading ? (
          <SwiperComponent
            content={playlistSlide}
            options={myOptions}
            BreakPoint={{
              1600: {
                slidesPerView: 5,
              },
              1380: {
                slidesPerView: 4,
              },
              1000: {
                slidesPerView: 3,
              },
              868: {
                slidesPerView: 4,
              },
              668: {
                slidesPerView: 3,
              },
              468: {
                slidesPerView: 2,
              },
              308: {
                slidesPerView: 2,
              },
              298: {
                slidesPerView: 1,
              },
            }}
          />
        ) : (
          <div className="flex-1 flex flex-nowrap gap-x-4 justify-around"><PlaylistBoxLoader/><PlaylistBoxLoader/><PlaylistBoxLoader/><PlaylistBoxLoader/></div>
        )}
      </div>
    </div>
  );
};

export default PlayListSuggestion;
