import styles from './SelectPlaylist.module.css';
import { useContext } from 'react';
import { DataContext } from '../context/DataContext';

export default function SelectPlaylist() {
    const { playlists } = useContext(DataContext);
    const playlistNames = playlists.length > 0 ? playlists.map(p => p.name) : ['']; 
    return (
        <div className={styles.popup}>
            <h2>Add to Playlist</h2>
            <div className={styles.selectPlaylistContainer}>
                {playlistNames.map((playlistName, index) => (
                    <button key={index}>{playlistName}</button>
                ))}
            </div>
        </div>
    );
}