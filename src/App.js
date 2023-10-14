import { useState } from 'react';
import './App.css';

function App() {
  const [bday,setBday] = useState("");
  const [age,setAge] = useState("");
  const calAge = (day) =>{
    const bd = new Date(day);
    const current = new Date();
    const yearsDiff = current.getFullYear() - bd.getFullYear();
    const monthsDiff = current.getMonth() - bd.getMonth();
    const daysDiff = current.getDate() - bd.getDate();
    if (monthsDiff < 0 || (monthsDiff === 0 && daysDiff < 0)) {
       setAge(yearsDiff - 1); 
    }
    return setAge(yearsDiff);
  
  }
  return (
    <div className='container d-flex justify-content-center flex-column px-5 py-5 align-items-center'>
      <h1 className='text-center'>Enter your birthday and I'll tell your age</h1>
      <input type = "date" className='form-control my-4' onChange={(e)=>{
        setBday(e.target.value);
      }}></input>
      <button className='btn btn-outline-primary' onClick={()=>{
        calAge(bday);
      }}>Calculate</button>
      {age!=0?<p className='text-center my-4'>you are {age} years old!</p>:<p></p>}
      
  
    </div>
  );
}

export default App;
