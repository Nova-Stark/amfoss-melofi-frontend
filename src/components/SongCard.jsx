import styles from "./SongCard.module.css";
import thumbnail from "../assets/thumbnail.jpg";

export default function SongCard({ onClick , song = "Songname", artist = "Artist" , duraction = "00:00" ,
    link = thumbnail
}) {
return (
    
        <div className={styles["song-card"]} onClick={onClick}>
            <div className={styles["song-thumbnail"]}>
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

                <span className={styles['song-duration']}>
                    {duraction}
                </span>
                
                </div>
            </div>
        </div>
    
);
}