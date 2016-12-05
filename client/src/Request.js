//Request.js displays existing food request.
//Renders once per food request, under the relevant Volunteer.

//Standard Imports.
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

//Component
class Request extends Component {
	constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return ( 
      <div>
      {this.props.request.text} - {this.props.request.username}
     <img className='small-profile-pic' src={this.props.request.picture}/>
     </div>
    );
  }  
  
};

export default Request;