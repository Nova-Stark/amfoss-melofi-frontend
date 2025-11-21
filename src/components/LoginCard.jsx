import styles from './LoginCard.module.css';
import profile from '../assets/melofi.png';

export default function LoginCard() {
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

          
          <button type="submit" className={styles['login-button']}>
            Log In
          </button>
          
        </form>


        <p className={styles['signup-text']}>
          Don't have an account? <a href="#">Sign Up</a>
        </p>
        
        
        </div>
                <img src={profile} alt="" />
        </div>
  );
}