//Login.js displays a facebook button
import React, {Component} from 'react';

class FacebookButton extends Component {
<<<<<<< 53212c4c8a94308bb5ea0aa1f1bfd63fc6c5ac2c
   render(){
      return (
         <div>
      <h1> Here is a facebook button!</h1>
      <button className='.btn-primary'><i className="fa fa-facebook" aria-hidden="true"></i> Log in to facebook </button>
      </div>
      )
   }
   
||||||| merged common ancestors
   constructor(props) {
      super(props);

      this.FB = props.fb;

      this.state = {
         message: ""
      };

   }

   componentDidMount() {
      this.FB.Event.subscribe('auth.logout', 
         this.onLogout.bind(this));
      this.FB.Event.subscribe('auth.statusChange', 
         this.onStatusChange.bind(this));
   }
      
   onStatusChange(response) {
      console.log( response );
      var self = this;

      if( response.status === "connected" ) {
         this.FB.api('/me', function(response) {
            var message = "Welcome " + response.name;
            self.setState({
               message: message
            });
         })
      }
   }

   onLogout(response) {
      this.setState({
         message: ""
      });
   }

   render() {
      return (
         <div>
            <div 
               className="fb-login-button" 
               data-max-rows="1" 
               data-size="xlarge" 
               data-show-faces="false" 
               data-auto-logout-link="true"
               >
            </div>
            <div>{this.state.message}</div>
         </div>
      );
   }
=======
   render(){
      return (
      <h1> Here is a facebook button</h1>
      
      )
   }
   
   // constructor(props) {
   //    super(props);

   //    this.FB = props.fb;

   //    this.state = {
   //       message: ""
   //    };

   // }

   // componentDidMount() {
   //    this.FB.Event.subscribe('auth.logout', 
   //       this.onLogout.bind(this));
   //    this.FB.Event.subscribe('auth.statusChange', 
   //       this.onStatusChange.bind(this));
   // }
      
   // onStatusChange(response) {
   //    console.log( response );
   //    var self = this;

   //    if( response.status === "connected" ) {
   //       this.FB.api('/me', function(response) {
   //          var message = "Welcome " + response.name;
   //          self.setState({
   //             message: message
   //          });
   //       })
   //    }
   // }

   // onLogout(response) {
   //    this.setState({
   //       message: ""
   //    });
   // }

   // render() {
   //    return (
   //       <div>
   //          <div 
   //             className="fb-login-button" 
   //             data-max-rows="1" 
   //             data-size="xlarge" 
   //             data-show-faces="false" 
   //             data-auto-logout-link="true"
   //             >
   //          </div>
   //          <div>{this.state.message}</div>
   //       </div>
   //    );
   // }
>>>>>>> Playing with login button
};

export default FacebookButton;