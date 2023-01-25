import React from 'react';
import styles from './MobileMenu.module.scss';
import {menuItems} from '../../common/navMenuData';
import {NavLink} from 'react-router-dom';

type AsideNavPropsType = {
    isActiveMenu: boolean,
    handleSetActiveMenu: () => void
    foo: () => void
}

const AsideNav: React.FC<AsideNavPropsType> = (props) => {

    return (
        <div className={`${styles.mobileNav} ${props.isActiveMenu ? styles.opened : ''}`} >
            <div className={styles.menuList}>
                {menuItems.map(menuItem => {
                    return <NavLink to={menuItem.path}
                                    className={({isActive}) => isActive ? styles.activeLink : styles.link}
                                    onClick={props.handleSetActiveMenu}
                                    key={menuItem.text}>
                        {menuItem.text}
                    </NavLink>
                })}
            </div>
        </div>
    );
};

export default AsideNav;