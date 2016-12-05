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
        <button className="red-button" onClick={this.onClick.bind(this)}>Volunteer your services </button>
        <div className='center'><button className='red-button new-group' onClick={this.props.selectNewGroup}>Select a new group</button></div>
     </div>
    );
  }
  	
};

export default VolunteerButton;