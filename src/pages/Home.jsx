import { useState } from 'react';
import { songs } from '../data/songs';

const Home = () => {
  const [playlist, setPlaylist] = useState(songs);

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Kodigo Music - Inicio</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {playlist.map(song => (
          <div key={song.id} className="bg-gray-800 p-4 rounded-lg shadow-lg hover:bg-gray-700 transition">
            <h2 className="text-xl font-semibold">{song.title}</h2>
            <p className="text-gray-400">{song.artist} - {song.album}</p>
            <p className="text-gray-500">Duración: {song.duration}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;