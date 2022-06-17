import React from 'react';
import styles from './Wish.module.scss'
import stylesContainer from '../../common/styles/Container.module.scss'

const Wish = () => {
    return (
        <div className={styles.wishBlock}>
            <div className={`${stylesContainer.container} ${styles.wishContainer}`}>
                <h2>Considering remote work</h2>
                <button>Hire me</button>
            </div>
        </div>
    );
};

export default Wish;