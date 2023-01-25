import React from 'react';
import styles from './ModalTitle.module.scss';

type ModalTitlePropsType = {
    mainText: string,
    coloringText: string,
}

const ModalTitle: React.FC<ModalTitlePropsType> = (props) => {
    return (
        <div className={styles.generalTitle}>
            <h3>{props.mainText} <span className={styles.coloring}>{props.coloringText}</span></h3>
        </div>
    );
};

export default ModalTitle;