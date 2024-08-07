import SwiperComponent from "@/components/swiper/SwiperComponent";
import prisma from "@/utils/db";
import React from "react";
import ArtistCard from "@/components/ArtistBox/ArtistCard";
import { ArtistCardLoader } from "@/components/loading/loading";

const MostFamousArtist = async () => {
  const getData = async () => {
    const artists = await prisma.artists.findMany({
      skip: 0,
      take: 8,
      orderBy: { followers: "desc" },
    });
    return artists;
  };
  const mostFamousArtists = await getData();
  const myOptions = {
    spaceBetween: 20,
    navigation: true,
    pagination: { clickable: true },
  };

  const mostFamousArtist = mostFamousArtists.map((mostFamousArtist: any) => (
    <ArtistCard artistDetails={mostFamousArtist} />
  ));
  return (
    <div className="">
      <div className="flex flex-col items-center title-h1 justify-center">
        <span>محبوب ترین ارتیست ها</span>
      </div>
      {mostFamousArtist ? (
        <SwiperComponent
          content={mostFamousArtist}
          options={myOptions}
          BreakPoint={{
            1700: {
              slidesPerView: 7,
            },
            1680: {
              slidesPerView: 6,
            },
            1400: {
              slidesPerView: 5,
            },
            1068: {
              slidesPerView: 4,
            },
            708: {
              slidesPerView: 3,
            },

            450: {
              slidesPerView: 2,
            },
            370: {
              slidesPerView: 1.5,
            },
          }}
        />
      ) : (
        <div className="flex-1 flex justify-around"><ArtistCardLoader/><ArtistCardLoader/><ArtistCardLoader/><ArtistCardLoader/><ArtistCardLoader/><ArtistCardLoader/><ArtistCardLoader/></div>
      )}
    </div>
  );
};

export default MostFamousArtist;
