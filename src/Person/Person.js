import React from 'react'; 
import Radium from 'radium'; 
import '../Person/person.css';

const Person = (props) => {
const style={
    '@media (min-width: 500px)':{
        width:'450px'
    }
}

    return (
        <div className = "person" style={style}>
        <p onClick= {props.click}>I'm {props.name}  I'm {props.age} year old!</p>   
        <p> {props.children}</p> 
        <input type ="text" onChange={props.changed}/>
        </div>
    

        )
       

}; 
export default Radium (Person); 
