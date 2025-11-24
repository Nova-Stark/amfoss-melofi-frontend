import { createContext, useState } from 'react';
import { playlists as initialPlaylists, songs as initialSongs } from '../data';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [playlists, setPlaylists] = useState(initialPlaylists);
    const [songs, setSongs] = useState(initialSongs);

    // a function to add a new playlist
    const addPlaylist = (playlistName) => {
        const newPlaylist = {
            id: (playlists.length + 1).toString(),
            name: playlistName,
            thumbnail: `https://via.placeholder.com/150`,
            songs: [],
        };
        setPlaylists(prevPlaylists => [...prevPlaylists, newPlaylist]);
    };

    const value = {
        playlists,
        songs,
        addPlaylist,
    };

    return (
        <DataContext.Provider value={value}>
            {children}
        </DataContext.Provider>
    );
};
