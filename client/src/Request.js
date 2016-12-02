//Request.js displays existing food request.
//Renders once per food request, under the relevant Volunteer.

//Standard Imports.
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

//Component
class Request extends Component {
	constructor(props) {
    super(props);
 
    this.state = {person: '', request: ''};
  }

  render() {
    return ( 
      <div>
        'Request'
     
      </div>
    );
  }  
  
};

export default Request;