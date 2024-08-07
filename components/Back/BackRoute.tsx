'use client';
import React from 'react'
import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'akar-icons';

const BackRoute = () => {
    const router = useRouter();
    const handleGoBack = () => {
      router.back();
    };
  return (
    <div onClick={handleGoBack} className='article-glass rounded-full p-3 hidden md:block hover:text-third duration-300'><ArrowLeft strokeWidth={1} size={30} /></div>
  )
}

export default BackRoute