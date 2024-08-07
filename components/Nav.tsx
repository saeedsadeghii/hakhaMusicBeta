import { authOptions } from "@/utils/auth";
import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import userPng from "@/public/icons/user.png";

import { Bell, Cross, ThreeLineHorizontal } from "akar-icons";
import UserStatus from "./UserStatus";
import NotLoggedIn from "./NotLoggedIn";
import Sidebar from "./Sidebar";
import HamburgerToggle from "./HamburgerToggle";
import BackRoute from "./Back/BackRoute";
import SearchBar from "./SearchBar";
import SearchInput from "./Search/SearchInput";
import SearchIcon from "./Search/SearchIcon";

const Nav = async () => {
  const session = await getServerSession(authOptions);
  const userImage: string | React.ReactNode = session?.user?.image;
  return (
    <nav className="flex px-2 justify-between items-center rounded-lg gap-x-6 h-14">
      <div className="flex items-center gap-x-4 md:gap-x-20">
        {session ? (
          <UserStatus userImage={userImage}>{session.user?.name}</UserStatus>
        ) : (
          <NotLoggedIn>مهمون</NotLoggedIn>
        )}
       <SearchInput mobileHidden={true} desktopHidden={false}/>
       <SearchIcon/>
      </div>
      <div className="flex items-center gap-x-4">
        <div className="flex items-center gap-x-3">
          <div className="p-3 rounded-2xl md:rounded-full article-glass cursor-pointer hover:text-third duration-300">
            <Bell strokeWidth={1} size={30} />
          </div>
          <BackRoute />
        </div>
        <HamburgerToggle />
      </div>
    </nav>
  );
};

export default Nav;
