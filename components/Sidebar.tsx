"use client";
import React, { useContext, useState } from "react";
import fulllogo from "@/assets/logos/hakhamusic.png";
import logo from "@/assets/logos/h.png";
import Image from "next/image";
import {
  Airpods,
  ArrowBack,
  ArrowForward,
  Grid,
  Home,
  MusicAlbum,
  MusicAlbumFill,
  MusicNote,
  PeopleMultiple,
  TrashCan,
} from "akar-icons";
import SearchBar from "./SearchBar";
import Link from "next/link";
import Provider, { ContextProvider } from "./providers/Provider";

const Sidebar = () => {
  const { menuOpen, setMenuOpen } = useContext(ContextProvider);

  return (
    <aside
      className={` 
      ${menuOpen ? "block md:w-72 p-5" : "hidden md:block md:w-20 py-4"}
      md:sticky fixed font-yekan duration-300 h-full shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] bg-primary md:bg-transparent z-10`}
    >
      <div
        className="absolute hidden md:block cursor-pointer -left-6 p-3 rounded-lg toggle-menu hover:border-forth hover:text-forth duration-300"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? (
          <ArrowForward strokeWidth={2} size={15} className="duration-300 " />
        ) : (
          <ArrowBack strokeWidth={2} size={15} className="duration-300" />
        )}
      </div>
      <div className="flex flex-col items-center gap-y-5">
        <Image
          alt="logo"
          src={!menuOpen ? logo : fulllogo}
          width={200}
          height={200}
          className={`cursor-pointer duration-300 px-5`}
        />

        <div className="w-full">
          {menuOpen && <h1 className="font-yekan text-lg">منو</h1>}
          <ul
            className={`w-full ${
              !menuOpen ? "flex flex-col items-center justify-center" : ""
            } my-5`}
          >
            <li
              className={`mb-1 duration-300`}
            >
              <Link
                href="/"
                className="flex items-center gap-x-4 rounded-lg p-2 text-gray-300 hover:pr-5 hover:text-fifth duration-200"
              >
                <Home strokeWidth={2} size={26} />
                {menuOpen && <span className="text-base">خانه</span>}
              </Link>
            </li>
            <li
              className={`mb-1 duration-300`}
            >
              <Link
                href="/discover"
                className="flex items-center gap-x-4 rounded-lg p-2 text-gray-300 hover:pr-5 hover:text-fifth duration-200"
              >
                <Grid strokeWidth={2} size={26} />
                {menuOpen && <span className="text-base">کشف کن !</span>}
              </Link>
            </li>
            <li
              className={`mb-1 duration-300`}
            >
              <Link
                href="/lastSongs"
                className="flex items-center gap-x-4 rounded-lg p-2 text-gray-300 hover:pr-5 hover:text-fifth duration-200"
              >
                <Airpods strokeWidth={2} size={26} />
                {menuOpen && <span className="text-base">جدید ترین ها</span>}
              </Link>
            </li>
          </ul>

          {menuOpen && <h1 className="font-yekan text-lg">کتابخانه</h1>}
          <ul
            className={`w-full ${
              !menuOpen ? "flex flex-col items-center justify-center" : ""
            } my-5`}
          >
            <li className="mb-1 duration-300">
              <Link
                href="/musics"
                className="flex items-center gap-x-4 rounded-lg p-2 text-gray-300 hover:pr-5 hover:text-fifth duration-200"
              >
                <MusicNote strokeWidth={2} size={26} />
                {menuOpen && <span className="text-base">موزیک</span>}
              </Link>
            </li>
            <li className="mb-1 duration-300">
              <Link
                href="/discover"
                className="flex items-center gap-x-4 rounded-lg p-2 text-gray-300 hover:pr-5 hover:text-fifth duration-200"
              >
                <MusicAlbumFill strokeWidth={2} size={26} />
                {menuOpen && <span className="text-base">آلبوم</span>}
              </Link>
            </li>
            <li className="mb-1 duration-300">
              <Link
                href="/artists"
                className="flex items-center gap-x-4 rounded-lg p-2 text-gray-300 hover:pr-5 hover:text-fifth duration-200"
              >
                <PeopleMultiple strokeWidth={2} size={26} />
                {menuOpen && <span className="text-base">آرتیست</span>}
              </Link>
            </li>
          </ul>

          {menuOpen && <h1 className="font-yekan text-lg">پلی لیست</h1>}
          <ul
            className={`w-full ${
              !menuOpen ? "flex flex-col items-center justify-center" : ""
            } my-5`}
          >
            <li className="mb-1 duration-300">
              <Link
                href="/"
                className="flex items-center justify-between rounded-lg p-2 text-gray-300 duration-500"
              >
                {menuOpen && (
                  <>
                    <div className="flex  gap-x-3 items-center hover:text-fifth duration-300">
                      <MusicAlbum strokeWidth={2} size={26} />
                      <span className="text-base">پلی لیست 1</span>
                    </div>
                    <TrashCan
                      strokeWidth={2}
                      size={20}
                      className="hover:text-red-500 duration-300"
                    />
                  </>
                )}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
