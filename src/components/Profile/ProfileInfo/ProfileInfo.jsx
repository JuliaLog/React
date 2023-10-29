import React from "react";
import s from "./ProfileInfo.module.css";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from '../../../assets/images/images.png';

const ProfileInfo = (profile, status, updateStatus, isOwner) => {
  if (!profile) {
    return <Preloader />;
  }

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
       savePhoto(e.target.files[0]);
    }
  }

  return (
    <div>
      <div>
        <img src="https://klike.net/uploads/posts/2019-11/1572608893_20.jpg"></img>
      </div>
      <div className={s.descriptionBlock}>
        <img src={profile.photos.large || userPhoto} className={s.mainPhoto}/>
        { isOwner && <input type={'file'} onChange={} /> }
        <ProfileStatusWithHooks status = {status} updateStatus = {updateStatus} />
      </div>
    </div>
  );
};

export default ProfileInfo;
