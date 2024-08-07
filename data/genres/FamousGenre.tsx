import Image from "next/image";
import React from "react";
import PopImg from '@/assets/genres/1.png'
import DanceElectronicImg from '@/assets/genres/2.png'
import WorldLessImg from '@/assets/genres/3.png'
import RapImg from '@/assets/genres/5.png'
import Link from "next/link";
const FamousGenre = () => {
  const famous_genre = [
    {
      id: 1,
      name: "پاپ",
      class: "famous_genre1",
      image: PopImg,
      en_name:"pop"
    },
    {
      id: 2,
      name: "رپ",
      class: "famous_genre2",
      image: RapImg,
      en_name:"rap"
    },
    {
      id: 3,
      name: "بی کلام",
      class: "famous_genre3",
      image: WorldLessImg,
      en_name:"wordless"
    },
    {
      id: 4,
      name: "دنس الکترونیک",
      class: "famous_genre4",
      image: DanceElectronicImg,
      en_name:"danceElectronic"
    },
  ];
  return (
    <div className="w-full flex flex-col gap-y-3 mt-5">
      <h1 className="font-yekanBold text-2xl">ژانر های محبوب</h1>
      <div className="grid grid-cols-2 w-full gap-x-3 gap-y-3 ">
        {
          famous_genre?.map((genre) => (
            <Link href={`/genre/${genre.en_name}`}
              key={genre.id}
              className={`${genre.class} bg-red-400 col-span-1 flex gap-x-5 items-center element-glass genres-line-radius hover:grayscale duration-500`}
            >
              <div className=" rounded-2xl h-24">
                <Image
                  src={genre.image}
                  alt="Genre Image"
                  width={60}
                  height={60}
                  className="rounded-xl w-full genres-image-radius h-full"
                />
              </div>
              <span className="font-yekanBlack gradient-text text-xl">{genre.name}</span>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default FamousGenre;
