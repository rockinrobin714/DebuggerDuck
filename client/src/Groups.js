import React, {Component} from 'react';

class Groups extends Component {
   constructor(props) {
    super(props);
    this.state = {};
  }

   render(){
      
      return (
         <div className='group' onClick={this.props.selectGroup}><button className='group-button'>{this.props.group}</button></div>
      )
   }
   
};

export default Groups;