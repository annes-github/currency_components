import React, {useState} from 'react';
import './App.css';
import DateInput from './components/DateInput/DateInput.js'
import InputText from './components/InputText/InputText.js'
import Bar from './components/Bar/Bar.js'
import Title from './components/Title/Title.js'

function App() {

  const [year, setYear] = useState();
  const [month, setMonth] = useState();
  const [day, setDay] = useState();
  const [data, setData] = useState([]);

//fetching data for the latest rates and setting data with the response
  function doFetchWithoutDate(){
    const accessKey= 'd787bfae4ff1b140e5abf61f63b235d9'
    console.log('fetching');
    fetch('//api.exchangeratesapi.io/v1/latest' + '?access_key=' + accessKey)
    .then(response => response.json())
    .then(data => {
       console.log('data came back', data);
      setData(data.rates);
    })
  }
  
  //fetching data for the rates for a specified date and setting data with the response
  function doFetchWithDate(){
    const accessKey= 'd787bfae4ff1b140e5abf61f63b235d9'
    console.log('fetching');
    fetch('//api.exchangeratesapi.io/v1/' + year +'-'+ month +'-' + day + '?access_key=' + accessKey)
    .then(response => response.json())
    .then(data => {
      setData(data.rates);
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

      <div className="body">
      
     <Title
      title="Currency Exchange Rates (Base EUR)" 
     />

     <InputText
     fetch={doFetchWithoutDate}
     />

     <DateInput
       placeholdertext ={"Month mm"}
       onChange={onMonthChange}
       dateValue={month}
      />

     <DateInput
       placeholdertext ={"Day dd"}
       onChange={onDayChange}
       dateValue={day}
      />

     <DateInput
       placeholdertext ={"Year yyyy"}
       onChange={onYearChange}
       dateValue={year}
      />

    
    <button onClick={doFetchWithDate}>Submit</button>
   
    <div id="graph">
    

    {
        Object.keys(data).filter((key, index) => {return index <= 5}).map(key =>
        // Object.keys(data).filter((key, index) => {console.log(key,":",index); return index <= 5}).map(key =>
         {
          return(
            <Bar 
              barKey={key}
              data={data}
            />
           )
         })
        }
      </div>
      </div>
      </div>
      
  )
}  
export default App;
