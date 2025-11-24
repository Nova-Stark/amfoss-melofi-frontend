import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { DataContext } from '../context/DataContext';
import SongCard from '../components/SongCard';
import SideBar from '../components/SideBar';
import PlayBar from '../components/PlayBar';
import SearchBar from '../components/SearchBar';
import './Playlist.page.css';

const Playlist = () => {
  const { playlistId } = useParams();
  const { playlists } = useContext(DataContext);
  const playlist = playlists.find(p => p.id === playlistId);

  if (!playlist) {
    return <div>Playlist not found</div>;
  }

  return (
    <div className='playlist-page-container'>
      <SideBar />
      <div className='playlist-main-content'>
        <SearchBar />
        <div className="playlist-header">
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
    </div>
  );
};

export default Playlist;
