
import React from 'react';
import cls from './../MyPost.module.css'
import PanelPost from "./Panel/PanelPost";
import PanelPostContainer from "./Panel/PanelPostContainer";
import Preloader from "../../common/Preloader/Preloader";


const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader/>
    }

  return (
      <div>
        <img className={cls.logoImg} src="https://gamepedia.cursecdn.com/dota2_gamepedia/7/7f/Brand_banner_Navi.png?version=5ce5ce40791b1c698f4f740f8fe40e48" alt=""/>
        <div><img className={cls.logoAva} src={props.profile.photos.large} alt=""/>
          Победитель 10 интов из 9
        </div>
          <PanelPostContainer /*dispatch={props.dispatch}
                     newPostText={props.newPostText}*/
                     store={props.store}
                     state={props.state}
                     /*addPost={props.addPost}
                     updateNewPostText={props.updateNewPostText}*/ />
                     {/*<PanelPostContainer store={props.store} dis/>*/}
      </div>
  );
};

export default ProfileInfo

