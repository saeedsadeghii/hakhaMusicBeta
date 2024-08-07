"use client";
import React, { useState } from "react";
import LogoutBtn from "./LogoutBtn";
import { ChevronDown, ChevronUp, MusicAlbum, SignOut } from "akar-icons";
import Image from "next/image";
import userPng from "@/public/icons/notlogin-user.png";
import { signOut } from "next-auth/react";
import Link from "next/link";
interface userStatusPrompt {
  children: React.ReactNode;
}
const NotLoggedIn: React.FC<userStatusPrompt> = ({ children }) => {
  const [userInfoOpen, setUserInfoOpen] = useState(false);
  return (
    <div
      className="w-full justify-between relative font-yekan flex items-center cursor-pointer duration-300"
      onClick={() => setUserInfoOpen(!userInfoOpen)}
    >
      <div className="flex article-glass rounded-2xl p-1 py-[5px] items-center gap-x-2">
        <Image
          //session.user ? session.user.image as string :
          src={userPng}
          width={40}
          height={40}
          className="rounded-full"
          alt="user-pic"
        />
        <h2 className="mt-1">{children}</h2>
        {userInfoOpen ? (
          <ChevronUp strokeWidth={2} size={20} className="duration-300" />
        ) : (
          <ChevronDown strokeWidth={2} size={20} />
        )}
        <ul
          className={`${
            !userInfoOpen
              ? "hidden"
              : "absolute top-[54px] left-0 right-0 p-3 bg-primary rounded-xl w-full"
          }`}
        >
          <li className="">
            <Link href="/auth" className="user-status-options">
              <SignOut strokeWidth={2} size={15} />
              <span>ورود</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NotLoggedIn;
