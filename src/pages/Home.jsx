import SongCard from '../components/SongCard.jsx';
import './Home.page.css';
import SearchBar from '../components/SearchBar.jsx';
import SideBar from '../components/SideBar.jsx';
import PlayBar from '../components/PlayBar.jsx';
import AddPlaylist from '../components/AddPlaylist.jsx';
import SelectPlaylist from '../components/SelectPlaylist.jsx';
import { useState } from 'react';

export default function Home() {
  const [showAddPlaylist, setShowAddPlaylist] = useState(false);
  const [showSelectPlaylist, setShowSelectPlaylist] = useState(false);

  const handleTogglePlaylistPopup = () => {
    setShowAddPlaylist(prev => !prev);
  };

  const handleToggleSelectPlaylistPopup = () => {
    setShowSelectPlaylist(prev => !prev);
  };

  return (
    <div className='page-container'>
      <SideBar onAddPlaylistClick={handleTogglePlaylistPopup} />

      <div className='main-content'>
        <SearchBar />
        <div className='songcard-container'>
          <SongCard onAddToPlaylist={handleToggleSelectPlaylistPopup} />
          <SongCard onAddToPlaylist={handleToggleSelectPlaylistPopup} />
          <SongCard onAddToPlaylist={handleToggleSelectPlaylistPopup} />
          <SongCard onAddToPlaylist={handleToggleSelectPlaylistPopup} />
          <SongCard onAddToPlaylist={handleToggleSelectPlaylistPopup} />
          <SongCard onAddToPlaylist={handleToggleSelectPlaylistPopup} />
          <SongCard onAddToPlaylist={handleToggleSelectPlaylistPopup} />
          <SongCard onAddToPlaylist={handleToggleSelectPlaylistPopup} />
          <SongCard onAddToPlaylist={handleToggleSelectPlaylistPopup} />
          <SongCard onAddToPlaylist={handleToggleSelectPlaylistPopup} />
          <SongCard onAddToPlaylist={handleToggleSelectPlaylistPopup} />
          <SongCard onAddToPlaylist={handleToggleSelectPlaylistPopup} />
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

      {showSelectPlaylist && (
        <div className="popup-overlay" onClick={handleToggleSelectPlaylistPopup}>
          <div onClick={(e) => e.stopPropagation()}>
            <SelectPlaylist />
          </div>
        </div>
      )}
    </div>
    
  );


}