import styles from '../styles/Tweet.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';



function Tweet(props){
  const user = useSelector((state) => state.user.value);
 // Like tweet
 const handleLikeTweet = () => {
   fetch('http://localhost:3000/tweet/like',{
   method: "POST",
   headers: { "Content-Type": "application/json" },
   body: JSON.stringify({token: user.token, id : props.id }),
 })
   .then((response) => response.json())
   .then((data) => {
     if (data.result) {
      props.refreshLastTweet()
     
   }});

  };
//Dislike tweet
  const handleDislikeTweet = () => {
    fetch('http://localhost:3000/tweet/dislike',{
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({token: user.token, id : props.id }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.result) {
       props.refreshLastTweet()
      
    }});
 
   };
  let heartIconStyle = { 'cursor': 'pointer' };
  if (props.isLiked) {
    heartIconStyle = { 'color': '#e74c3c', 'cursor': 'pointer' };
  }

  const newBlueTweet = bluetweet(props.tweet);


return(
   <div className={styles.postContainer}>
        <div className={styles.user}>
          <img className={styles.avatar} src='avatar.png'/>
            <p>{props.name}</p>
            <p className={styles.grey}>@{props.username} </p>
            <span className={styles.grey}>{props.date}</span> 
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
