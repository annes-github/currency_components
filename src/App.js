import React, {useState, useEffect} from 'react';
import './App.css';
// import reactDom from 'react-dom';

function App() {

  const [year, setYear] = useState();
  const [month, setMonth] = useState();
  const [day, setDay] = useState();
  const [data, setData] = useState([]);


  
  function doFetch(){
    const accessKey= 'd787bfae4ff1b140e5abf61f63b235d9'
    console.log('fetching');
    fetch('http://api.exchangeratesapi.io/v1/' + year +'-'+ month +'-' + day + '?access_key=' + accessKey)
    .then(response => response.json())
    .then(data => {
       console.log('data came back', data);
      setData(data.rates);
     return;
   
    })
  }

  function onMonthChange(ev){
    setMonth(ev.target.value);
  }

  function onDayChange(ev){
    setDay(ev.target.value);
  }

  function onYearChange(ev){
    setYear(ev.target.value);
  }

  return (
   
    <div className="App">
      
      <div class="BarChart-title"> Currency Exchange Rates (Base EUR) </div>
      <div className="BarChartInput">
      <h1>Please enter a date on or after January 4, 1998 to see the exchange rate:</h1>
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
    
    <button onClick={doFetch}>Submit</button>
    </div>
    <div className="BarChart" id="graph"/>
    {
      //  Object.entries(data).map(([key, value]) => (
        Object.keys(data).map(key =>
        // console.log(data[key]) currency value
        // console.log(key)
         
          key === "AUD" ? (
            <div className="BarChart-bar-AUD" style={{height: (data[key] * 100) + "px"}}>
            {key} </div>
          ) :
          key === "GBP" ? (
            <div className="BarChart-bar-GBP" style={{height: (data[key] * 100) + "px"}}>
             {key} </div>
          ) :
          key === "USD" ? (
            <div className="BarChart-bar-USD" style={{height: (data[key] * 100) + "px"}}>
            {key} </div>
          ) :

         key ==="CAD" ? (
            <div className="BarChart-bar-CAD" style={{height: (data[key] * 100) + "px"}}>
             {key} </div>
          ) : null
       
          )

   }
  
      </div>
  )
}  
export default App;
