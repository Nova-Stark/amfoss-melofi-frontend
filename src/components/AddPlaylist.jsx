import styles from './AddPlaylist.module.css';

export default function AddPlaylist({ onClose }) {
    return (
        <div className={styles.popup}>
            <div className={styles.addPlaylistContainer}>
                <input type="text" placeholder='Name for Playlist' />
                <div className={styles.buttonContainer}>
                    <button className={styles.saveButton}>Save</button>
                    <button className={styles.cancelButton} onClick={onClose}>Cancel</button>
                </div>
            </div>
        </div>
    );
}

