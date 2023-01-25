import React, {useEffect, useRef, useState} from 'react';
import Logo from '../../common/Logo/Logo';
import styles from './MobileMenu.module.scss';
import Trigger from './Trigger/Trigger';
import AsideNav from './AsideNav';


const MobileMenu = () => {
    const [isActiveMenu, setIsActiveMenu] = useState<boolean>(false)
    const sideMenuRef = useRef<HTMLDivElement>(null)

    useEffect(() => {

        const onClick = (e: MouseEvent | TouchEvent) => {
            sideMenuRef.current && !sideMenuRef.current.contains(e.target as Node) && closeActiveMenu()
        }
        document.addEventListener('click', onClick)
        return () => document.removeEventListener('click', onClick)
    }, [])

    const handleSetActiveMenu = () => {
        setIsActiveMenu((prev: boolean) => !prev)
    }
    const closeActiveMenu = () => {
        // console.log('за пределами ')
        setIsActiveMenu((prev: boolean) => false)
    }

    return (
        <div className={styles.mobileContainer} ref={sideMenuRef}>
            <div className={styles.topbarContainer}>
                <div className={styles.topbarInner}>
                    <div className={styles.topbar}>
                        <Logo/>
                        <Trigger isActiveMenu={isActiveMenu} activateMenu={handleSetActiveMenu}/>
                    </div>
                </div>
            </div>
            <div className={styles.asideMenu}>
                <AsideNav isActiveMenu={isActiveMenu} handleSetActiveMenu={handleSetActiveMenu} foo={closeActiveMenu}/>
            </div>
        </div>

    );
};

export default MobileMenu;