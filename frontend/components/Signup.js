import { Button, Modal } from 'antd';
import styles from '../styles/Signup.module.css';
import React, { useState } from 'react';


function Signup(){

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
            Signup
          </Button>
          <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel} className={styles.modalSignup}>
          <div className={styles.signupContainer}>
                <img src='logo_twitter.png'/>
                <h1>Create your Hackatweet account</h1>
                <input className={styles.inputSignup} type='text'></input>
                <input className={styles.inputSignup} type='text'></input>
                <input className={styles.inputSignup} type='text'></input>
                <button>Signup</button>
            </div>
            
          </Modal>                                                                        
        </>
      );
    }





export default Signup