import React from 'react';
import styles from './QualityServiceItem.module.scss';

type QualityServiceItemPropsType = {
    item: string,
}

const QualityServiceItem: React.FC<QualityServiceItemPropsType> = (props) => {
    return <>
        <i className={styles.iconRightDir}></i>
        {props.item}
    </>
};

export default QualityServiceItem;