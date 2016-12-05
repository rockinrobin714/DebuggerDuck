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
     </div>
    );
  }
  	
};

export default VolunteerButton;