import React from "react";
import s from "./ProfileInfo.module.css";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (profile, status, updateStatus) => {
  if (!profile) {
    return <Preloader />;
  }

  return (
    <div>
      <div>
        <img src="https://klike.net/uploads/posts/2019-11/1572608893_20.jpg"></img>
      </div>
      <div className={s.descriptionBlock}>
        <img src={profile.photos.large} />
        <ProfileStatusWithHooks status = {status} updateStatus = {updateStatus} />
      </div>
    </div>
  );
};

export default ProfileInfo;
