'use client'
import React, { useState, useEffect, useRef } from 'react';
import WaveSurfer from 'wavesurfer.js';

interface Song {
  id: string;
  title: string;
  url: string;
}

const ReactAudioPlayer: React.FC = () => {
  const [songs, setSongs] = useState<Song[]>([]); // State for songs list
  const [currentSongIndex, setCurrentSongIndex] = useState(0); // State for current song index
  const waveformRef = useRef<HTMLDivElement>(null); // Ref for the waveform container
  let wavesurfer:any;

  // Fetch songs data (replace with your actual data fetching method)
  useEffect(() => {
    fetch('/songs.json') // Replace with your data source
      .then((response) => response.json())
      .then((data) => setSongs(data));
  }, []);

  // Create and destroy WaveSurfer instance based on current song
  useEffect(() => {
    if (waveformRef.current && songs.length > 0) {
      const currentSong = songs[currentSongIndex];
      const wavesurfer = WaveSurfer.create({
        container: waveformRef.current,
        url: currentSong.url,
      });

      // Cleanup function to destroy WaveSurfer instance on unmount
      return () => wavesurfer.destroy();
    }
  }, [songs, currentSongIndex, waveformRef.current]);

  // Handle play/pause toggle
  const handlePlayPause = () => {
    if (wavesurfer.current) {
      wavesurfer.current.playPause();
    }
  };

  // Handle previous song
  const handlePreviousSong = () => {
    const newIndex = currentSongIndex - 1;
    setCurrentSongIndex(newIndex >= 0 ? newIndex : songs.length - 1);
  };

  // Handle next song
  const handleNextSong = () => {
    const newIndex = (currentSongIndex + 1) % songs.length;
    setCurrentSongIndex(newIndex);
  };

  // Render the music player
  return (
    <div>
      {songs.length > 0 ? (
        <div>
          <h2>Now Playing: {songs[currentSongIndex].title}</h2>
          <div ref={waveformRef} className="waveform"></div>
          <button onClick={handlePlayPause}>
            {wavesurfer.current && wavesurfer.current.isPlaying() ? 'Pause' : 'Play'}
          </button>
          <button onClick={handlePreviousSong}>Previous</button>
          <button onClick={handleNextSong}>Next</button>
        </div>
      ) : (
        <p>No songs available</p>
      )}
    </div>
  );
};
export default ReactAudioPlayer
// 'use client'
// import { useRef } from 'react'
// import { useWavesurfer } from '@wavesurfer/react'

// const ReactAudioPlayer = () => {
//   const containerRef = useRef(null)

//   const { wavesurfer, isReady, isPlaying, currentTime } = useWavesurfer({
//     container: containerRef,
//     url: '/music.mp3',
//     waveColor: 'purple',
//     height: 100,
//   })

//   const onPlayPause = () => {
//     wavesurfer && wavesurfer.playPause()
//   }

//   return (
//     <>
//       <div ref={containerRef} />

//      <button onClick={onPlayPause}>
//        {isPlaying ? 'Pause' : 'Play'}
//      </button>
//     </>
//   )
// }
// export default ReactAudioPlayer