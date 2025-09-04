// src/components/SongList.jsx
import { songs } from "../data/songs";
import SongCard from "./SongCard";

export default function SongList() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 p-6 bg-dark min-h-screen">
  {songs.map((song) => (
    <SongCard key={song.id} song={song} />
  ))}
</div>
  );
}