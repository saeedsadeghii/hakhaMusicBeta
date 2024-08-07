import MusicLineBox from "@/components/musicLineBox/MusicLineBox";
import { authOptions } from "@/utils/auth";
import prisma from "@/utils/db";
import { Heart } from "akar-icons";
import { getServerSession } from "next-auth";
import Image from "next/image";
import React from "react";
import heartFill from "@/assets/imgIcons/heart.png";
import PlayPauseBtn from "@/components/musicPlayer/PlayPauseBtn";
const page = async () => {
  const session = await getServerSession(authOptions);
  const getData = async () => {
    try {
      const user = await prisma.user.findFirst({
        where: { email: session?.user?.email },
      });
      const likedMusics = await prisma.musics.findMany({
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
      return likedMusics;
    } catch (error) {
      console.log(error);
    }
  };
  const favoriteMusics = await getData();
  return (
    <article className="flex gap-8 flex-col lg:flex-row justify-center">
      <div className="flex-1 flex justify-center">
        <div className="w-72 h-72 rounded-3xl element-glass flex items-center justify-center">
          <Image src={heartFill} width={64} height={54} alt="heartFill" />
        </div>
      </div>
      <div className="flex-5 flex flex-col gap-y-6 lg:mt-32 p-5 md:pr-0 lg:pl-16">
        <div className="flex items-center justify-between element-glass p-5 rounded-3xl">
          <div className="flex items-center gap-x-2">
            <Heart strokeWidth={1} size={30} />
            <h1 className="text-3xl font-bold text-center">
              موسیقی های مورد علاقه
            </h1>
          </div>
          <div><PlayPauseBtn songID={favoriteMusics}/></div>
        </div>
        <div className="flex flex-col gap-y-2">
          {favoriteMusics?.map((favoriteMusic) => (
            <MusicLineBox musicDetails={favoriteMusic} />
          ))}
        </div>
      </div>
    </article>
  );
};

export default page;