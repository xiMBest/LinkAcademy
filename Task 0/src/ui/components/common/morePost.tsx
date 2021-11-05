import { render } from "@testing-library/react"
import React, { useEffect, useState } from "react"
import styles from '../../style/main.module.scss'
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../../core/store/actions/postsAction";
import { AppState } from "../../../core/store/store";


const MorePost = () => {

    const dispatch = useDispatch();

    const handlBtnClick = () => {
        dispatch(getPosts());
    }

    const [morePost,setShow]=useState(true);
    
    return (
            <div className={styles.main__hiddenBlock}>
                {
                    morePost?<div className={styles.main__morePost}>
                        <div className={styles.main__morePostBlock}>
                            <button onClick={handlBtnClick} className={styles.main__morePostText}>New posts available</button>
                            <a onClick={()=>setShow(false)} className={styles.main__morePostIcon}></a>
                        </div>
                    </div>:null
                }
            </div>
            )
};

export default MorePost