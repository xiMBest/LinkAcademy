import React, { useEffect, useState } from "react";
import styles from '../../style/main.module.scss'
import Card from "./card";
import Slider from "./slider"
import Profile from "./profile";
import MorePost from "./morePost";
import NewPost from "./newPost";
import { useSelector } from "react-redux";
import { AppState } from "../../../core/store/store";
import { Route } from "react-router";

const Main = () => {

    const posts = useSelector((state: AppState) => state.posts.posts);
    useEffect(() => {
        console.log(posts);
    }, [posts]);

    const newpost = useSelector((state: AppState) => state.posts.posts);
    useEffect(() => {
        console.log(newpost);
    }, [newpost]);



    return (
        <div className={styles.main}>
            <div className={styles.main__posts}>
                <MorePost />
                <Route path='/home/newPost'>
                    <NewPost newpost={newpost} />
                </Route>
                <Slider />
                <div className={styles.main__cards}>
                    {posts.map(post => <Card post={post} /> )}
                </div>
            </div>
            <div className={styles.main__profile}>
                <Profile/>
            </div>
        </div>
    );
}

export default Main