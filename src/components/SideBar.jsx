import styles from './SideBar.module.css';
import profile from '../assets/man.png';
import pluspng from '../assets/plus.png';
import { useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { DataContext } from '../context/DataContext';
import SongCard from './SongCard';

export default function SideBar({username = "Username" , profilepic = profile, onAddPlaylistClick}) {
    const navigate = useNavigate();
    const { playlists } = useContext(DataContext);

    return (
        <aside className={styles.sidebar}>
            
            <div className={styles.profileSection}>
                <img src={profilepic} alt="profile" className={styles.profilePic} onClick={() => navigate("/profile")}/>
                <div className={styles.profileInfo}>
                    <h2 className={styles.webName}>Melofi</h2>
                    <p className={styles.username}>{username}</p>
                </div>
            </div>

            <div className={styles.librarySection}>
                <div className={styles.libraryHeader}>
                    <h3>Your Library</h3>
                    <img src={pluspng} alt="add" className={styles.addSign} onClick={onAddPlaylistClick} />
                </div>

                <div className={styles.playlistOption}>
                    {
                        playlists.map((playlist) => (
                            <Link to={`/playlist/${playlist.id}`} key={playlist.id} className={styles.playlistLink}>
                                <SongCard
                                    className={styles.playlistCard}
                                    thumbnailClassName={styles.sidebarThumbnail}
                                    song={playlist.name}
                                    artist={`${playlist.songs.length} songs`}
                                    link={playlist.thumbnail}
                                    duraction=""
                                />
                            </Link>
                        ))
                    }
                </div>
            </div>
        </aside>
    );
}