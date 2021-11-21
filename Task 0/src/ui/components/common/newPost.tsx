import { render } from "@testing-library/react"
import React, { useState } from "react"
import styles from '../../style/main.module.scss'
import choosePhoto from '../../../public/images/choosePhoto.svg'
import { NavLink } from "react-router-dom";
import { postPosts } from "../../../core/store/actions/postsAction";
import { useDispatch } from "react-redux";

interface INewPostProps {
    newpost: any;
}

const NewPost = ({newpost}: INewPostProps) => {

    const dispatch = useDispatch();

    const handlBtnClick = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        dispatch(postPosts(description));
        console.log(description);
    }

    const [description, setDescription] = useState('');
    const [imgUrl, setImgUrl] = useState('');

    // const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    //     event.preventDefault();
    //     console.log(description);
    // }
    
    return (
        <form onSubmit={handlBtnClick}>
        <div className={styles.main__hiddenBlock}>
                    <div className={styles.main__newPost}>
                        <div className={styles.main__newPostBlock}>
                            <label className={styles.main__choosePhoto}>
                                <input value={imgUrl} onChange={(e) => setImgUrl(e.target.value)} className={styles.main__inputChooseFile} type="file" />
                                <img src={choosePhoto} alt="choosePhoto" />
                                <p className={styles.main__choosePhotoText}>Choose any photo from your library</p>
                            </label>
                        </div>
                        <div className={styles.main__descriptionBlock}>
                            <p className={styles.main__descriptionText}>Description</p>
                            
                                <textarea value={description} onChange={(e) => setDescription(e.target.value)} className={styles.main__descriptionInput} placeholder='Description'></textarea>
                                <div className={styles.main__newPostBtnBlock}>
                                    <NavLink to='/home' ><button className={styles.main__btn}>Cancel</button></NavLink>
                                    <button className={styles.main__btn}>Post</button>
                                </div>
                            
                        </div>
                        
                    </div>
        </div>
        </form>
    )
};

export default NewPost

