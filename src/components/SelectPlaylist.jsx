import styles from './SelectPlaylist.module.css';

export default function SelectPlaylist({playlists = []}) {
    playlists = playlists.length > 0 ? playlists : ['']; 
    return (
        <div className={styles.popup}>
            <h2>Add to Playlist</h2>
            <div className={styles.selectPlaylistContainer}>
                {playlists.map((playlistName, index) => (
                    <button key={index}>{playlistName}</button>
                ))}
            </div>
        </div>
    );
}