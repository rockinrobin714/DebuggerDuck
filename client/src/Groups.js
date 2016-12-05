import React, {Component} from 'react';

class Groups extends Component {
   constructor(props) {
    super(props);
    this.state = {};
  }

   render(){
      // There's not much to this component. Technically, we could probably throw it in the app.js if we wanted to.
      return (
         <div className='group' onClick={this.props.selectGroup}><button className='group-button'>{this.props.group}</button></div>
      )
   }
   
};

export default Groups;