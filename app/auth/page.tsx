import EmailBtn from '@/components/loginBtns/EmailBtn'
import GitHubBtn from '@/components/loginBtns/GitHubBtn'
import GoogleBtn from '@/components/loginBtns/GoogleBtn'
import SpotifyBtn from '@/components/loginBtns/SpotifyBtn'
import { authOptions } from '@/utils/auth'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import React from 'react'

const page = async () => {
  const session = await getServerSession(authOptions);
  if(session){
    return redirect('/');
  }else{
    return (
      <article className='flex items-center justify-center'>
          <div className='p-7 w-full article-glass rounded-3xl max-w-lg'>
          <h1 className='text-5xl font-yekanBlack gradient-text mb-2'>با حسابت وارد شو </h1>
          <p className='text-gray-400'> به تمامی قابلیت ها دسترسی داری! و مهم تر از ، یکی از مایی</p>
          <EmailBtn/>
          <div className='my-4 h-1 bg-gray-700 rounded-full'/>
          <SpotifyBtn/>
          <div className='flex gap-x-3'>
          <GoogleBtn/>
          <GitHubBtn/>
          </div>
          </div>
      </article>
    )
  }
}

export default page