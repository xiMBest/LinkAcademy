import { link } from 'fs';
import React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import ProfilePage from '../../pages/profile/profile';
import styles from '../../style/header.module.scss';

const Header = () => {
    return (
        <div className={styles.header}>
            <a href='/' className={styles.header__logoLink}></a>
            <div className={styles.header__navBar}>
                <a href='/' className={styles.header__btn + ' ' + styles.header__btnHome + ' ' + styles.header__homeText}>Home</a>
                <div className={styles.header__btn + ' ' +styles.header__btnLang}><p className={styles.header__langText}>EN</p></div>
                <NavLink className={styles.header__btn + ' ' + styles.header__profileImg} to='/profilePage'></NavLink>
            </div>

        <Switch>
          <Route path="/profilePage">
            <ProfilePage />
          </Route>
        </Switch>
        </div>
    )
};

export default Header;