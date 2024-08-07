'use client';
import { GoogleContainedFill, SpotifyFill } from 'akar-icons'
import { signIn } from 'next-auth/react';
import React from 'react'
import spotify from '@/assets/imgIcons/social media/spotify.png'
import Image from 'next/image';
const SpotifyBtn = () => {
  return (
    <button onClick={()=>signIn('spotify',{
      callbackUrl: `${window.location.origin}`,
    })} className='shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] hover:shadow-btn bg-gradient-to-r from-green-900 to-green-700 mb-5 text-gray-200 hover:bg-green-900 rounded-2xl py-3 flex items-center gap-x-4 w-full duration-300 justify-center'>
        <span>ورود با اسپاتیفای</span>
        <Image
        src={spotify}
        width={36}
        height={36}
        alt="spotifyPng"
        loading="lazy"
        />
    </button>
  )
}

export default SpotifyBtn