import styles from '../styles/Trends.module.css';
import React, { useState, useEffect } from 'react';




function Trends(){

    const [hashtags, setHashtags] =useState([])
    const getAllHastag = () => {
        fetch('http://localhost:3000/tweet/hashtag')
        .then(response => response.json())
        .then(data => {
        setHashtags(data.hashtag)
        });
      };


      useEffect(() => {
        getAllHastag();
    }, []);




return(
     <div className={styles.hashtagContainer}>
            {hashtags.map((hashtag, index) => (
                <div key={index} className={styles.hashtagItem}>
                    <p className={styles.hashtag}>{hashtag}</p>
                    <span className={styles.span}>1 Tweets</span>
                </div>
            ))}
        </div>
)
}

export default Trends;
