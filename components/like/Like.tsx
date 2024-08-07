"use client";
import {  likeProcces } from "@/actions/_actions";
import prisma from "@/utils/db"; 
import { Heart } from "akar-icons";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { toast } from "sonner";
import heartFill from '@/assets/imgIcons/heart.png'
import { ContextProvider } from "../providers/Provider";
// import heartJson from '@/assets/JsonIcons/heart.json'
// import Lottie from "lottie-react";
interface likePrompt {
  identifyMusic: any;
  userId: any;
  isLiked:boolean;
  contentType:string;
  Disabeld:boolean
}

const Like: React.FC<likePrompt> = ({ identifyMusic,userId,isLiked,contentType,Disabeld }) => {
  const [likeSet, setlikeSet] = useState<boolean | null>(isLiked); 
  const [isLoading, setIsLoading] = useState(false); 
  const [error, setError] = useState(null);
  const [contentName, setContentName] = useState('')
  const handleLikeCount = async () => {
    if (Disabeld) {
      toast.info('اول باید وارد حساب کاربریت شی!')
      return 
    }
    setIsLoading(true)
    switch (contentType) {
      case 'music':
        setContentName('موزیک')
        break;
      case 'album':
        setContentName('آلبوم')
        break;
      case 'artist':
        setContentName('آرتیست')
        break;
      case 'playlist':
        setContentName('پلی لیست')
        break;
      default:
        setContentName('محتوا')
        break;
    }
    try {
      const addLike = await likeProcces(userId,identifyMusic,contentType);
      if (addLike) {
        toast.info(`${contentName} به لیست علاقه مندی ها اضافه شد`)
      }else{
        toast.error(`${contentName} از لیست علاقه مندی ها حذف شد`)
      }
      setIsLoading(false)
      setlikeSet(addLike as boolean)
    } catch (error) {
      toast.error('it was a problem in liking')
    }
  };
  
  
  return (
    <button
      className={`flex items-center gap-x-2 ${Disabeld && 'cursor-not-allowed opacity-50'}`}
      onClick={handleLikeCount}
      disabled={isLoading}
    >
      {!likeSet ? <Heart strokeWidth={1} className='duration-200 hover:text-red-600' size={36} />:<Image src={heartFill} width={30} alt="Like Fill" height={30}/>} 
    </button>
  );
};

export default Like;