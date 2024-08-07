'use client';
import { GoogleContainedFill } from 'akar-icons'
import { signIn } from 'next-auth/react';
import Image from 'next/image';
import React from 'react'
import google from '@/assets/imgIcons/social media/google2.png'
const GoogleBtn = () => {
  return (
    <button onClick={()=>
      signIn('google',{
      callbackUrl: `${window.location.origin}`,
    })} className='shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] hover:shadow-btn bg-gradient-to-r from-gray-200 to-gray-600 text-gray-200 hover:bg-gray-300 rounded-2xl py-3 flex items-center gap-x-4 w-full duration-300 justify-center'>
        <span>ورود با گوگل</span>
        <Image
        src={google}
        width={36}
        height={36}
        alt="googlePng"
        loading="lazy"
        />
    </button>
  )
}

export default GoogleBtn