import React, {useEffect, useState} from 'react';
import styles from './Home.module.scss'


import UniversalButton from '../../common/UniversalButton/UniversalButton';
import {useNavigate} from 'react-router-dom';

const Home = () => {
    const [print, setPrint] = useState<boolean>(false)
    const navigate = useNavigate()

    useEffect(() => {
        setPrint(true)
    }, [])

    const handleClick = (): void => {
        return navigate('/contacts')
    }
    useEffect(() => {
        console.log(print)
    },[print])

    return (
        <div className={`${styles.mainBlock} ${!print && styles.hidden}`}>
            <div className={`${styles.mainContainer}`}>
                <div className={styles.mainBody}>
                    <h2 className={styles.name}>EVGENY <span className={styles.coloring}>ALEXEEV</span>
                    </h2>
                    <h3>
                        <span className={styles.blc}>Frontend </span>
                        <span>Developer</span>
                    </h3>
                    <UniversalButton callBack={handleClick}>Get in Touch</UniversalButton>
                </div>
            </div>
        </div>
    );
};

export default Home;