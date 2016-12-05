import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Volunteer from './Volunteer';

//This is a child component of app.js and the parent of volunteer.js (and therefore a grandparent(?) of request.js)
class VolunteerRequestContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //this info was funneled down from app.js
      username: this.props.username,
      picture: this.props.picture,
      //set the string to '' because we start out with empty inputs
      time: '',
      location: '',
      //This is currently hardcoded in, but eventually we want to retrieve this info from the database.
      volunteers:[{name: 'Dog', picture: 'http://mypetforumonline.com/wp-content/uploads/2014/09/8055895_orig.jpg', location: 'Chipotle', time:'3:00'}]
    };
  }
  
  render() {
    return ( 
     <div className='request-container'>
        Where are you eating?
        <input value={this.state.location} onChange={this.onLocationChange.bind(this)} />
        When are you leaving?
        <input value={this.state.time} onChange={this.onTimeChange.bind(this)} />
        <button className="red-button" onClick={this.onSubmit.bind(this)}>Volunteer your services </button>
        {this.state.volunteers.map(volunteer =>
                <Volunteer 
                //I put math.random because react got angry at me
                key={Math.random()}
                username={this.state.username}
                picture={this.state.picture}
                //This maps out the volunteers in the this.state.volunteers array into the child component, volunteer
                volunteer={volunteer}/>
              )}
        <div className='center'><button className='red-button new-group' onClick={this.props.selectDifferentGroup}>Select a different group</button></div>
     </div>
    );
  }
  

  onLocationChange(event) {
  	this.setState({location: event.target.value});
  }

  onTimeChange(event) {
  	this.setState({time: event.target.value});
  }

  onSubmit(event) {
    //When the user clicks submit, time and location are set to '' and the info is saved into the this.state.volunteers array
    //Change this later to add database functionality
  	this.setState({time:'', location:'', volunteers: this.state.volunteers.concat({name: this.state.username, picture: this.state.picture, location: this.state.location, time: this.state.time})});
  }
  	
};

export default VolunteerRequestContainer;