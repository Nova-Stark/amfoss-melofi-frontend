import styles from './Verticalcomponent.module.css'
import thumbnailpng from '../assets/thumbnail.jpg'

export default function Verticalcomponent ({recentplaylist = [{id:'songid1',title:'songname1',thumbnail:thumbnailpng},
    {id:'songid2',title:'songname2',thumbnail:thumbnailpng},
    {id:'songid3',title:'songname3',thumbnail:thumbnailpng}
]}){
    return (
        <div className={styles['vertical-section']}>

            <div className={styles['vertical-component']}>
                {recentplaylist.map((item) => (
                    <div id={item.id} className={styles['recent-song']}>
                        <div className={styles['song-img']}>
                            <img src={item.thumbnail} alt={thumbnailpng} />
                        </div>
                        <div className={styles['song-title']}>
                            {item.title}
                        </div>
                    </div>
                ))}
            </div>            
        </div>
    );
}