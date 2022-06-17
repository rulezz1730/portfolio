import React from 'react';
import stylesContainer from "../../common/styles/Container.module.scss";
import styles from "../Contacts/Contacts.module.scss";

const Contacts = () => {
    return (
        <div className={styles.contactsBlock}>
            <div className={`${stylesContainer.container} ${styles.contactsContainer}`}>
                <h2>Сontact me</h2>
                <form action="">
                    <input type="text"/>
                    <input type="text"/>
                    <textarea name="" id=""></textarea>
                    <button type='submit' onClick={e => e.preventDefault()}>Sent</button>
                </form>
            </div>
            
        </div>
    );
};

export default Contacts;