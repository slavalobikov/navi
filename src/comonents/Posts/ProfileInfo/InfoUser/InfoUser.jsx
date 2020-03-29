import React from 'react';
import cls from './InfoUser.module.css'






class InfoUser extends React.Component {
    state = {
      editMode: false
    };

    activateEditeMode = () => { // Стрелочная функиця, что бы не пришлось биндить
        this.setState({
            /* Для того что бы изменилось, перерендрилось */ /* setState асинхронная */
            editMode:true
        })
       /* this.state.editMode = true;*/ /* Не перерендрится, так как локал стэйт  */
};
    deactivateEditeMode = () => { // Стрелочная функиця, что бы не пришлось биндить
        this.setState({
            /* Для того что бы изменилось, перерендрилось */ /* setState асинхронная */
            editMode:false
        })
       /* this.state.editMode = true;*/ /* Не перерендрится, так как локал стэйт  */
};

render() {
    debugger
    return <div >

        {this.state.editMode
            // onBlur - когда фокус проподает вызывается
            ?<span><input autoFocus={true} onBlur={this.deactivateEditeMode} value={this.props.status}   /></span>
            :<span onDoubleClick={this.activateEditeMode }>{this.props.status}</span>}




    </div>
}
}

export default InfoUser;

