//Volunteer.js displays people that have volunteered to get food.
//It renders once for each user that has volunteered.
//Should show name, where the user is going for food, and the time they plan to leave.

//Standard Imports.
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Request from './Request';

class Volunteer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: this.props.username,
      picture: this.props.picture,
      text:'',
      requests:[{username:'Cat', picture:'http://www.warrenphotographic.co.uk/photography/bigs/08482-Fluffy-ginger-female-kitten.jpg', text:'Pick me up a burrito'}]
    };
  }
  onTextChange(event) {
    this.setState({text: event.target.value});
  }
  onSubmit(){
    this.setState({text:'', requests: this.state.requests.concat({username: this.state.username, picture: this.state.picture, text: this.state.text})});
  }
  render() {
  	return ( 
      <div>
        <img className='small-profile-pic' src={this.props.volunteer.picture}/>
        {this.props.volunteer.name} is going to {this.props.volunteer.location} at {this.props.volunteer.time}.
        {this.state.requests.map(request =>
                <Request 
                key= {Math.random()}
                request={request}/>
              )}
          <div>
          What would you like {this.props.volunteer.name} to pick up for you? 
          <input value={this.state.text} onChange={this.onTextChange.bind(this)} /> 
          <button onClick={this.onSubmit.bind(this)} className="red-button">Send your requests</button>
        </div>
     </div>
  );
 }
 
};

export default Volunteer;