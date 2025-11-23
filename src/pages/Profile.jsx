import Verticalcomponent from '../components/Verticalcomponent';
import './Profile.page.css';
import profile from '../assets/man.png'
import backarrow from '../assets/backarrow.svg'

export default function Profile({profileimg = profile , username = 'Username' , useremail = 'Useremail@gmail.com'}) {
    return (
        <div className='profilepage-container'>
            <div className="profile-section">
                <div className="profile-image-container"> 
                    <img src={profileimg} alt={profile} />
                </div>


                <div className='user-info'>
                    <h2>{username}</h2>
                    <h3>{useremail}</h3>
                </div>
            </div>

            <div className='web-header-container'>
                <div className='webname'>
                    <h1>Melofi</h1>
                </div>

                <div className='gobackarrow'>
                    <img src={backarrow} alt="" />
                </div>
            </div>

            <div className='account-buttons'>
                <button className='logout-button'>Log Out</button>
                <button className='delete-button'>Delete Account</button>
            </div>

            <div className="recently-played-section">
                <Verticalcomponent />
            </div>
            
        </div>

    );
}

