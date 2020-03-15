import React from "react";
import DialogItem from "../Dialogs/DialogItem/DialogItem";
import YouName from "./YouName";



const Friends = (props) => {

  let friendsElements = props.friends.map ( n => <YouName name={n.name} id={n.id}  /> );

  debugger
  return (
      <div>

        {friendsElements}

      </div>
  )
  debugger
};

export default Friends