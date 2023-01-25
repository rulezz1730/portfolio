import React from 'react';
import styles from './LanguageSkillsBlock.module.scss'
import {LangSkillItemDataType} from "../langSkillData";
import LanguageSkillItem from "./LanguageSkillItem/LanguageSkillItem";

type LanguageSkillsBlockPropsType = {
    langData: Array<LangSkillItemDataType>,
}



const LanguageSkillsBlock: React.FC<LanguageSkillsBlockPropsType> = (props) => {
    return <div className={styles.languageList}>
        <ul>
            {props.langData.map(lang => <li key={lang.title}><LanguageSkillItem title={lang.title} score={lang.score}/>
            </li>)}
        </ul>
    </div>
};

export default LanguageSkillsBlock;