import { usePlayer } from "../context/PlayerContext";

export default function SongCard({ song }) {
    const { currentSong, isPlaying, playSong } = usePlayer();

    const isCurrent = currentSong?.id === song.id;

    return (
        <div className="bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:scale-105 transition transform duration-300 relative group">
            {/* Cover */}
            {song.cover && (
                <div className="relative">
                    <img
                        src={song.cover}
                        alt={song.title}
                        className="w-full h-40 object-cover rounded-t-2xl"
                    />
                    {/* Play/Pause button */}
                    <button
                        onClick={() => playSong(song)}
                        className="absolute bottom-3 right-3 bg-accent text-dark rounded-full p-3 shadow-md opacity-0 group-hover:opacity-100 transition"
                    >
                        {isCurrent && isPlaying ? "⏸" : "▶"}
                    </button>
                </div>
            )}

            {/* Info */}
            <div className="p-4">
                <h3 className="text-primary font-display text-lg font-semibold truncate">
                    {song.title}
                </h3>
                <p className="text-gray-300 text-sm truncate">{song.artist}</p>
                <p className="text-gray-400 text-xs">{song.album}</p>
                <p className="text-accent text-xs font-medium">{song.duration}</p>
            </div>
        </div>
    );
}