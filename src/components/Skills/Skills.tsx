import React from 'react';
import styles from './Skills.module.scss'
import stylesContainer from '../../common/styles/Container.module.scss'
import Skill from "./Skill/Skill";
import {fakeData} from "../../common/fakeData";

const Skills = () => {
    return (
        <div className={styles.skillsBlock}>
            <div className={`${stylesContainer.container} ${styles.skillsContainer}`}>
                <h2>My Skills</h2>
                <div className={styles.skills}>
                    <Skill title='React' description={fakeData.react}/>
                    <Skill title='Redux' description={fakeData.redux}/>
                    <Skill title='JS' description={fakeData.js}/>
                    <Skill title='CSS/SCSS' description={fakeData.css}/>
                </div>
            </div>
        </div>
    );
};

export default Skills;