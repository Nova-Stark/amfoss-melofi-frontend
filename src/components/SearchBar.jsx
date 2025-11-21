import styles from './SearchBar.module.css';
import s_icon from '../assets/searchicon.png';

export default function SearchBar() {
    return (
        <div className={styles['search-bar']}>
            <img src={s_icon} alt="" className={styles['sico']}/>

            <input type="text" placeholder='Search Songs' />
        </div>
    );
}