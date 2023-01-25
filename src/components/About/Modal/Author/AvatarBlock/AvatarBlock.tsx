import React from 'react';
import styles from './AvatarBlock.module.scss';
import {PhotoStyleType} from '../../../About';

type AvatarBlockPropsType = {
    avatarSettings?: PhotoStyleType,
}

const AvatarBlock: React.FC<AvatarBlockPropsType> = (props) => {
    return (<>
            <div className={styles.avatarImage} style={props.avatarSettings}>
            </div>
            <div className={styles.short}>
                <h3 className={styles.name}>EVGENY <span className={styles.coloring}>ALEXEEV</span></h3>
                <h3 className={styles.job}>Frontend <span className={styles.word}>Developer</span></h3>
            </div>
        </>
    );
};

export default AvatarBlock;