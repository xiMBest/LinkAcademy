import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from '../../style/profile.module.scss'


const Profile = () => {

    return(
        <div className={styles.profile__profileInfo}>
            <div className={styles.profile__avaProfile}>
                <div className={styles.followersInfo}>
                    <h3 className={styles.profile__followersCount}>123K</h3>
                    <p className={styles.profile__textFollowers}>Followers</p>
                </div>
                <a className={styles.profile__avaIcon}>
                    <div className={styles.profile__borderAva}>
                        <div className={styles.profile__bgAva}>
                            <div className={styles.profile__newStories}><div className={styles.profile__lineHor}></div>
                            <div className={styles.profile__lineVer}></div></div>
                            <div className={styles.profile__icon}></div>
                        </div>
                    </div>
                    
                </a>
                <div className={styles.profile__followersInfo}>
                    <h3 className={styles.profile__followersCount}>123K</h3>
                    <p className={styles.profile__textFollowing}>Following</p>
                </div>
            </div>
            <div className={styles.profile__nickname}>
                <h3 className={styles.profile__name}>Alexandr Sokolov - Photographer</h3>
            </div>
            <p className={styles.profile__bio}>Like to travel and shoot cinematic and b/w photos
Tools - Capture One for Raw</p>
            <div className={styles.profile__profileBtns}>
                <button className={styles.profile__editProfile}>Edit profile</button>
                <NavLink to='/home/newPost' ><button className={styles.profile__newPost}>New Post</button></NavLink>
            </div>
            <div className={styles.privacyFooter}>
                <p className={styles.profile__footerText}>About Help Privacy Terms Locations Language
© 2020 Linkstagram</p>
            </div>
        </div>
    )
};

export default Profile