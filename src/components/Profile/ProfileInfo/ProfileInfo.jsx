import React from "react";
import s from "./ProfileInfo.module.css";
import PreLoader from "../../commen/Preloader/Preloader";
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }

  return (
    <div>
      <div>
        <img src="https://klike.net/uploads/posts/2019-11/1572608893_20.jpg"></img>
      </div>
      <div className={s.descriptionBlock}>
        <img src={props.profile.photos.large} />
        <ProfileStatus status = {props.status} updateStatus = {props.updateStatus} />
      </div>
    </div>
  );
};

export default ProfileInfo;
