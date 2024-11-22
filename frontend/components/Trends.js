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


    const trending = hashtags.map((data, i) => {
        return (
            <div key={i} className={styles.hashtagItem}>
                <p className={styles.hashtag}>{data}</p>
                <span className={styles.span}> </span>
            </div>
          )})
    ;
    


return(
     <div className={styles.hashtagContainer}>
        
        {trending}
            
     </div>
)
}

export default Trends;
