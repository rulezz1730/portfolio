import React from 'react';
import styles from '../../../Contacts.module.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {ContactItemType} from '../../contactItemsData';

const ContactItem: React.FC<ContactItemType> = (props) => {
    return <div className={styles.contactNote}>
        <FontAwesomeIcon icon={props.iconComponent}/>
        <a href={`${props.hrefText ? props.hrefText : ''}`} target={props.newTab}>{props.linkText}</a>
    </div>

};

export default ContactItem;