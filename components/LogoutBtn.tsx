'use client';
import { authOptions } from '@/utils/auth';
import { getServerSession } from 'next-auth';
import { signIn, signOut } from 'next-auth/react';
import Link from 'next/link';
import { ReactNode } from 'react'

const LogoutBtn = async () => {
return (
    <button className='py-2 px-6 bg-forth rounded-lg'
    onClick={()=>signOut({callbackUrl:`${window.location.origin}/auth`})}>
      خروج
    </button>
  );
  
}

export default LogoutBtn