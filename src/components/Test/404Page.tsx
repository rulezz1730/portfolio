import React from 'react';
import styles from './404Page.module.scss'

const NotFound404 = () => {
    return (
        <div className={styles.notFoundBody} >
             <p><span>404</span>{'\n'} Not Found</p>
        </div>

    );
};

export default NotFound404;