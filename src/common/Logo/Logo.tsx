import React from 'react';
import styles from './Logo.module.scss';
import {useNavigate} from 'react-router-dom';

const Logo = () => {
    const navigate = useNavigate()
    
    const handleClickLogo = () => {
        navigate('/home')
    }

    return (
        <div className={styles.logo} onClick={handleClickLogo}>
            Think it's a<br/>
            <span><span className={styles.firstLogoLetter}>L</span> ogo</span>
        </div>
    );
};

export default Logo;