import { createContext, useState, useRef, useContext } from "react";

const PlayerContext = createContext();

export const PlayerProvider = ({ children }) => {
  const audioRef = useRef(new Audio());
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const playSong = (song) => {
    if (currentSong?.id === song.id) {
      // Si es la misma canción → toggle play/pause
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
      }
    } else {
      // Nueva canción → cargar y reproducir
      audioRef.current.src = song.src;
      audioRef.current.play();
      setCurrentSong(song);
      setIsPlaying(true);
    }
  };

  return (
    <PlayerContext.Provider value={{ currentSong, isPlaying, playSong }}>
      {children}
    </PlayerContext.Provider>
  );
};

export const usePlayer = () => useContext(PlayerContext);