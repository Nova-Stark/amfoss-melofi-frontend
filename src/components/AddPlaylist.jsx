import styles from './AddPlaylist.module.css';

export default function AddPlaylist() {
    return (
        <div className={styles.popup}>
        <div className={styles.addPlaylistContainer}>
            <input type="text" placeholder='Add Playlist' />
        </div>
        </div>
    );
}

