import React from "react";
import User from "./User";




const Friends = (props) => {

  let friendsElements = props.friends.map ( n => <User name={n.name} id={n.id} key={n.id}  imgs={n.imgs} /> );


  return (
      <div>

        {friendsElements}

      </div>
  )

};

export default Friends