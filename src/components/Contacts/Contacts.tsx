import React, {useEffect, useState} from 'react';
import styles from '../Contacts/Contacts.module.scss';
import UniversalButton from '../../common/UniversalButton/UniversalButton';
import {contactItemsData} from './ContactsLeft/contactItemsData';
import ContactItems from './ContactsLeft/ContactItems/ContactItems';

const Contacts = () => {
    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [textArea, setTextArea] = useState<string>('')
    const [print, setPrint] = useState<boolean>(false)

    const handleChangeInputField = (text: string, newTextData: (newText: string) => void): void => {
        console.log(text)
        newTextData(text)
    }

    useEffect(() => {
        setPrint(true)
    }, [])

    return (
        <div className={`${styles.contactsBlock} ${!print && styles.hidden}`}>
            <div className={styles.container}>
                <h3>Get in <span className={styles.coloring}>Touch</span></h3>
                <div className={styles.contactsWrapper}>
                    <div className={styles.contactsLeft}>
                        <ContactItems contactsData={contactItemsData}/>
                    </div>
                    <div className={styles.contactsRight}>
                        {/*Here shoud be formik (will be added some later)*/}
                        <form action='' onSubmit={(e) => {
                            e.preventDefault()
                            alert(`name: ${name}, email: ${email}, textarea: ${textArea}`)
                        }}>
                            <div className={styles.firstData}>
                                <ul>
                                    <li>
                                        <input id='name'
                                               type='text'
                                               placeholder='Name'
                                               name='name'
                                               value={name}
                                               onChange={(e) => handleChangeInputField(e.currentTarget.value, setName)}
                                        />
                                    </li>
                                    <li>
                                        <input id='email' type='email' name='email' placeholder='Email' value={email}
                                               onChange={(e) => handleChangeInputField(e.currentTarget.value, setEmail)}/>
                                    </li>
                                </ul>
                            </div>
                            <div className={styles.lastData}>
                                <textarea id='message' placeholder='Message' name='message'
                                          onChange={(e) => handleChangeInputField(e.currentTarget.value, setTextArea)}></textarea>
                            </div>
                            <UniversalButton callBack={() => {
                                console.log('name: ', name, 'email: ', email, 'textArea: ', textArea)
                            }}>
                                Submit Message
                            </UniversalButton>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Contacts;