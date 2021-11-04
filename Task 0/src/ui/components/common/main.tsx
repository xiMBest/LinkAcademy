import React, { useState } from "react";
import styles from '../../style/main.module.scss'
import Card from "./card";
import Slider from "./slider"
import Profile from "./profile";

const Main = () => {

    const [show,setShow]=useState(true)
    
    return (
        <div className={styles.main}>
            <div className={styles.main__posts}>
            <div className={styles.main__hiddenBlock}>
            {
                show?<div className={styles.main__morePost}>
                    <div className={styles.main__morePostBlock}>
                        <a href='/' className={styles.main__morePostText}>New posts available</a>
                        <a onClick={()=>setShow(false)} className={styles.main__morePostIcon}></a>
                    </div>
                </div>:null
            }
            </div>
                <Slider />
                <div className={styles.main__cards}>
                    <Card />
                    <Card />
                </div>
            </div>
            <div className={styles.main__profile}>
                <Profile />
            </div>
        </div>
    )
};

export default Main