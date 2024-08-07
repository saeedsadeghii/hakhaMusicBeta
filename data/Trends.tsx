"use client";
import { MiniMusicLineBoxLoader } from "@/components/loading/loading";
import MiniMusicLineBox from "@/components/musicLineBox/MiniMusicLineBox";
import React from "react";
import useSWR from "swr";

const Trends = () => {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, error, isLoading } = useSWR("/api/songs/trends", fetcher);
  return (
    <div className="w-full h-full">
      <h2 className="title-h1">
        <span>ترندها</span>
      </h2>
      <div className="rounded-2xl flex flex-col gap-y-2">
        {!isLoading ? (
          data.map((music: any) => <MiniMusicLineBox musicDetails={music} />)
        ) : (
          <div className="flex gap-y-3 flex-col flex-1 justify-around"><MiniMusicLineBoxLoader/><MiniMusicLineBoxLoader/><MiniMusicLineBoxLoader/><MiniMusicLineBoxLoader/></div>
        )}
      </div>
    </div>
  );
};

export default Trends;
