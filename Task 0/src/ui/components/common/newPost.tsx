import { render } from "@testing-library/react"
import React, { useState } from "react"
import styles from '../../style/main.module.scss'
import choosePhoto from '../../../public/images/choosePhoto.svg'


const NewPost = () => {

    const [newPost,newShow]=useState(true);
    
    return (

        <div className={styles.main__hiddenBlock}>
        {
            newPost?
                    <div className={styles.main__newPost}>
                        <div className={styles.main__newPostBlock}>
                            <label className={styles.main__choosePhoto}>
                                <input className={styles.main__inputChooseFile} type="file" />
                                <img src={choosePhoto} alt="choosePhoto" />
                                <p className={styles.main__choosePhotoText}>Choose any photo from your library</p>
                            </label>
                        </div>
                        <div className={styles.main__descriptionBlock}>
                            <p className={styles.main__descriptionText}>Description</p>
                            <form>
                                <textarea className={styles.main__descriptionInput} placeholder='Description'></textarea>
                            </form>
                        </div>
                        <div className={styles.main__newPostBtnBlock}>
                            <button className={styles.main__btn}>Cancel</button>
                            <button className={styles.main__btn}>Post</button>
                        </div>
                    </div>:null
        }
        </div>

    )
};

export default NewPost