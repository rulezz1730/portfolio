import React from 'react';
import styles from "./RightSubblockWrapper.module.scss"

type RightSubblockWrapperPropsType = {
    children: React.ReactNode | React.ReactNode[],
    class?: string,
}

const RightSubblockWrapper: React.FC<RightSubblockWrapperPropsType> = (props) => {
    return (
        <div className={`${styles.generalSubblock} ${props.class && props.class}`}>
            {props.children}
        </div>
    );
};

export default RightSubblockWrapper;