import React  from 'react';
import styles from './Header.module.scss'
import Nav from './Nav/Nav';
import Logo from '../../common/Logo/Logo';

const Header = () => {

    return (
        <div className={`${styles.header}`}>
            <div className={styles.container}>
                <div className={`${styles.headerContainer}`}>
                    <Logo/>
                    <Nav/>
                </div>
            </div>
        </div>
    );
};

export default Header;