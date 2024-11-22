import styles from "../styles/Tweet.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import bluetweet from "../modules/bluetweet";

function Tweet(props) {
  // Like tweet
  const handleLikeTweet = () => {
    // route like
  };
  let heartIconStyle = { cursor: "pointer" };
  /* if () {
    heartIconStyle = { 'color': '#e74c3c', 'cursor': 'pointer' };
  }*/

  const newBlueTweet = bluetweet(props.tweet);

  return (
    <div className={styles.postContainer}>
      <div className={styles.user}>
        <img className={styles.avatar} src="avatar.png" />
        <p>{props.name}</p>
        <p className={styles.grey}>@{props.username} </p>
        <span className={styles.grey}>{props.date}</span>
      </div>
      <div className={styles.tweet}>
        <p>{newBlueTweet}</p>
      </div>
      <div className={styles.like}>
        <span>
          <FontAwesomeIcon
            icon={faHeart}
            onClick={() => handleLikeTweet()}
            style={heartIconStyle}
            className="like"
          />
        </span>
        <span>{props.counter}</span>
      </div>
    </div>
  );
}

export default Tweet;
