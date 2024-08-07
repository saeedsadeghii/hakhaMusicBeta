"use client";
import { Cross, Search } from "akar-icons";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const SearchIcon = () => {
  return (
      <Link href={`/search`}
        className={`md:hidden items-center md:py-2 md:pr-4 md:pl-2 p-3 rounded-2xl flex article-glass`}
      >
          <Search
            strokeWidth={1}
            size={30}
            className={`cursor-pointer hover:text-third duration-200`}
          />
      </Link>
  );
};

export default SearchIcon;
