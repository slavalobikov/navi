import React from "react";
import cls from './Friends.module.css'
import * as axios from 'axios';
import userPhoto from './../../assets/imgs/User-icon.png'

let Friends = (props) => {
        if  (props.friends.length === 0) {
            axios.get ("https://social-network.samuraijs.com/api/1.0/users").then (response => {
                debugger
                props.setFriends(response.data.items );

            })
          /*  props.setFriends(  [
                {id:1, name: 'DimaAMDa' , status:'zavod', folowed: true,
                    imgs: 'https://sun9-24.userapi.com/c626321/v626321424/301e2/gHrxJ28_584.jpg' },
                {id:2, name: 'Palec18' , status:'prosloe', folowed: false,
                    imgs:'https://sun9-50.userapi.com/c850120/v850120393/11c26f/dOJ__m_i5eQ.jpg' },
                {id:3, name: 'zavsze' , status:'ahahha', folowed: true,
                    imgs: 'https://sun9-14.userapi.com/c851228/v851228802/cb5c6/E5KMH7GoMNA.jpg' }
            ]);*/
        }


return <div>
    {
        props.friends.map (f => <div className={cls.user} key={f.id}>
                <div>
                    <div><img className={cls.avaImg} src={f.photos.small != null ? f.photos.small : userPhoto } alt={f.name}/></div>
                    {f.name}
                    {f.folowed
                        ? <div>  <button onClick={ () => {props.folow(f.id)} } > Follow </button> </div>
                        : <div>  <button onClick={ () => {props.unfollow(f.id)} } > unFollow </button>  </div>}

                </div>

                Привет {f.name}
            </div>
        )
    }
</div>

 /*let follow = () => {
        props.folow(props.userID);

    };
 let unfollow = () =>{
     props.unfollow(props.userID);
 };


  let friendsElements = props.friends.map ( n => <User name={n.name}  key={n.id} id={n.id} imgs={n.imgs} folowed={n.folowed}
                                                       follow={follow} unfollow={unfollow} /> );


  return (
      <div>
          {}
        {friendsElements}

      </div>
  )*/
};
export default Friends