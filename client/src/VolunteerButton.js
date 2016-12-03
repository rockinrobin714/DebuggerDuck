//The VolunteerButton is rendered at the top of Runner.js.
//It has text boxes for a location and a time.
//It has a button for rendering

//Standard imports.
import React, {Component} from 'react';
import ReactDOM from 'react-dom';



//Component
class VolunteerButton extends Component {
  constructor(props) {
    super(props);

    this.state = {location: '', time: ''};
  }
  
  render() {
    return ( 
     <div>
      Where are you grubbing?
      <input value={this.state.location} onChange={this.onLocationChange.bind(this)} />
      When are you leaving?
      <input value={this.state.time} onChange={this.onTimeChange.bind(this)} />
      <button className="btn red-button" onClick={this.onClick.bind(this)}>Volunteer your services </button>
     </div>
    );
  }
  
  //
  onLocationChange(event) {
  	this.setState({location: event.target.value});
    console.log(this.state.location)
  }

  onTimeChange(event) {
  	this.setState({time: event.target.value});
  }

  onClick(event) {
  	//Passes request to app.
  }
  	
};

export default VolunteerButton;