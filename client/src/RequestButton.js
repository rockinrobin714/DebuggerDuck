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

  	this.state = {food: ''} ;
  }
  
  render() {
    return ( 
      <div>
        What would you like (name) to pick up for you?
        <input value={this.state.food} onChange={this.onFoodChange.bind(this)} />
        <button className="btn btn-info" onClick={this.onClick.bind(this)}>Send your requests</button>

     </div>
    );
  }
  
  //Updates food state
  onFoodChange(event) {
    console.log('value?:',event.target.value);
    console.log('pre-change state',this.state.food);
  	this.setState( {food: event.target.value} );
    console.log('post-change state',this.state.food);
  }  
  
  //Sends request for creating a new Request Component.
  onClick(event) {
  	//Passes request to App for creation of new Request.
  }
  
};

export default RequestButton;