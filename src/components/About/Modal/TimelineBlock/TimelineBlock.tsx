import React from 'react';
import styles from './TimelineBlock.module.scss'
import {TimelineItemType} from "../timeData";
import TimelineItem from "./TimelineItem/TimelineItem";

type EducationBlockPropsType = {
    educationData: Array<TimelineItemType>,
}

const TimelineBlock: React.FC<EducationBlockPropsType> = (props) => {
    return (
        <div className={styles.list}>
            <ul>
                {props.educationData.map((education: TimelineItemType) => {
                    return <li key={education.place}><TimelineItem timeData={education}/>
                    </li>
                })}
            </ul>
        </div>

    );
};

export default TimelineBlock;

