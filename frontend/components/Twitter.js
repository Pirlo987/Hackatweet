import styles from '../styles/Twitter.module.css';
import Tweet from './Tweet';
import Trends from './Trends';

function Twitter(){

return(
    <div className={styles.container}>
        <div className={styles.leftContainer}>
            <img className={styles.logo} src='logo_twitter.png'/>
        </div>
        <div className={styles.middleContainer}>
            <div className={styles.tweetContainer}>
                <div className={styles.titleHome}>
                    <h1>Home</h1>
                 </div>
                <input className={styles.tweetInput} placeholder="What's up ?"></input>
                <div className={styles.btnContainer}>
                <button className={styles.tweetBtn}>Tweet</button>
                </div>
            </div>
            <div className={styles.postContainer}>
            <Tweet/>
            </div>
        </div>
        <div className={styles.rightContainer}>
            <h1 className={styles.trendsTitle}>Trends</h1>
            <div className={styles.trendsContainer}>
                <Trends/>
                <div className={styles.trendsContent}></div>
            </div>
        </div>
    </div>
)
}

export default Twitter;
