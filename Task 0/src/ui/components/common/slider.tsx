import React from "react";
import styles from '../../style/slider.module.scss';
import storiesOne from '../../../public/images/storiesOne.png';



const Slider = () => {

    return (
        <div className={styles.slider}>
            <div className={styles.slider__gradient}></div>
            <ul className={styles.slider__formUl}>
            <li className={styles.slider__formLiNonVisited}>
                    <div className={styles.slider__storiesBg}>
                        <div className={styles.slider__storiesNonVisited}></div>
                    </div>
                </li>
                <li className={styles.slider__formLiNonVisited}>
                    <div className={styles.slider__storiesBg}>
                        <div className={styles.slider__storiesNonVisited}></div>
                    </div>
                </li>
                <li className={styles.slider__formLiVisited}><div className={styles.slider__storiesVisited}></div></li>
                <li className={styles.slider__formLiVisited}><div className={styles.slider__storiesVisited}></div></li>
                <li className={styles.slider__formLiVisited}><div className={styles.slider__storiesVisited}></div></li>
                <li className={styles.slider__formLiVisited}><div className={styles.slider__storiesVisited}></div></li>
                <li className={styles.slider__formLiVisited}><div className={styles.slider__storiesVisited}></div></li>
                <li className={styles.slider__formLiVisited}><div className={styles.slider__storiesVisited}></div></li>
            </ul>
        </div>
    )
}

export default Slider;
