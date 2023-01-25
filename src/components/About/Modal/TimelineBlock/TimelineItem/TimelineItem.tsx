import {TimelineItemType} from "../../timeData";
import React from "react";
import styles from "./TimelineItem.module.scss";

export type TimeItemPropsType = {
    timeData: TimelineItemType
}

const TimelineItem: React.FC<TimeItemPropsType> = (props) => {
    return <div className={styles.listInner}>
        <div className={styles.time}><span>{props.timeData.time}</span></div>
        <div className={styles.place}>
            <h3>{props.timeData.place}</h3>
            <span>{props.timeData.speciality}</span>
        </div>
    </div>
}
export default TimelineItem;