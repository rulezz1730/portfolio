import React from 'react';
import {ContactItemType} from '../contactItemsData';
import ContactItem from './ContactItem/ContactItem';

type ContactItemsPropsType = {
    contactsData: Array<ContactItemType>
}

const ContactItems: React.FC<ContactItemsPropsType> = (props) => {
    return (
        <ul>
            {props.contactsData.map((item: ContactItemType) =>{
                return <li key={item.linkText}>
                    <ContactItem {...item}/>
                </li>
            })}
        </ul>
    );
};

export default ContactItems;