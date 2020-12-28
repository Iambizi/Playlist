import styles from "../styles/scss/_player.module.scss";
export default function player(){
    return(
        <>
            <div className={`${styles.player}`}>
                <div className={`${styles.controls}`}></div>
                <ul className={`${styles.tracks}`}>
                    <li className={`${styles.track}`}><span>Song</span> Artist</li>
                    <li className={`${styles.track}`}><span>Song</span> Artist</li>
                    <li className={`${styles.track}`}><span>Song</span> Artist</li>
                    <li className={`${styles.track}`}><span>Song</span> Artist</li>
                    <li className={`${styles.track}`}><span>Song</span> Artist</li>
                </ul>
            </div>
        </>
    );
}