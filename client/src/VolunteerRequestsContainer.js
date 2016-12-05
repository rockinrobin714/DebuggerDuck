import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Volunteer from './Volunteer';

//Component
class VolunteerRequestContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: this.props.username,
      picture: this.props.picture,
      time: '',
      location: '',
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
                key={Math.random()}
                username={this.state.username}
                picture={this.state.picture}
                volunteer={volunteer}/>
              )}
        <div className='center'><button className='red-button new-group' onClick={this.props.selectDifferentGroup}>Select a different group</button></div>
     </div>
    );
  }
  
  //
  onLocationChange(event) {
  	this.setState({location: event.target.value});
  }

  onTimeChange(event) {
  	this.setState({time: event.target.value});
  }

  onSubmit(event) {
  	this.setState({time:'', location:'', volunteers: this.state.volunteers.concat({name: this.state.username, picture: this.state.picture, location: this.state.location, time: this.state.time})});
  }
  	
};

export default VolunteerRequestContainer;