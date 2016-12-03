//Profile.js displays the username and logout button in the upper right corner.
//Renders on Group and Runner.
//Stretch Goal:  Loads FB picture.

//Standard imports.
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import FacebookButton from './Login.js'


//Component
class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: false,
      karma: 0
    };
  }
  componentDidMount() {
    // Not sure how to do this yet
    // axios.get(`/fb`)
    //   .then(res => {
    //     const projects = res.data
    //   	this.setState(loggedIn:true);
    //   });
  }
  onButtonClick(){
  	//this.setState({!this.state.loggedIn})
  	if (this.state.loggedIn===true){
	      this.setState({
	        loggedIn: false
	      })
	    } else {
	      this.setState({
	        loggedIn: true
	      })
	    }
	  }

  render() { 
  	if(this.state.loggedIn===false){
  		return (
  			<div className='nav-bar'>
  				
    			<FacebookButton onButtonClick={this.onButtonClick.bind(this)} text={'Sign up with Facebook'}/>
    		</div>
    	)
  	} else {
  		return ( 
    	<div className='nav-bar'>
    		<FacebookButton onButtonClick={this.onButtonClick.bind(this)} text={'Log out'}/>
    		<div className='karma'>Karma:{this.state.karma}</div>
    	</div>
  		);
  	}
  	}   
};


export default Profile;