import React from 'react';
import styles from './InfoItem.module.scss'
import {IconDefinition} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {AssignmentType} from '../../../infoItemsData';

type InfoItemPropsType = {
    content: string
    icon: IconDefinition,
    connection?: { link: boolean, assignment: AssignmentType },
}

const InfoItem: React.FC<InfoItemPropsType> = (props) => {

    const selectConnection = (assignment: AssignmentType) => {
        switch (assignment) {
            case 'call':
                return 'tel:'
            case 'sentMessage':
                return 'mailto:'
            case 'seeLocation':
                return ''
            default:
                return '#'
        }
    }

    return (
        <div className={styles.infoItem}>
            <FontAwesomeIcon icon={props.icon}/>
            {props.connection
                ? <span><a href={selectConnection(props.connection.assignment)}>{props.content}</a></span>
                : <span>{props.content}</span>
            }
        </div>
    );
};

export default InfoItem;