"use client";
import { Envelope } from "akar-icons";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";
import google from '@/assets/imgIcons/social media/1 (40).png'
import { toast } from "sonner";
const EmailBtn = () => {
  const [email, setEmail] = useState<null | string>(null);
  const handleEmailSubmit = async () => {
    const signInResult = await signIn("email", {
      email: email,
      callbackUrl: `${window.location.origin}`,
      redirect: false,
    });
    if (!signInResult?.ok) {
      return toast.error('یک مشکلی هه');
    } else {
      return toast.info('فرستادم ایمیلتو چک کن!');
    }
  };
  return (
    <form action={handleEmailSubmit}>
      <label className="block font-yekanBold text-xl mt-4 mb-2">ایمیل</label>
      <input
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        name="email"
        placeholder="emaple@email.com"
        className="article-glass border border-gray-300 text-gray-200 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 h-16 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
      <button
        type="submit"
        className="bg-gradient-to-r from-indigo-500 to-secondary hover:shadow-btn shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] text-gray-200 mt-5 rounded-2xl py-2 flex items-center justify-center gap-x-4 w-full hover:bg-gray-800 duration-300"
      >
        <span>ورود با ایمیل</span>
        <Image
        src={google}
        width={36}
        height={36}
        alt="googlePng"
        loading="lazy"
        />
      </button>
    </form>
  );
};

export default EmailBtn;
