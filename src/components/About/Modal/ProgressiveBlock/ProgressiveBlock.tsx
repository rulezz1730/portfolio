import React from 'react';
import styles from './ProgressiveBlock.module.scss'
import {ProgressiveDataType} from "./progressiveData";
import ProgressBar from "../ProgressBar/ProgressBar";


type ProgressiveBlockPropsType = {
    data: ProgressiveDataType
}


const ProgressiveBlock: React.FC<ProgressiveBlockPropsType> = (props) => {
    return (
        <div className={styles.progressiveBlock}>
            {props.data.map( (el) => <ProgressBar key={el.skill} label={el.skill} completed={el.progress}/>)}
        </div>
    );
};

export default ProgressiveBlock;