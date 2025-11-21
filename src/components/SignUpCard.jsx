import styles from './SignUpCard.module.css';
import profile from '../assets/melofi.png';

export default function SignUpCard() {
  return (
    <div className={styles['login-card']}>

      <div className={styles['form-section']}>
        <h2>Sign Up</h2>
        
        <form>

        <div className={styles['input-group']}>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" />
        </div>


          <div className={styles['input-group']}>
            <label htmlFor="email">User email</label>
            <input type="email" id="email" />
          </div>

          <div className={styles['input-group']}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>

          <div className={styles['login-button-area']}>
          <button type="submit" className={styles['login-button']}>
            Sign Up
          </button>
          </div>
          
        </form>


        
        </div>
                <img src={profile} alt="" />
        </div>
  );
}