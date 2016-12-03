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
      Pick me up a burrito. - Cat
     <img className='small-profile-pic' src='http://www.warrenphotographic.co.uk/photography/bigs/08482-Fluffy-ginger-female-kitten.jpg'/>
     </div>
    );
  }  
  
};

export default Request;