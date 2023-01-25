import React, {useEffect, useRef} from 'react';
import styles from './Modal.module.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faXmark} from '@fortawesome/free-solid-svg-icons';
import {PhotoStyleType} from '../About';
import {infoItemsData} from './infoItemsData';
import AboutMeInfo from '../AboutMeInfo/AboutMeInfo';
import ModalTitle from './ModalTitle/ModalTitle';
import RightSubblockWrapper from './RightSubblockWrapper/RightSubblockWrapper';
import {qualities} from './Qualities';
import ProgressiveBlock from './ProgressiveBlock/ProgressiveBlock';
import {progressiveData} from './ProgressiveBlock/progressiveData';
import QualityServiceBlock from './QualityServiceBlock/QualityServiceBlock';
import {langSkillsData} from './langSkillData';
import LanguageSkillsBlock from './LanguageSkillsBlock/LanguageSkillsBlock';
import TimelineBlock from './TimelineBlock/TimelineBlock';
import {educationData, workingData} from './timeData';
import Author from './Author/Author';

type ModalPropsType = {
    active: boolean,
    closeModal: (active: boolean) => void,
    avatarSettings?: PhotoStyleType,
}

const Modal: React.FC<ModalPropsType> = (props) => {
    const modalRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const onClick = (e: MouseEvent | TouchEvent): void => {
            modalRef.current && !modalRef.current.contains(e.target as Node) && props.closeModal(false)
        }
        document.addEventListener('click', onClick)
        return () => document.removeEventListener('click', onClick)
    }, [])

    return (
        <div
             className={props.active ? styles.aboutMeModal + ' ' + styles.active : styles.aboutMeModal}
        >
            <div className={styles.modalBody} >
                <div
                    ref={modalRef}
                     className={`${styles.modalContent} upper`} data-modal={'true'}
                     onClick={(e) => e.stopPropagation()}
                >
                    <button className={styles.closeBtn} style={{cursor: 'pointer'}}
                            onClick={() => {
                                console.log('just click')
                                props.closeModal(false)
                            }}
                    >
                        <FontAwesomeIcon icon={faXmark}/>
                    </button>
                    <div className={styles.left}>
                        <div className={styles.author}>
                            <Author avatarSettings={props.avatarSettings} infoItemsData={infoItemsData}/>
                        </div>
                    </div>
                    <div className={styles.right}>
                        <div className={styles.rightInner}>
                            <RightSubblockWrapper class={styles.biography}>
                                <ModalTitle mainText={'About'} coloringText={'Me'}/>
                                <AboutMeInfo/>
                            </RightSubblockWrapper>
                            <RightSubblockWrapper class={'Quality_services'}>
                                <ModalTitle mainText={'Quality'} coloringText={'Services'}/>
                                <QualityServiceBlock qualities={qualities}/>
                            </RightSubblockWrapper>
                            <RightSubblockWrapper>
                                <ModalTitle mainText={'Programming'} coloringText={'Skills'}/>
                                <ProgressiveBlock data={progressiveData}/>
                            </RightSubblockWrapper>
                            <RightSubblockWrapper>
                                <ModalTitle mainText={'Language'} coloringText={'Skills'}/>
                                <LanguageSkillsBlock langData={langSkillsData}/>
                            </RightSubblockWrapper>
                            <RightSubblockWrapper>
                                <ModalTitle mainText={'Education'} coloringText={'Timeline'}/>
                                <TimelineBlock educationData={educationData}/>
                            </RightSubblockWrapper>
                            <RightSubblockWrapper>
                                <ModalTitle mainText={'Working'} coloringText={'Timeline'}/>
                                <TimelineBlock educationData={workingData}/>
                            </RightSubblockWrapper>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;