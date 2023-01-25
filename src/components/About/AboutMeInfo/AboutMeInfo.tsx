import React from 'react';
import styles from './AboutMeInfo.module.scss';

const AboutMeInfo = () => {
    return (
        <div className={styles.text}>
            Hello everybody! My name is
            <span className={styles.word}> Evgeny Alexeev. </span>
            I am frontend developer, and I'm very passionate and dedicated to my work.
            Over 2 years I have acquired skills and knowledge that I continue to improve.<br/>
            And I don't plan to stop there.
        </div>
    );
};

export default AboutMeInfo;