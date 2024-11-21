import styles from '../styles/Tweet.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
function Tweet(){

 // Like tweet
 const handleLikeTweet = () => {
   // route like
  };
  let heartIconStyle = { 'cursor': 'pointer' };
 /* if () {
    heartIconStyle = { 'color': '#e74c3c', 'cursor': 'pointer' };
  }*/



return(
   <div className={styles.postContainer}>
        <div className={styles.user}>
            <p>Photo</p>
            <p>Name</p>
            <p>Pseudo</p>
            <p>Time</p>
        </div>
       <div className={styles.tweet}>
            <p>tweet</p>
       </div>
       <div className={styles.like}>
       <span><FontAwesomeIcon icon={faHeart} onClick={() => handleLikeTweet()} style={heartIconStyle} className="like" /></span>
       <span>Counter</span> 
       </div>
   </div> 
)
}

export default Tweet;
