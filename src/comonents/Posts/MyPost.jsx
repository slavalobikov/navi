import React from 'react';
import cls from './MyPost.module.css'
import Post from "./Post/Post";
import ProfileInfo from "./ProfileInfo/ProfileInfo";





const MyPost = (props) => {

  /*   let postData = [
         {id: '1', text: 'Ты ничего бы не смог без меня!', imgs:'https://gamepedia.cursecdn.com/dota2_gamepedia/7/7f/ArtStyle.jpg' , likeCounts: '20' },
         {id: '2', text: 'Было топ, спасибо за эмоции', imgs:'https://svirtus.cdnvideo.ru/1curTl4HhDeZhkpcTU5MyOK8hKM=/0x0:327x327/200x200/filters:quality(100)/https://hb.bizmrg.com/esports-core-media/b7/b72150c6301704818231406ecb66bfd5.jpg?m=fc0447665b6498567651879444f5957e' , likeCounts: '2584' }
     ];*/
    let postsElements = props.postData.map ( p =>  <Post text={p.text} key={p.id}  imgs={p.imgs} likeCounts={p.likeCounts} /> );

    return (
        <div className={cls.item}>

                <ProfileInfo dispatch={props.dispatch}
                             postData={props.postData}
                             newPostText={props.newPostText}
                             profile={props.profile}


                             /*state={props.state} store={props.store}*//>
           <div className={cls.coment}>{ postsElements }</div>

        </div>
    );
}

export default MyPost;

