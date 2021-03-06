import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
import Radium ,{ StyleRoot }from "radium"; 
class App extends Component {
  state = {
    person: [
      { id: "001A", name: "Aaron", age: 8 },
      { id: "002A", name: "Annabella", age: 6 },
      { id: "003N", name: "Nohemi", age: 41 },
      { id: "004O", name: "Oscar", age: 44 },
    ],
    otherStare: "Some other Value",
    showPerson: false,
  };

  nameChangeler = (event, id) => {
    const personIndex = this.state.person.findIndex( p => {
      return p.id === id;
    });

    const person  = { //constante nueva
      ...this.state.person[personIndex]
    };
    /* const person= Object.assign({},this.state.person[personIndex]) */

    person.name = event.target.value;
    
    const persons = [...this.state.person];
  persons[personIndex]= person; 

    this.setState({ person: persons });
  };
  deletePersonHandler = (personIndex) => {
    /* const person= this.state.person.slice(); */
    const person = [...this.state.person];
    person.splice(personIndex, 1);
    this.setState({ person: person });
  };

  togglePersonHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({ showPerson: !doesShow });
  };

  render() {
    const style = {
      backgroundColor:'green',
      font:'white',
      border: '1px solid blue',
      padding:'8px',
      cursor:'pointer',
      ':hover':{
      backgroundColor:'pink',
        color:'red'
      }

    };

    let person = null;
    if (this.state.showPerson) {
      person = (
        <div>
          {this.state.person.map((person, i) => {
            return (
              <Person
                click={() => this.deletePersonHandler(i)}
                key={person.id}
                name={person.name}
                age={person.age}
                changed={(event) => this.nameChangeler(event, person.id)}
              />
            );
          })}
        </div>
      );
      style.backgroundColor='red';
      style[':hover']= {
        backgroundColor: 'salmon', 
        color:'white'
      }; 
    }
    const classes=[]; 
    if (this.state.person.length<=2){ 
      classes.push('red'); 
    }
    if(this.state.person.length<=1){
      classes.push('bold'); 

    }

    return (
      <StyleRoot>
    
      <div className="App">
        <h1> Hi, I'm a React App</h1>
        <p className={classes.join(' ')}>This is really working</p>
        <button style={style} onClick={this.togglePersonHandler}>
          Cambiar
        </button>
        {person}
      </div>
      </StyleRoot>
    
    );
  }
}
export default  Radium (App);
 