import styles from '../styles/Home.module.css';

function Home() {
  return (
    <div className={styles.containerLogin}>

        <div className={styles.leftContainer}>
           <img id={styles.iconeTwitterbg} src='logo_twitter.png'/>
        </div>

        <div className={styles.rightContainer}>

            <div>
                <img id={styles.iconeTwitter} src='logo_twitter.png'/>
            </div>

            <h1 id={styles.h1}>See What's Happening</h1>

            <h2 id={styles.h2}>Join Hackatweet today.</h2>

            <button id={styles.btnSignUp}>Sign up</button>
            
            <p id={styles.p}>Already Have an acoount ?</p>

            <button id={styles.btnSignIn}>Sign in</button>
        </div>

    </div>
  );
}

export default Home;
