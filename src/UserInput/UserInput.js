import React from 'react'

    
    const inpuntStyle = {
        border: '2px solid pink'
    }; 
const UserInput =(props)=>{
    return (
        <div>
            <input 
            type="text"
            style= {inpuntStyle}
            onChange={props.changed}
            value={props.currentName}/>
        </div>
    )


};
export default UserInput; 
