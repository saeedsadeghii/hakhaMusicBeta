import Link from "next/link";
import React from "react";
import AddMusicForm from "./forms/AddMusicForm";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/auth";
import { notFound, redirect } from "next/navigation";
import AddSingerForm from "./forms/AddSingerForm";

const page = async () => {
  const session = await getServerSession(authOptions);
  if (session?.user?.email === "sahidsadjie@gmail.com") {
    return (
      <article className="flex flex-col gap-y-5">
        <div className="flex flex-col gap-y-4 admin-shadow1 m-5 p-5 article-glass rounded-3xl max-w-fit">
          <h1 className="font-yekanBold text-3xl mr-2">افزودن</h1>
          <div className="flex gap-x-5">
            <Link href="admin/add/add-music" className="add-sth">
              افزودن موزیک
            </Link>
            <Link href={`admin/add/add-album`} className="add-sth">
              افزودن البوم
            </Link>
            <Link href={`admin/add/add-artist`} className="add-sth">
              افزودن ارتیست
            </Link>
            <Link href={`admin/add/add-playlist`} className="add-sth">
              افزودن پلی پلی لیست
            </Link>
          </div>
        </div>
      </article>
    );
  } else {
    notFound();
  }
};

export default page;
