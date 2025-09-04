import { useState } from "react";
import { songs } from "../data/songs";
import SongCard from "../components/SongCard";

const Home = () => {
  const [playlist, setPlaylist] = useState(songs);

  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold mb-4">Donde los beats nunca paran</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {playlist.map((song) => (
          <SongCard key={song.id} song={song} />
        ))}
      </div>
    </div>
  );
};

export default Home;