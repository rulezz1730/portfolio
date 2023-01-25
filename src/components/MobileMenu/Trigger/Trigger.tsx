import React from 'react';
import styles from './Triger.module.scss';

type TriggerPropsType = {
    activateMenu: () => void,
    isActiveMenu: boolean,
}

const Trigger: React.FC<TriggerPropsType> = (props) => {
    return (
        <div className={`${styles.menubar} ${props.isActiveMenu && styles.isActive}`} onClick={props.activateMenu}>
            <div className={`${styles.bar} ${styles.bar1}`}></div>
            <div id="bar2" className={`${styles.bar} ${styles.bar2}`}></div>
            <div id="bar3" className={`${styles.bar} ${styles.bar3}`}></div>
        </div>
    );
};

export default Trigger;