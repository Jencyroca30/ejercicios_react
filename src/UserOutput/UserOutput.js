import React  from 'react';
import '../Person/person.css';

const userOutput=(props)=>{
    return(
        <div className="person">
            <p> Username: {props.userName}</p>
            <p>prueba 1</p>
        </div>
    ); 

}; 

export default userOutput; 