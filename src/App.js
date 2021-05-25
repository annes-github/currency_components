import React, {useState} from 'react';
import './App.css';

function App() {

  const [year, setYear] = useState();
  const [month, setMonth] = useState();
  const [day, setDay] = useState();
  const [data, setData] = useState([]);

//fetching data for the latest rates and setting data with the response
  function doFetchWithoutDate(){
    const accessKey= 'd787bfae4ff1b140e5abf61f63b235d9'
    console.log('fetching');
    fetch('http://api.exchangeratesapi.io/v1/latest' + '?access_key=' + accessKey)
    .then(response => response.json())
    .then(data => {
       console.log('data came back', data);
      setData(data.rates);
     return;
   
    })
  }
  
  //fetching data for the rates for a specified date and setting data with the response
  function doFetchWithDate(){
    const accessKey= 'd787bfae4ff1b140e5abf61f63b235d9'
    console.log('fetching');
    fetch('http://api.exchangeratesapi.io/v1/' + year +'-'+ month +'-' + day + '?access_key=' + accessKey)
    .then(response => response.json())
    .then(data => {
      setData(data.rates);
     return;
   
    })
  }

  //Setting the month for the event of a month input
  function onMonthChange(ev){
    setMonth(ev.target.value);
  }

   //Setting the day for the event of a day input
  function onDayChange(ev){
    setDay(ev.target.value);
  }

   //Setting the year for the event of a year input
  function onYearChange(ev){
    setYear(ev.target.value);
  }

  return (
   
    <div className="App">
      
      <div class="BarChart-title"> Currency Exchange Rates (Base EUR) </div>
      <div className="BarChartInput">
      <p>Click <button onClick={doFetchWithoutDate}>Latest</button> to see the latest exchange rates.</p>
      <p>Or enter a date on or after January 4, 1998 to see the rates for that date:</p>
      {
      <input placeholder="Month mm"
        onChange={onMonthChange}
        value={month}
      />
     }

     {
      <input placeholder="Day dd"
      onChange={onDayChange}
      value={day}
      />
     }
     
     {
      <input placeholder="Year yyyy"
        onChange={onYearChange}
        value={year}
      />
     }
    
    <button onClick={doFetchWithDate}>Submit</button>
   
    <div id="graph">
    
    {
        Object.keys(data).map(key =>
         
          key === "AUD" ? (
            <div className="BarChart-bar-AUD" style={{height: (data[key] * 100) + "px"}}>
            {key} {data[key]}</div>
          ) :
          key === "GBP" ? (
            <div className="BarChart-bar-GBP" style={{height: (data[key] * 100) + "px"}}>
             {key} {data[key]} </div>
          ) :
          key === "USD" ? (
            <div className="BarChart-bar-USD" style={{height: (data[key] * 100) + "px"}}>
            {key} {data[key]} </div>
          ) :

         key ==="CAD" ? (
            <div className="BarChart-bar-CAD" style={{height: (data[key] * 100) + "px"}}>
             {key} {data[key]} </div>
          ) : null
       
          )
   }
      </div>
      </div>
      </div>
      
  )
}  
export default App;
