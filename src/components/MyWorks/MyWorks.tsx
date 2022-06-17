import React from 'react';
import styles from './MyWorks.module.scss'
import stylesContainer from '../../common/styles/Container.module.scss'
import MyJob from "./MyJob/MyJob";

const MyWorks = () => {
    return (
        <div className={styles.myWorksBlock}>
            <div className={`${stylesContainer.container} ${styles.myWorksContainer}`}>
                <h2>My Works</h2>
                <div className={styles.jobListContainer}>
                    <MyJob projectName={'Project name'} description={"Etiam tempor orci eu lobortis Etiam tempor orci eu lobortisEtiam tempor orci eu lobortis"}/>
                    <MyJob projectName={'Project name'} description={"Etiam tempor orci eu lobortis"}/>
                    <MyJob projectName={'Project name'} description={"Etiam tempor orci eu lobortis"}/>
                </div>
            </div>
        </div>
    );
};

export default MyWorks;