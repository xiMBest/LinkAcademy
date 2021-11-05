import React from "react";
import styles from '../../style/card.module.scss';
import postone from '../../../public/images/postone.png';

interface ICardProps {
    post: any;
}

const Card = ({post}: ICardProps) => {
    return (
        <div className={styles.card}>
            <div className={styles.card__header}>
                <div className={styles.card__ava}>
                <div className={styles.card__userLogo}></div>
                <div className={styles.card__infoCreated}>
                    <h3 className={styles.card__nameCreator}>{`${post.author.first_name} ${post.author.last_name}`}</h3>
                    <h4 className={styles.card__timeCreated}>Just now</h4>
                </div>
                </div>
                <div className={styles.card__settingsPost}></div>
            </div>
            <img className={styles.card__postPic} src={postone}/>
            <div className={styles.card__contentFrame}>
                <p className={styles.card__contentText}>TB to New York October 2018.</p>
                <p className={styles.card__contentText}>
                "You shouldn't wait for other people
                 to make special things happen. You have to create 
                 your own memories." Heidi Klum
                </p>
                <div className={styles.card__lover}>
                    <div className={styles.card__interactions}>
                        <div className={styles.card__likes}>
                            <div className={styles.card__likesIcon}></div>
                            <h3 className={styles.card__countInteractions}>439</h3>
                        </div>
                        <div className={styles.card__comments}>
                            <div className={styles.card__commentsIcon}></div>
                            <h3 className={styles.card__countInteractions}>34</h3>
                        </div>
                    </div>
                    <a href='/' className={styles.card__btnShare}>
                        <h3 className={styles.card__textShare}>Share</h3>
                        <div className={styles.card__iconShare}></div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Card;
