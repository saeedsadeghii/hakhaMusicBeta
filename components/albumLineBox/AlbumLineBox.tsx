'use client'
import { MusicAlbumFill, Person } from 'akar-icons'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const AlbumLineBox = ({albumDetails}:{albumDetails:any}) => {
    console.log('album:',albumDetails)
  return (
    <Link href={`/album/${albumDetails.pathName}`} key={albumDetails.id} className='flex gap-x-3 backdrop-blur-3xl shadow-[5px_5px_0px_0px_rgba(109,40,217)] items-center rounded-xl'>
        <div className=''>
            <Image
            src={albumDetails.cover}
            alt='Album Image'
            width={80}
            height={80}
            className='rounded-xl'
            />
        </div>
        <div className='flex flex-col'>
            <h2 className='text-xl font-yekanBold'><span>{albumDetails.name}</span></h2>
            <h2 className='flex items-center gap-x-2 text-sm  text-gray-400'><Person  strokeWidth={2} size={15} /><span>{albumDetails.singer}</span></h2>
        </div>
    </Link>
  )
}

export default AlbumLineBox