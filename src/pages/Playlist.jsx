import { useContext, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { DataContext } from '../context/DataContext';
import SongCard from '../components/SongCard';
import SideBar from '../components/SideBar';
import PlayBar from '../components/PlayBar';
import SearchBar from '../components/SearchBar';
import AddPlaylist from '../components/AddPlaylist';
import backArrow from '../assets/backarrow.svg';
import './Playlist.page.css';

const Playlist = () => {
  const { playlistId } = useParams();
  const { playlists } = useContext(DataContext);
  const navigate = useNavigate();
  const playlist = playlists.find(p => p.id === playlistId);
  const [showAddPlaylist, setShowAddPlaylist] = useState(false);

  const handleTogglePlaylistPopup = () => {
    setShowAddPlaylist(prev => !prev);
  };

  if (!playlist) {
    return <div>Playlist not found</div>;
  }

  return (
    <div className='playlist-page-container'>
      <SideBar onAddPlaylistClick={handleTogglePlaylistPopup} />
      <div className='playlist-main-content'>
        <SearchBar />
        <div className="playlist-header">
          <img src={backArrow} alt="Go back" className='back-arrow' onClick={() => navigate('/home')} />
          <h1>{playlist.name}</h1>
        </div>
        <div className='playlist-songcard-container'>
          {playlist.songs.map(song => (
            <SongCard
              key={song.id}
              song={song.song}
              artist={song.artist}
              duraction={song.duraction}
              link={song.link}
            />
          ))}
        </div>
      </div>
      <PlayBar />
      {showAddPlaylist && (
        <div className="popup-overlay" onClick={handleTogglePlaylistPopup}>
          <div onClick={(e) => e.stopPropagation()}>
            <AddPlaylist onClose={handleTogglePlaylistPopup} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Playlist;
