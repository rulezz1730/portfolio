import React from 'react';
import {infoItemsData, infoItemsDataType} from '../../infoItemsData';
import styles from './InfoBlock.module.scss';
import InfoItem from './InfoItem/InfoItem';

type InfoBlockPropsType = {
    infoItemsData: infoItemsDataType
}

const InfoBlock: React.FC<InfoBlockPropsType> = (props) => {
    return (
        <div className={styles.list}>
            {
                Object.keys(infoItemsData).map((el: string) => {
                    return <InfoItem key={el}
                                     content={infoItemsData[el].content}
                                     icon={infoItemsData[el].icon}
                                     connection={infoItemsData[el].connection && infoItemsData[el].connection}/>
                })
            }
        </div>
    );
};

export default InfoBlock;