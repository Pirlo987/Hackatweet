import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import Tweet from '../components/Tweet'

function LastTweets(){
const [tweets, setTweets] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/tweet/wall')
        .then(res =>res.json())
        .then(data => setTweets(data.tweet))
      }, []);
     
      
      const afficherTempsEcoule = (dateCreation) => {
        let datePost = new Date(dateCreation).getTime() // Calculer la différence en millisecondes
        let diffMs = Date.now() - datePost;
   
        // Convertir cette différence en secondes, minutes, heures, jours
        let seconds = Math.floor(diffMs / 1000);
        let minutes = Math.floor(seconds / 60);
        let hours = Math.floor(minutes / 60);
        let days = Math.floor(hours / 24);
    
        // Formater en chaîne lisible
        if (days > 0) {
            return `${days} jour${days > 1 ? 's' : ''} ago`; // Si plus d'un jour
        } else if (hours > 0) {
            return `${hours} heure${hours > 1 ? 's' : ''} ago`; // Si plus d'une heure
        } else if (minutes > 0) {
            return `${minutes} minute${minutes > 1 ? 's' : ''} ago`; // Si plus d'une minute
        } else {
            return `${seconds} seconde${seconds > 1 ? 's' : ''} ago`; // Moins d'une minute
        }
    };

      const allTweets = tweets.map((data, i) => {
        let timeAgo = afficherTempsEcoule(data.creationDate);

          return <Tweet key={i} name={data.user.name} username={data.user.username} tweet={data.tweet} date={timeAgo} counter={data.like.length}/>;
      });

      return (
        <>
         {allTweets}
        </>
      );
    }


  export default LastTweets;




