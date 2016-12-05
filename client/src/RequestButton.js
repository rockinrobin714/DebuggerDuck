//RequestButton accepts input for people requesting food from a Volunteer.
//Renders below each Volunteer, below any Requests.
//Text box that accepts a food order(string).

//Standard Imports.
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

//Component
class RequestButton extends Component {
  constructor(props) {
  	super(props);

  	this.state = {} ;
  }
  
  render() {
    return ( 
      <div>
        What would you like (name) to pick up for you?
        <button className="red-button">Send your requests</button>

     </div>
    );
  }
}

export default RequestButton;