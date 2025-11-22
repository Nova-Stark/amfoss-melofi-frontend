import styles from './PlayBar.module.css';
import thumbnail from '../assets/thumbnail.jpg';
import { useState } from 'react';

const PlayIcon = ({ onClick }) => (
    <svg onClick={onClick} width="32" height="32" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 3l14 9-14 9V3z"/>
    </svg>
);

const PauseIcon = ({ onClick }) => (
    <svg onClick={onClick} width="32" height="32" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="4" width="4" height="16" />
        <rect x="14" y="4" width="4" height="16" />
    </svg>
);

const NextIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 4l8 8-8 8V4zM19 4v16"/>
    </svg>
);

const PrevIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 4l-8 8 8 8V4zM5 4v16"/>
    </svg>
);


export default function PlayBar({
    thumbnailimg = thumbnail, 
    songname = "Song Name", 
    artistname = "Artist Name", 
    isplaying: initialIsPlaying = false,
    duration = "00:00"
}) {
    const [isPlaying, setIsPlaying] = useState(initialIsPlaying);

    const handlePlayPause = () => {
        setIsPlaying(!isPlaying);
    };

    return (
        <footer className={styles.playbar}>

            <div className={styles.progress}>
                <div className={styles.progressBar} style={{width: '80%'}}></div>
            </div>

            <div className={styles.content}>

                <div className={styles.songInfo}>
                    <img src={thumbnailimg} alt={songname} className={styles.thumbnail}/>

                    <div className={styles.textInfo}>
                        <div className={styles.songName}>{songname}</div>
                        <div className={styles.artistName}>{artistname}</div>
                    </div>

                </div>

                <div className={styles.controls}>
                    <PrevIcon />
                    {isPlaying ? <PauseIcon onClick={handlePlayPause} /> : <PlayIcon onClick={handlePlayPause} />}
                    <NextIcon />
                </div>

                <div className={styles.duration}>
                    {duration}
                </div>

            </div>

        </footer>
    );
}
