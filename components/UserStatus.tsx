'use client';
import React, { useState } from 'react'
import LogoutBtn from './LogoutBtn'
import { ChevronDown, ChevronUp, MusicAlbum, SignOut } from 'akar-icons'
import Image from 'next/image'
import userPng from '@/public/icons/user.png'
import { signOut } from 'next-auth/react';
import Link from 'next/link';
import { Session } from 'inspector';
interface userStatusPrompt{
    children:React.ReactNode,
    userImage:string,
}
const UserStatus:React.FC<userStatusPrompt> = ({children,userImage}) => {
    const [userInfoOpen, setUserInfoOpen] = useState(false)
  return (
    <div className='w-full justify-between relative font-yekan flex items-center duration-300 z-20'>
    <div className='flex article-glass rounded-xl p-1 py-[5px] items-center gap-x-2 cursor-pointer hover:text-third duration-300' onClick={()=>setUserInfoOpen(!userInfoOpen)}>
    <Image
    //session.user ? session.user.image as string : 
    //!userImage ? userPng :userImage
    src={userImage === null ? userPng : userImage}
    width={40}
    height={40}
    className="rounded-full"
    alt="user-pic"
    />
    <h2 className='mt-1'>{children}</h2>
    {userInfoOpen ? <ChevronUp strokeWidth={2} size={20} className='duration-300' /> : <ChevronDown strokeWidth={2} size={20} />}
    <ul className={`${!userInfoOpen ? 'hidden' : 'absolute text-gray-300 top-[54px] left-0 right-0 p-2 bg-primary rounded-xl w-full'}`}>
    <li className=''><Link href='/favourites' className='user-status-options'><MusicAlbum strokeWidth={2} size={15} /><span> علاقه ها</span></Link></li>
        <li
        onClick={()=>signOut({callbackUrl:`${window.location.origin}/auth`})}
        className='user-status-options'>
            <SignOut strokeWidth={2} size={15} />
            <span>خروج</span>
        </li>
    </ul>
    </div>
    
  </div>
  )
}

export default UserStatus