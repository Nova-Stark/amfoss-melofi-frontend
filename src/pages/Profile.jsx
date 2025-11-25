import Verticalcomponent from '../components/Verticalcomponent';
import './Profile.page.css';
import profile from '../assets/man.png'
import backarrow from '../assets/backarrow.svg'
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { DataContext } from '../context/DataContext';

export default function Profile({profileimg = profile , username = 'Username' , useremail = 'useremail@gmail.com'}) {
    const navigate = useNavigate();
    const { playlists } = useContext(DataContext);

    const formattedPlaylists = playlists.map(playlist => ({
        id: playlist.id,
        title: playlist.name,
        thumbnail: playlist.thumbnail,
    }));

    const handlePlaylistClick = (id) => {
        navigate(`/playlist/${id}`);
    };

    return (
        <div className='profilepage-container'>

            <div className='web-header-container'>
                <div className='webname'>
                    <h1>Melofi</h1>
                </div>

                <div className='gobackarrow' onClick={() => navigate("/home")}>
                    <img src={backarrow} alt="go back" />
                </div>
            </div>

            <div className='profile-body-container'>
                <div className='profile-left-section'>
                    <div className="profile-section">
                        <div className="profile-image-container">
                            <img src={profileimg} alt={username} />
                        </div>


                        <div className='user-info'>
                            <h2>{username}</h2>
                            <h3>{useremail}</h3>
                        </div>
                    </div>

                    <div className="account-details">
                        <div className="logout-and-stats">
                            <button className='logout-button' onClick={() => navigate("/login")}>Log Out</button>
                            <div className='user-stats'>
                                <p>Followers 1M</p>
                                <p>Subscribers 500K</p>
                            </div>
                        </div>
                        <button className='delete-button' onClick={() => navigate("/login")}>Delete Account</button>
                    </div>
                </div>

                <div className='profile-right-content-wrapper'>
                    <div className="recently-played-section">
                        <h2>Recently Played</h2>
                        <Verticalcomponent />
                    </div>

                    <div className="profile-playlists-section">
                        <h2>My Playlists</h2>
                        <Verticalcomponent recentplaylist={formattedPlaylists} onItemClick={handlePlaylistClick} />
                    </div>
                </div>
            </div>
        </div>
    );
}