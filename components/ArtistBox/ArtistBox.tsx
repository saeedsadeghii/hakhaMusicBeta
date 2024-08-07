import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import BlueTick from "@/assets/imgIcons/BlueTick.png";
const ArtistBox = ({artistDetails}:any) => {
  return (
    <Link
    href={`/artist/${artistDetails.en_singer}`}
    key={artistDetails.id}
    className="flex items-center font-yekan justify-between  artist-line-glass overflow-hidden rounded-2xl"
  >
    <div className="flex items-center gap-x-5 w-full">
      <div className="main-gradient artist-line-radius overflow-hidden">
        <Image
          src={artistDetails.image}
          alt="ArtistImage"
          width={70}
          height={70}
          className="rounded-xl"
        />
      </div>
      <div>
        <h3 className="gradient-text font-yekanBlack text-xl flex items-center gap-x-1 mb-2">
          <span>{artistDetails.name}</span>
          <Image src={BlueTick} alt="BT" width={17} height={17} />
        </h3>
        <h5 className="text-sm font-thin">{artistDetails.discription}</h5>
      </div>
    </div>
    <div
      className="text-gray-700 px-3 font-yekanBlack"
      style={{ fontSize: "1.5rem" }}
    >
    </div>
  </Link>
  )
}

export default ArtistBox