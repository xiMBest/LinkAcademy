import React from 'react';
import styles from '../../style/profilePage.module.scss'

interface IProfileProps {
  post: any;
}
 
const ProfilePage = ({post}: IProfileProps) => {
 return (
   <div className={styles.profilePage}>
     <div className={styles.profilePage__avaBlock}>
       <div className={styles.profilePage__avaImgBorder}>
         <div className={styles.profilePage__avaImgBorderBg}>
         </div>
       </div>
       <div className={styles.profilePage__bio}>
          <h1 className={styles.profilePage__fullNameText}>Full Name</h1>
          <h2 className={styles.profilePage__jobTitleText}>Job Title</h2>
          <p className={styles.profilePage__descriptionBio}>Like to travel and shoot cinematic and b/w photos
Tools - Capture One for Raw</p>
       </div>
       <div className={styles.profilePage__infoBlock}>
         <div className={styles.profilePage__propsValue}>
           <h2 className={styles.priflePage}>1,1K</h2>
           <h2>448</h2>
         </div>
       </div>
     </div>
   </div>
 );
};
 
export default ProfilePage;
