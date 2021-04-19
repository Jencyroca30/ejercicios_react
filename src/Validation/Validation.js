import React from "react";
const Validation = (props) => {
    let validationMenssaje= 'Text long enough'; 
    if (props.inputLength <=5){
        validationMenssaje= 'Text too Short'

    }
  return (
    <div className="container">
      <div className="row">
         <div className="col">{validationMenssaje}</div>
         <div className="col"></div>
      </div>
    </div>
  );
};

export default Validation;
