import React, {useState} from 'react';
import './App.css';
// import reactDom from 'react-dom';

function App() {

  const [year, setYear] = useState('2001');
  const [month, setMonth] = useState('05');
  const [day, setDay] = useState('01');


  function onMonthChange(ev){
    let value = ev.target.value;
    setMonth(value);
  }

  function onDayChange(ev){
    let value = ev.target.value;
    setDay(value);
  }

  function onYearChange(ev){
    let value = ev.target.value;
    setYear(value);
  }
  
  function doFetch(){
    console.log('fetching');
    fetch('https://api.ratesapi.io/api/' + year +'-'+ month +'-' + day)
    .then(response => response.json())
    .then(data => {
      console.log('data came back', data);
     return;
   
    })
  }
  return (
    <div className="App">
      <div class="BarChart-title"> Currency Exchange Rates (Base EUR) </div>
      <h1>Please enter a date on or after January 4, 1998 to see the exchange rate:</h1>
      <div className="BarChartInput">
      {
      <input placeholder="Month mm"
      value={month}
      OnChange={onMonthChange}
      />
     }

     {
      <input placeholder="Day dd"
      value={day}
      OnChange={onDayChange}
      />
     }
     
     {
      <input placeholder="Year yyyy"
      value={year}
      OnChange={onYearChange}
      />
     }
    
    <button onClick={doFetch}>Submit</button>
      
   </div>
  </div>
  );

  }

export default App;
