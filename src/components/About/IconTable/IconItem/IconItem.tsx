import React, {ReactNode} from 'react';
import styles from './IconItem.module.scss';

type IconItemPropsType = {
    children: ReactNode | ReactNode[],
    key: string,
}

const IconItem: React.FC<IconItemPropsType> = (props) => {
    return (
        <div className={styles.skill}>
            {props.children}
        </div>
    );
};

export default IconItem;