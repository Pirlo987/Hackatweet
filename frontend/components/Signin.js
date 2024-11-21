import { Button, Modal } from 'antd';
import styles from '../styles/Signin.module.css';
import React, { useState } from 'react';

function Signin(){

        const [isModalOpen, setIsModalOpen] = useState(false);
        const showModal = () => {
          setIsModalOpen(true);
        };
        const handleOk = () => {
          setIsModalOpen(false);
        };
        const handleCancel = () => {
          setIsModalOpen(false);
        };
        return (
          <>
            <Button type="primary" onClick={showModal}>
              Signin
            </Button>
            <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
            <div className={styles.signinContainer}>
                <img src='logo_twitter.png'/>
                <h1>Connect to Hackatweet</h1>
                <input type='text'></input>
                <input type='text'></input>
                <button>Signin</button>
            </div>
            </Modal>
          </>
        );
      }


    export default Signin;