import React from 'react';
import './DateInput.css';


function DateInput(props) {

  return (

    <input placeholder= {props.placeholdertext}
    onChange={props.onChange}
    value={props.dateValue}
    />
 
  )
}

export default DateInput;
