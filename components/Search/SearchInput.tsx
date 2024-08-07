"use client"
import { Cross, Search } from "akar-icons";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const SearchInput = ({mobileHidden,desktopHidden}:{mobileHidden:boolean,desktopHidden:boolean}) => {
  const [value, setValue] = useState('')
  const router = useRouter()
  const onSearch =(event:React.FormEvent)=>{
    event.preventDefault();
    const encodedSearchQuery = encodeURI(value)
    router.push(`/search?q=${encodedSearchQuery}`)
  }
  return (
    <form
      onSubmit={onSearch}
      onChange={onSearch}
      className={`items-center justify-center z-30 ${mobileHidden && "hidden md:flex"} ${desktopHidden && "flex md:hidden"}
    `}
    >
      <div className="flex items-center article-glass md:py-2 md:pr-4 md:pl-2 p-3 rounded-2xl">
        <input
          type="text"
          value={value}
          onChange={e=>setValue(e.target.value)}
          required
          placeholder="کدوم آهنگ...؟!"
          className={`
        font-yekan bg-transparent border-none outline-none placeholder-gray-200 h-10 w-72
        `}
        />
        <button type="submit">
          <Search
            strokeWidth={1}
            size={30}
            className={`cursor-pointer hover:text-third duration-200`}
          />
        </button>
      </div>
    </form>
  );
};

export default SearchInput;
