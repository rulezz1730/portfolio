import React from 'react';
import styles from './MyJob.module.scss'

type MyJobType = {
    projectName: string,
    description: string,
}

const MyJob = ({projectName, description}:MyJobType) => {
    return (
        <div className={styles.myJob}>
            <div className={styles.jobViewBlock}>
                <button>Look</button>
            </div>
            <div className={styles.jobDescription}>
                <h2>{projectName}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default MyJob;