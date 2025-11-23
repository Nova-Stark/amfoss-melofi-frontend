import './Player.page.css'; 
import thumbnail from '../assets/thumbnail.jpg'; 
import { useState } from 'react';
import plusimg from '../assets/plus.png';
import backarrow from '../assets/backarrow.svg';
import SelectPlaylist from '../components/SelectPlaylist';
import { useNavigate } from 'react-router-dom';

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

export default function Player({thumbnailpic = thumbnail , songname = "Songname",
    artistname = "Artistname", duration = "00:00",isplaying: initialIsPlaying = false})  {
    const navigate = useNavigate();
    const [isPlaying, setIsPlaying] = useState(initialIsPlaying);
    const [showSelectPlaylist, setShowSelectPlaylist] = useState(false);

    const handlePlayPause = () => {
        setIsPlaying(!isPlaying);
    };

    const toggleSelectPlaylistPopup = () => {
        setShowSelectPlaylist(prev => !prev);
    }

    return (
        <div>
            <div className='song-area'>
            <div className='thumbnail-container'>
                <img src={thumbnailpic} alt={thumbnail} className='ogthumbnail' />
                <img src={backarrow} alt="" className='backarrow' onClick={()=> navigate("/home")}/>
            </div>
            
            <div className='song-details'>
                <div className='song-info'>
                    <h2>{songname}</h2>
                    <h3>{artistname}</h3>
                </div>
                <div className='addsign' onClick={toggleSelectPlaylistPopup}>
                    <img src={plusimg} alt="" />
                </div>
            </div>

            </div>

            <footer className='player-footer'>
                <div className='controls'>
                    <PrevIcon />
                    {isPlaying ? <PauseIcon onClick={handlePlayPause} /> : <PlayIcon onClick={handlePlayPause} />}
                    <NextIcon />
                    <h3>{duration}</h3>
                </div>

                <div className='progress'>
                    <div className='progress-bar' style={{width: '80%'}}></div>
                </div>
            </footer>

            {showSelectPlaylist && (
                <div className="popup-overlay" onClick={toggleSelectPlaylistPopup}>
                    <div onClick={(e) => e.stopPropagation()}>
                        <SelectPlaylist onClose={toggleSelectPlaylistPopup} />
                    </div>
                </div>
            )}
        </div>
    );
}
