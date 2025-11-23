import SongCard from '../components/SongCard.jsx';
import './Home.page.css';
import SearchBar from '../components/SearchBar.jsx';
import SideBar from '../components/SideBar.jsx';
import PlayBar from '../components/PlayBar.jsx';
import AddPlaylist from '../components/AddPlaylist.jsx';
import { useState } from 'react';

export default function Home() {
  const [showAddPlaylist, setShowAddPlaylist] = useState(false);

  const handleTogglePlaylistPopup = () => {
    setShowAddPlaylist(prev => !prev);
  };

  return (
    <div className='page-container'>
      <SideBar onAddPlaylistClick={handleTogglePlaylistPopup} />

      <div className='main-content'>
        <SearchBar />
        <div className='songcard-container'>
          <SongCard />
          <SongCard />
          <SongCard />
          <SongCard />
          <SongCard />
          <SongCard />
          <SongCard />
          <SongCard />
          <SongCard />
          <SongCard />
          <SongCard />
          <SongCard />
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


}