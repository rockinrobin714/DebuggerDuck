import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import VolunteerButton from './VolunteerButton';
import NewVolunteer from './NewVolunteer';

//Component
class VolunteerRequestContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  
  render() {
    return ( 
     <div>
      Where are you eating?
      <input value={this.state.location} onChange={this.onLocationChange.bind(this)} />
      When are you leaving?
      <input value={this.state.time} onChange={this.onTimeChange.bind(this)} />
      <button className="red-button" onClick={this.onClick.bind(this)}>Volunteer your services </button>
      <div className='center'><button className='red-button new-group' onClick={this.props.selectNewGroup}>Select a new group</button></div>
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

export default VolunteerRequestContainer;