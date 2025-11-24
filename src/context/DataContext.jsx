import { createContext, useState } from 'react';
import { playlists as initialPlaylists, songs as initialSongs } from '../data';
import profileimg from '../assets/thumbnail.jpg';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [playlists, setPlaylists] = useState(initialPlaylists);
    const [songs, setSongs] = useState(initialSongs);

    const addPlaylist = (playlistName) => {
        const newPlaylist = {
            id: (playlists.length + 1).toString(),
            name: playlistName,
            thumbnail: profileimg,
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
