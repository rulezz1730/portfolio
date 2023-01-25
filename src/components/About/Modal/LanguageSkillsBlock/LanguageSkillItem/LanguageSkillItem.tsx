import React from 'react';
import styles from './LanguageSkillItem.module.scss'
import {CircularProgressbar} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {COLORS} from "../../../../../common/styles/variableStyles";
import {LangSkillItemDataType} from "../../langSkillData";



const LanguageSkillItem: React.FC<LangSkillItemDataType> = (props) => {
    const defaultScore = 50;
    return (
        <div className={styles.languageItem}>
            <CircularProgressbar
                //if not props.score - static default 50%
                value={Number(props.score) || defaultScore}
                text={`${props.score}%`}
                styles={{
                    // Customize the root svg element
                    root: {
                        width:'110px',
                        height: '110px',
                    },
                    // Customize the path, i.e. the "completed progress"
                    path: {
                        // Path color
                        stroke: `${COLORS.primary.firstColor}`,
                        strokeWidth: '2',
                        // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                        strokeLinecap: 'butt',
                        // Customize transition animation
                        transition: 'stroke-dashoffset 0.5s ease 0s',
                        // Rotate the path
                        transformOrigin: 'center center',
                    },
                    // Customize the circle behind the path, i.e. the "total progress"
                    trail: {
                        // Trail color
                        stroke: `${COLORS.primary.secondColor}`,
                        strokeWidth: '2',
                        // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                        strokeLinecap: 'butt',
                        // Rotate the trail
                        transformOrigin: 'center center',
                    },
                    // Customize the text
                    text: {
                        // Text color
                        fill: `${COLORS.primary.mainTextColor}`,
                        // Text size
                        fontSize: '15px',
                    },
                    // Customize background - only used when the `background` prop is true
                    background: {
                        fill: '#3e98c7',
                    },
                }}
            />
            <div className={styles.title}>
                <span>{props.title}</span>
            </div>

        </div>
    );
};

export default LanguageSkillItem;