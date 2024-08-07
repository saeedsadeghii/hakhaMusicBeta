'use client';
import { Cross, Search } from "akar-icons";
import React, { ReactNode, useState } from "react";
interface SearchBarProps {
  mobileOpen: ReactNode;
}
const SearchBar: React.FC<SearchBarProps> = ({ mobileOpen }) => {
  const [searchBarOpen, setSearchBarOpen] = useState(false)
  const [data, setData] = useState('')
  return (
    <div
    className={`
    flex items-center justify-center
    ${searchBarOpen? 'absolute top-48 z-50 p-10 left-0 right-0' : 'glass backdrop-blur-lg rounded-2xl'}
    `}
    >
      {
      searchBarOpen ?
      <div className="p-3 article-glass rounded-2xl ml-5" onClick={()=>setSearchBarOpen(!searchBarOpen)}>
        <Cross strokeWidth={2} size={36} />
      </div>
      :null
      }
      <div className="flex items-center article-glass md:py-2 md:pr-4 md:pl-2 p-3 rounded-2xl">
      <input
        type="text"
        placeholder="کدوم آهنگ...؟!"
        onChange={(e)=>setData(e.target.value)}
        className={`
        font-yekan bg-transparent border-none outline-none placeholder-gray-200 h-10 w-72
        ${searchBarOpen ? 'block' : 'hidden md:block'}
        `}
      />
      <div onClick={()=>setSearchBarOpen(!searchBarOpen)}>
        <Search
          strokeWidth={1}
          size={30}
          className={`cursor-pointer hover:text-third duration-200`}
        />
      </div>
      </div>
    </div>
  );
};

export default SearchBar;


// useEffect(() => {
//   const handleResize = () => {
//     if (window.innerWidth < 560) {
//       setSearchBarOpen(true); // Set based on prop for mobile behavior
//     } else {
//       setSearchBarOpen(false); // Close search bar on larger screens
//     }
//   };

//   // Initial check on component mount
//   handleResize();

//   // Add event listener for resize events
//   window.addEventListener('resize', handleResize);

//   // Cleanup function to remove event listener on component unmount
//   return () => window.removeEventListener('resize', handleResize);
// }, [mobileOpen]); // Update on mobileOpen prop change