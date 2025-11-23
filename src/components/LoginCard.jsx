import styles from './LoginCard.module.css';
import profile from '../assets/melofi.png';
import { Link, useNavigate } from 'react-router-dom';

export default function LoginCard() {
  const navigate = useNavigate();
  return (
    <div className={styles['login-card']}>

      <div className={styles['form-section']}>
        <h2>Log In</h2>
        
        <form>

          <div className={styles['input-group']}>
            <label htmlFor="email">User email</label>
            <input type="email" id="email" />
          </div>

          <div className={styles['input-group']}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>

          <div className={styles['login-button-area']}>

          
            <button type="submit" className={styles['login-button']} onClick={() => navigate('/home')}>
              Log In
            </button>
          
          </div>

        </form>


        <p className={styles['signup-text']}>
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
        
        
        </div>
                <img src={profile} alt="" />
        </div>
  );
}