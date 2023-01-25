import React from 'react';
import styles from './UniversalButton.module.scss'

type UniversalButtonPropsType = {
    callBack?: (arg?: any) => void,
    children?: JSX.Element | string,
}

const UniversalButton: React.FC<UniversalButtonPropsType> = (props) => {
    return (
        <button className={styles.btn}
                onClick={(e: React.MouseEvent<HTMLButtonElement> | MouseEvent) => {
                    props.callBack && props.callBack()
                    e.stopPropagation()
                }}
        >
            {props.children}
        </button>
    );
};


export default UniversalButton;