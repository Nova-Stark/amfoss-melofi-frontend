import Verticalcomponent from '../components/Verticalcomponent';
import './Profile.page.css';
import profile from '../assets/man.png'
import backarrow from '../assets/backarrow.svg'

export default function Profile({profileimg = profile , username = 'Username' , useremail = 'useremail@gmail.com'}) {
    return (
        <div className='profilepage-container'>

            <div className='web-header-container'>
                <div className='webname'>
                    <h1>Melofi</h1>
                </div>

                <div className='gobackarrow'>
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
                            <button className='logout-button'>Log Out</button>
                            <div className='user-stats'>
                                <p>Followers 1M</p>
                                <p>Subscribers 500K</p>
                            </div>
                        </div>
                        <button className='delete-button'>Delete Account</button>
                    </div>
                </div>

                <div className="recently-played-section">
                    <h2>Recently Played</h2>
                    <Verticalcomponent />
                </div>
            </div>
        </div>
    );
}