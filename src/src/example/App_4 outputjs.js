import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
class App extends Component {
  state = {
    person: [
      { name: "Aaron", age: 8 },
      { name: "Annabella", age: 6 },
      { name: "Nohemi", age: 41 },
      { name: "Oscar", age: 44 },
    ],
    otherStare: "Some other Value",
    showPerson: false,
  };

  switchNameHandler = (newName) => {
    this.setState({
      person: [
        { name: "Samuel", age: 8 },
        { name: "Valentina", age: 6 },
        { name: "Josefina", age: 41 },
        { name: "Jose", age: 44 },
      ],
    });
  };

  nameChangeler = (event) => {
    this.setState({
      person: [
        { name: "Samuel", age: 8 },
        { name: event.target.value, age: 9 },
        { name: "Josefinssa", age: 41 },
        { name: "Josse", age: 44 },
      ],
    });
  };
  togglePersonHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState( {showPerson: !doesShow } );
  };

  render() {
    const style = {
      backgrounColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
    };

     let person= null; 
     if (this.state.showPerson) {
       person= (
        <div>
        <Person
          name={this.state.person[0].name}
          age={this.state.person[0].age}/>
        <Person
          name={this.state.person[1].name}
          age={this.state.person[1].age}
          click={this.switchNameHandler.bind(this, "Romero Roca")}
          changed={this.nameChangeler}> My Hobbies: Racing
        </Person>
        <Person
          name={this.state.person[2].name}
          age={this.state.person[2].age}/>
        <Person
          name={this.state.person[3].name}
          age={this.state.person[3].age}/>
      </div>
       );

     }

    return (
      <div className="App">
        <h1> Hi, I'm a React App</h1>
        <p>This is really working</p>
        <button 
          style={style} 
          onClick={this.togglePersonHandler}>Cambiar</button>
          {person}
      </div>
    );
  }
}
export default App;
