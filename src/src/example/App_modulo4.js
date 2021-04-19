import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
import Validation from "./Validation/Validation";
import Char from "./src/Chart/Chart"; 

class App extends Component {
  state = {
    userInput: "",
  };
  inputChnagedHandler = (event) => {
    this.setState({ userInput: event.target.value });
  };

  render() {
    const charList = this.state.userInput.split('').map( (ch,index) => {
      return <Char key={index} character={ch}/>;

    });
    return (
      <div className=" container App">
        <h1 className="App text-secondary "> Modulo 4 Capitulo 12</h1>
        <ol className="list-group">
          <li className="list-group-item list-group-item-success ">
            Create an input field (in App component) whit a change alister which
            output the length of the extered beliw it (e.g.in paragraph)
          </li>
          <li className="list-group-item list-group-item-success">
            Create a new component (=> valitation component) which recives the
            text length as a prop
          </li>
          <li className="list-group-item list-group-item-success">
            Inside the ValitationComponent, either output "Text too Shor" or
            "Text long enough" depending on the text length (e.g.take 5 as a
            minimun length)
          </li>
          <li className="list-group-item list-group-item-success">
            Crearte another Component (=>CharComponent) and style as an inline
            Box (=> display: inline-block, padding:16px, text-aling:center,
            margin: 16px, border:1px solid black)
          </li>
          <li className="list-group-item list-group-item-success">
            {" "}
            Render list or charComponnet where each CharComponnet receives a
            different letter of the entered text (incitual input field) as a
            prop
          </li>
          <li className="list-group-item list-group-item-success">
            When you click a CharComponent, it should be removed from the
            entered text
          </li>
        </ol>

        <div className="alert alert-info mt-2" role="alert">
          <strong>Hit: </strong> Keep in mind that Javascript string are
          basically arrays
        </div>
        <div className="row">
          <div className="col">
            <div className="form-group row">
              <label
                htmlFor="example-text-input"
                className="col-2 col-form-label">
                {" "}Input</label>
              <div className="col-10">
                <input
                  className="form-control"
                  type="text"
                  value={this.state.userInput}
                  id="example-text-input"
                  onChange={this.inputChnagedHandler}
                />
              </div>
            </div>
          </div>
          <div className="col">{this.state.userInput}</div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <Validation inputLength={this.state.userInput.length}></Validation> 
            </div>
          </div>
          <div className="row">
          {charList}  
          </div>
        </div>
      </div>
    );
  }
}
export default App;
