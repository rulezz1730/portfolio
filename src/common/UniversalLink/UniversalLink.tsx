import React from 'react';
import styles from './UniversalLink.module.scss'

export type UniversalLinkPropsType = {
    children?: JSX.Element | string,
    target?: boolean
}

const UniversalLink: React.FC<UniversalLinkPropsType> = (props) => {
    return <div className={styles.link}>
        <a href='https://www.google.ru/' target={props.target ? "_blank" : ''}>
            {props.children}
        </a>
    </div>

};

export default UniversalLink;