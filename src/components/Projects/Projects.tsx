import React, {ReactNode, useEffect, useState} from 'react';
import styles from './Projects.module.scss'
import Project from './Project/Project';
import projectsData from './projectsData';

const Projects: React.FC = () => {
    const [print, setPrint] = useState<boolean>(false);

    useEffect(() => {
        setPrint(true)
    }, [])

    const projectList: React.ReactElement[] | ReactNode[] = Object.keys(projectsData).map((project: string) => {
        return <Project url={projectsData[project].url}
                        link={projectsData[project].link}
                        title={projectsData[project].title}
                        description={projectsData[project].description}
                        key={projectsData[project].link}/>
    })

    return (
        <div className={`${styles.myWorksBlock} ${!print && styles.hidden}`}>
            <div className={styles.myWorksContainer}>
                <h3>Creative <span className={styles.coloring}>Portfolio</span></h3>
                <div className={styles.jobListContainer}>
                    {projectList}
                </div>
            </div>
        </div>
    );
};

export default Projects;