import React from 'react';
import styles from './Nav.module.scss'
import {NavLink} from 'react-router-dom';
import {menuItems} from '../../../common/navMenuData';

const Nav = () => {
    return (
        <div className={styles.nav}>
            {menuItems.map(menuItem => {
                return  <NavLink key={menuItem.path} to={menuItem.path} className={({ isActive }) =>
                    isActive ? styles.activeLink : styles.link
                }>{menuItem.text}</NavLink>
            })}
        </div>
    );
};

export default Nav;