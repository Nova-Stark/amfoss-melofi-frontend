import styles from './SideBar.module.css';
import profile from '../assets/man.png';
import pluspng from '../assets/plus.png';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

/*
const playlistsData = [
  {
    id: 'pl-1',
    name: 'Playlist 1',
    songs: [] 
  },
  {
    id: 'pl-2',
    name: 'Playlist 2',
    songs: [
      { id: 's-1', title: 'Carol of the bells' },
      { id: 's-2', title: 'Believer' }
    ]
  },
  {
    id: 'pl-3',
    name: 'My Favorites',
    songs: [
      { id: 's-3', title: 'Middle of the Night' },
      { id: 's-4', title: 'Pirates of the Caribbean' },
      { id: 's-5', title: 'Enemy' }
    ]
  }
];
*/

const ChevronDown = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 9l6 6 6-6"/>
  </svg>
);

const ChevronUp = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 15l-6-6-6 6"/>
  </svg>
);

export default function SideBar({username = "Username" , profilepic = profile  ,
    playlistdata = [{
    id: 'sample-playlist-1',
    name: 'Playlist 1',
    songs: [{ id: 'sample-song-1', title: 'samplesong' }] 
  }] 
}) {
    const [expandedPlaylistId, setExpandedPlaylistId] = useState(playlistdata[0].id);
    const [activeSongId, setActiveSongId] = useState(playlistdata[0].songs[0].id);

    const showplaylist = (playlistId) => {
        setExpandedPlaylistId(expandedPlaylistId === playlistId ? null : playlistId);
    }
    const navigate = useNavigate();
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
                    <img src={pluspng} alt="add" className={styles.addSign}/>
                </div>

                <div className={styles.playlistOption}>
                    {
                        playlistdata.map((playlist) => (

                            <div key={playlist.id} className={styles.playlistItem}>

                                <div className={styles.playlistTitle} onClick={() => showplaylist(playlist.id)}>
                                
                                    <span className={styles.playlistName}>{playlist.name}</span>
                                
                                    <span className={styles.chevronIcon}>
                                        {expandedPlaylistId === playlist.id ? <ChevronUp /> : <ChevronDown />}
                                    </span>
                                
                                </div>

                                {
                                    expandedPlaylistId === playlist.id && (
                                        <div className={styles.songMenu}>
                                            {
                                                playlist.songs.length > 0 ? (

                                                playlist.songs.map((song) => (

                                                    <div key={song.id} onClick={() => setActiveSongId(song.id)} className={`${styles.song} ${activeSongId === song.id ? styles.active : ''}`}>
                                                        {song.title}
                                                    </div>
                                                )))
                                            : (<div className={styles.emptyMsg}>No songs added</div>)}
                                        
                                        </div>
                                    )
                                }


                            </div>
                        ))
                    }
                    
                </div>
            </div>
        </aside>
    );
}