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
<<<<<<< fe5e85f99f7c43d55547b78559aefb8a4e867499
        'RequestButton'
        What do you want?
        <input value={this.state.food} onChange={this.onFoodChange.bind(this)} />
        Request!
        <button onClick={this.onClick.bind(this)} />
||||||| merged common ancestors
        'RequestButton'
        What do you want?
        <input value={this.state.food} onChange={this.onFoodChange} />
        Request!
        <button onClick={this.onClick} />
=======
        What would you like (name) to pick up for you?
        <input value={this.state.food} onChange={this.onFoodChange} />
        <button className="btn btn-info" onClick={this.onClick}>Send your requests</button>
>>>>>>> Making the buttons pretty
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