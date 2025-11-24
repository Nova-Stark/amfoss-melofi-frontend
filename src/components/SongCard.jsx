import styles from "./SongCard.module.css";
import thumbnail from "../assets/thumbnail.jpg";
import playIcon from "../assets/playicon.svg";

export default function SongCard({ onClick , song = "Songname", artist = "Artist" , duraction = "00:00" ,
    link = thumbnail, isPlaying = false, className = '', thumbnailClassName = ''
}) {
return (
    
        <div className={`${styles["song-card"]} ${className}`} onClick={onClick}>
            <div className={`${styles["song-thumbnail"]} ${thumbnailClassName}`}>
                <img src={link} alt={thumbnail} className={styles["song-img"]}/>
            </div>

            <div className={styles["song-info"]}>
                <h3 className={styles["song-name"]}>
                    {song}
                </h3>
                
                <div className={styles["song-extras"]}>

                <span className={styles["song-author"]}>
                    {artist}
                </span>

                <div className={styles['duration-container']}>
                    {isPlaying && <img src={playIcon} alt="playing" className={styles.playIcon} />}
                    <span className={styles['song-duration']}>
                        {duraction}
                    </span>
                </div>
                
                </div>
            </div>
        </div>
    
);
}