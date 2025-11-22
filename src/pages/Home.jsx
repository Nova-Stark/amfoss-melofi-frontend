import SongCard from '../components/SongCard.jsx';
import './Home.page.css';
import SearchBar from '../components/SearchBar.jsx';
import SideBar from '../components/SideBar.jsx';
import PlayBar from '../components/PlayBar.jsx';
import AddPlaylist from '../components/AddPlaylist.jsx';

export default function Home() {
  return (
    <div className='page-container'>
      <SideBar />

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
    </div>
    
  );


}