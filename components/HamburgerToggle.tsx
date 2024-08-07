"use client";
import React, { useContext } from "react";
import { ContextProvider } from "./providers/Provider";
import { ThreeLineHorizontal } from "akar-icons";

const HamburgerToggle = () => {
  const { menuOpen, setMenuOpen } = useContext(ContextProvider);
  return (
    <div
    className="block md:hidden glass p-3 rounded-2xl hover:border-forth hover:text-forth duration-300"
    onClick={()=>setMenuOpen(!menuOpen)}
    >
      <ThreeLineHorizontal strokeWidth={1} size={30} />
    </div>
  );
};

export default HamburgerToggle;
