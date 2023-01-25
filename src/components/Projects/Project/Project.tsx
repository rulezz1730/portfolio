import React from 'react';
import styles from './Project.module.scss'

export type ProjectType = {
    url?: string,
    title?: string,
    link?: string,
    description?: string
}

const Projects: React.FC<ProjectType> = (props: ProjectType) => {
    return (
        <div className={styles.project}>
            <div className={styles.image}>
                <img src={props.url} alt=""/>
                <div className={styles.details}>
                    <span>Go to GitHub
                    </span>
                    <a href={props.link} target="_blank"/>
                </div>
            </div>
            <div className={styles.description}>
                <h4>{props.title}</h4>
                <p>{props.description}</p>
            </div>
        </div>
    );
};

export default Projects;