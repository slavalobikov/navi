import React from "react";
import cls from './Friends.module.css'
let Friends = (props) => {

return <div>
    {
        props.friends.map (f => <div className={cls.user} key={f.id}>
                <div>
                    <div><img className={cls.avaImg} src={f.imgs} alt={f.name}/></div>
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