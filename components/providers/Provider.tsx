"use client";

import React, { useContext, createContext, useState, useEffect } from "react";
import WaveSurfer from "wavesurfer.js";
interface ContextProviderValue {
  menuOpen: boolean;
  setMenuOpen: (isOpen: boolean) => void;

  isplaying: boolean;
  setIsPlaying: (playing: boolean) => any;

  iswavesurfer: null | any;
  setIsWavesurfer: any;

  musicID: any;
  setMusicID: any;

  openMP:boolean;
  setOpenMP:any

  clientSession:any;
  setClientSession:any;
}

interface contextProviderPrompt {
  children: React.ReactNode;
}

// Use the interface in Provider
export const ContextProvider = createContext<ContextProviderValue>({
  menuOpen: false,
  setMenuOpen: (isOpen: boolean) => {},
  isplaying: false,
  setIsPlaying: (playing: boolean) => {},
  iswavesurfer: null,
  setIsWavesurfer: null,
  musicID: [],
  setMusicID: [],
  openMP: false,
  setOpenMP: null,
  clientSession: null,
  setClientSession : null,
});
const Provider: React.FC<contextProviderPrompt> = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isplaying, setIsPlaying] = useState(false);
  const [iswavesurfer, setIsWavesurfer] = useState<null | WaveSurfer>(null);
  const [musicID, setMusicID] = useState<null | any>([]);
  const [openMP, setOpenMP] = useState<boolean>(false);
  const [clientSession, setClientSession] = useState<any>(null)
  return (
    <ContextProvider.Provider
      value={{
        menuOpen,
        setMenuOpen,
        isplaying,
        setIsPlaying,
        setIsWavesurfer,
        iswavesurfer,
        musicID,
        setMusicID,
        openMP,
        setOpenMP,
        clientSession,
        setClientSession,
      }}
    >
      {children}
    </ContextProvider.Provider>
  );
};

export default Provider;

// useEffect(() => {
//   const handleResize: () => void = () => {
//     const width = window.innerWidth;
//     if (width <= 480) {
//       setMenuOpen(false);
//     }
//   };

//   window.addEventListener("resize", handleResize);

//   return () => window.removeEventListener("resize", handleResize);
// }, []);
