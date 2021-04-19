import React from 'react'; 
const Char = (props) =>{
const style ={
    display: 'interline-block',
    padding:'16px', 
    margin: '16px',
    border:'1px solid black',
    textAline:'center'
}
    return(
        <div style={style}>
             {props.character}
        </div>
       
    ); 

};
export default Char; 