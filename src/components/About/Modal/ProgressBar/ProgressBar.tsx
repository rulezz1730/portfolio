import React from 'react';
import styles from './ProgressBar.module.scss'

type PropgressBarPropsType = {
    completed: string | number,
    label: string,
}

const ProgressBar: React.FC<PropgressBarPropsType> = (props) => {
    const {completed, label} = props;

    const pourStyles = {
        width: `${completed}%`,
    }

    return (
        <div className={styles.progressiveBar}>
            <div className={styles.info}>
                <span className={styles.label}>{label}</span>
                <span className={styles.percent}>{completed}%</span>
            </div>
            <div  className={styles.progressiveLine}>
                <div style={pourStyles} className={styles.pouringLine}>
                </div>
            </div>
        </div>
    );
};

export default ProgressBar;