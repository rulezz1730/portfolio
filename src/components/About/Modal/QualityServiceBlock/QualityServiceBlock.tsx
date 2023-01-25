import React from 'react';
import {qualities, QualType} from "../Qualities";
import QualityServiceItem from "./QualityServiceItem/QualityServiceItem";
import styles from './QualityServiceBlock.module.scss'

type QualityServiceBlockPropsType = {
    qualities: Array<QualType>,
}

const QualityServiceBlock: React.FC<QualityServiceBlockPropsType> = (props) => {
    return (
        <div className={styles.service}>
            <ul>
                {qualities.map((q: QualType) => <li key={q.qual}><QualityServiceItem item={q.qual}/></li>)}
            </ul>
        </div>
    );
};

export default QualityServiceBlock;