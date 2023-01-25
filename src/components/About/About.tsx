import React, {useEffect, useState} from 'react';
import styles from './About.module.scss'
import avatar from '../../common/images/avatar/avatar.jpg';
import UniversalButton from '../../common/UniversalButton/UniversalButton';
import Modal from './Modal/Modal';
import AboutMeInfo from './AboutMeInfo/AboutMeInfo';
import IconTable from './IconTable/IconTable';
import {iconsData} from './IconTable/iconData';

type FilterType = 'grayscale(20%)' | 'grayscale(30%)' | 'grayscale(40%)' | 'grayscale(50%)' | 'grayscale(70%)'

export type PhotoStyleType = {
    backgroundImage: string,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    filter?: FilterType,
}

const About = () => {
    const [modalState, setModalState] = useState<boolean>(false)
    const [print, setPrint] = useState<boolean>(false);

    const photoStyles: PhotoStyleType = {
        backgroundImage: `url(${avatar})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        filter: 'grayscale(50%)',
    }
    
    useEffect(() => {
        setPrint(true)
    }, [])

    const openModal = (): void => {
        setModalState(true)
    }

    const activeModal = (active: boolean) => {
        setModalState(active)
    }

    return <>
        <div className={`${styles.skillsBlock} ${!print && styles.hidden}`}>
            <div className={styles.skillsContainer}>
                <div className={`${styles.mainSkills}`}>
                    <h3>Main <span className={styles.coloring}>Skills</span></h3>
                    <div className={`${styles.skillsBody}`}>
                        <div className={styles.skills}>
                            <IconTable iconsData={iconsData}/>
                        </div>
                    </div>
                    <div className={styles.aboutMeBlock}>
                        <div className={styles.left}>
                            <div className={styles.image} style={photoStyles}>
                            </div>
                        </div>
                        <div className={styles.right}>
                            <h3 className={styles.name}>EVGENY <span className={styles.coloring}>ALEXEEV</span></h3>
                            <h4 className={styles.job}>
                                <span className={styles.blc}>Frontend </span>
                                <span className={styles.word}>Developer</span>
                            </h4>
                            <AboutMeInfo/>
                            <UniversalButton callBack={openModal}>Learn More</UniversalButton>
                        </div>
                    </div>
                </div>
                <Modal active={modalState} closeModal={activeModal} avatarSettings={photoStyles}/>
            </div>
        </div>
    </>
};

export default About;