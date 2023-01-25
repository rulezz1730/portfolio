import React from 'react';
import styles from './IconTable.module.scss';
import IconItem from './IconItem/IconItem';
import {iconDataType} from './iconData';

type IconTablePropsType = {
    iconsData: iconDataType[]
}

const IconTable: React.FC<IconTablePropsType> = (props) => {
    return (
        <div className={styles.skillsItems}>
            {props.iconsData.map((icon: iconDataType) => {
                return <IconItem key={icon.id}>
                        {<icon.component style={{width: '70px', height: '70px', margin: '25px'}} className={`${icon.rotate && styles.rotating}`}/>}
                    </IconItem>

            })}
        </div>
    );
};

export default IconTable;