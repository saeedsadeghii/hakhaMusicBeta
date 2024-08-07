'use client';
import { GithubFill } from "akar-icons";
import { SessionProvider, signIn } from "next-auth/react";
import React from "react";
import { toast } from "sonner";

const GitHubBtn = () => {
  return (
    <button onClick={()=>{
      signIn('github',{
        callbackUrl: `${window.location.origin}`,
      })
      toast.success('با موفقیت وارد شدی!')
    }} className="shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] hover:shadow-btn bg-gradient-to-r from-slate-900 to-slate-800 text-gray-200 rounded-2xl py-3 flex items-center justify-center gap-x-4 w-full hover:bg-primary duration-300">
      <span>ورود با گیت هاب</span>
      <GithubFill strokeWidth={2} size={36} />
    </button>
  );
};

export default GitHubBtn;
