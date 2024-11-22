import styles from "../styles/Twitter.module.css";
import Tweet from "./Tweet";
import React, { useState } from "react";
import { useSelector } from "react-redux";

function Twitter() {
  const [rerender, setRerender] = useState(false);
  const [text, setText] = useState("");
  const user = useSelector((state) => state.user.value);

  const sendingPost = () => {
    fetch("http://localhost:3000/tweet/post", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token: user.token, tweet: text }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.result) {
          setRerender(!rerender);
        }
      });
  };

  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <img className={styles.logo} src="logo_twitter.png" />
      </div>
      <div className={styles.middleContainer}>
        <div className={styles.tweetContainer}>
          <div className={styles.titleHome}>
            <h1>Home</h1>
          </div>
          <input
            onChange={(e) => setText(e.target.value)}
            className={styles.tweetInput}
            value={text}
            placeholder="What's up ?"
          ></input>
          <div className={styles.btnContainer}>
            <button onClick={() => sendingPost()} className={styles.tweetBtn}>
              Tweet
            </button>
          </div>
        </div>
        <div className={styles.postContainer}>
          <Tweet></Tweet>
        </div>
      </div>
      <div className={styles.rightContainer}>
        <h1 className={styles.trendsTitle}>Trends</h1>
        <div className={styles.trendsContainer}>
          <div className={styles.trendsContent}></div>
        </div>
      </div>
    </div>
  );
}

export default Twitter;
