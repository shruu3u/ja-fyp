import React, { useState, useRef } from "react";

const musicTracks = [
  {
    name: "Happy Nature",
    file: "/music/nature-99499.mp3",
  },
  {
    name: "Good Night",
    file: "/music/my-project/public/music/calm-and-peaceful-115481.mp3",
  },
  
  {
    name: "Just Relax",
    file: "/music/just-relax-11157.mp3",
  },
  {
    name: "Happy Mood",
    file: "/music/morning-16294.mp3",
  }
];

const Unwind = () => {
  const [playingTrack, setPlayingTrack] = useState(null);
  const audioRef = useRef(new Audio());

  const togglePlay = (track) => {
    if (playingTrack === track.file) {
      audioRef.current.pause();
      setPlayingTrack(null);
    } else {
      audioRef.current.pause();
      audioRef.current = new Audio(track.file);
      audioRef.current.play();
      setPlayingTrack(track.file);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Unwind Zone</h2>
      <p className="mb-4">Tap play to listen and relax with soothing sounds.</p>

      <ul className="space-y-4">
        {musicTracks.map((track) => (
          <li key={track.file} className="flex items-center justify-between">
            <span> {track.name}</span>
            <button
              onClick={() => togglePlay(track)}
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-1 rounded"
            >
              {playingTrack === track.file ? "Pause" : "Play"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Unwind;
