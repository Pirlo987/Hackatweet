import styles from '../styles/Tweet.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
function Tweet(props){

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
            
            <p>{props.name}</p>
            <p>{props.username}</p>
            <span>{props.date}</span> 
        </div>
       <div className={styles.tweet}>
            <p>{props.tweet}</p>
       </div>
       <div className={styles.like}>
       <span><FontAwesomeIcon icon={faHeart} onClick={() => handleLikeTweet()} style={heartIconStyle} className="like" /></span>
       <span>{props.counter}</span> 
       </div>
   </div> 
)
}

export default Tweet;
