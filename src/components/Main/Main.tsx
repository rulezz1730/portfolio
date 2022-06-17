import React from 'react';
import styles from './Main.module.scss'
import styleContainer from '../../common/styles/Container.module.scss'

const Main = () => {
    return (
        <div className={styles.mainBlock}>
            <div className={`${styleContainer.container} ${styles.mainContainer}`}>
                <div className={styles.leftBlock}>
                    <span>Hi everyone</span>
                    <h1>My name is <br/>Evgeny Alexeev</h1>
                    <p>And i'm Front-end developer</p>
                </div>
                <div className={styles.rightBlock}>
                </div>
            </div>
        </div>
    );
};

export default Main;