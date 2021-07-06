import React from 'react';
import './InputText.css';
import '../DateInput/DateInput.js'




function InputText(props) {
return (
    <div className="BarChartInput">
    <p>Click <button onClick={props.fetch}>Latest</button> to see the latest exchange rates.</p>
    <p>Or enter a date on or after January 4, 1998 to see the rates for that date:</p>
</div>

)

}

export default InputText;