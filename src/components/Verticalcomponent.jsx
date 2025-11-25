import styles from './Verticalcomponent.module.css'
import thumbnailpng from '../assets/thumbnail.jpg'

export default function Verticalcomponent ({recentplaylist = [
    {id:'songid1',title:'songname1',thumbnail:thumbnailpng},
    {id:'songid2',title:'songname2',thumbnail:thumbnailpng},
    {id:'songid3',title:'songname3',thumbnail:thumbnailpng},
    {id:'songid4',title:'songname4',thumbnail:thumbnailpng},
    {id:'songid5',title:'songname5',thumbnail:thumbnailpng},
    {id:'songid6',title:'songname6',thumbnail:thumbnailpng},
    {id:'songid7',title:'songname7',thumbnail:thumbnailpng},
    {id:'songid8',title:'songname8',thumbnail:thumbnailpng},
    {id:'songid9',title:'songname9',thumbnail:thumbnailpng},
    {id:'songid10',title:'songname10',thumbnail:thumbnailpng}
]}){
    return (
        <div className={styles['vertical-section']}>

            <div className={styles['vertical-component']}>
                {recentplaylist.map((item) => (
                    <div id={item.id} key={item.id} className={styles['recent-song']}>
                        <div className={styles['song-img']}>
                            <img src={item.thumbnail} alt={item.title} />
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