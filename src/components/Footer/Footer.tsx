import React from 'react';
import stylesContainer from "../../common/styles/Container.module.scss";
import styles from './Footer.module.scss'

const Footer = () => {
    return (
        <div className={styles.footerBlock}>
            <div className={`${styles.footerContainer} ${stylesContainer.container}`}>
                <h2>Evgeny Alexeev</h2>
                <div className={styles.communication}>
                    <div className={styles.option}></div>
                    <div className={styles.option}></div>
                    <div className={styles.option}></div>
                    <div className={styles.option}></div>
                </div>
                <p>Copyright © 2022 All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;