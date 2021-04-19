import React, {Component} from 'react';
import './App.css';

import UserInPut from '../../UserInput/UserInput';
import UserOuput from '../../UserOutput/UserOutput'; 


 
class App extends Component{
   state = {
     username: 'Superan'  
    }; 
    
    usernameChangedHandler= (event) =>{
 this.setState({username: event.target.value});
    }
  
render(){

 
   return ( 

   
      <div className="App">
        <ol>
          <li>Create tow new components: UserInPut and UserOutput</li>
          <li>UserInPut should hold an input element, UserOutput two</li>
          <li>Output multiple UserOutput components in the App component</li>
          <li>Pass a username (of your choice) to UserOuput via</li>
          <li>Add state to the App component (=> the username) and</li>
          <li>Add a method to manipulate the state (=> an  event-han) </li>
          <li>Pass the event-handler methos reference to the UserInPut</li>
          <li>Ensure tha the new inoubt entered by the user overwrite</li>
          <li>Add two-way-binding to your input (in UserInPut) to</li>
          <li>Add styLing of your choice to your coomponents/element</li>
        </ol>
        <UserInPut 
          changed={this.usernameChangedHandler}
          currentName={this.state.username}/>
        <UserOuput userName= {this.state.username}/>
        <UserOuput userName={this.state.username}/>
        <UserOuput userName={this.state.username}/>
       
      </div>
      ); 
     
     };
}
   

export default App;




