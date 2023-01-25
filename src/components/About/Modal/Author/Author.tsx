import React from 'react';
import styles from './Author.module.scss';
import AvatarBlock from './AvatarBlock/AvatarBlock';
import InfoBlock from './InfoBlock/InfoBlock';
import UniversalButton from '../../../../common/UniversalButton/UniversalButton';
import {PhotoStyleType} from '../../About';
import {infoItemsData, infoItemsDataType} from '../infoItemsData';

type AuthorPropsType = {
    avatarSettings?: PhotoStyleType,
    infoItemsData: infoItemsDataType,

}

const Author: React.FC<AuthorPropsType> = (props) => {
    return (
        <div className={styles.author}>
            <AvatarBlock avatarSettings={props.avatarSettings}/>
            <InfoBlock infoItemsData={infoItemsData}/>
            <UniversalButton callBack={() => alert('Functionality will be added soon! :)')}>
                Download CV
            </UniversalButton>
        </div>
    );
};

export default Author;