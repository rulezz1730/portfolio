import React from 'react';
import styles from './Skill.module.scss'

type SkillType = {
    title: string,
    description: string,
}

const Skill = ({title, description}: SkillType) => {
    return (
        <div className={styles.skill}>
            <div className={styles.icon}></div>
            <h3>{title}</h3>
            <span className={styles.description}>{description}</span>
        </div>
    );
};

export default Skill;