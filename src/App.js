import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
 
  return (
    <div className="App">
      <Counter></Counter>
     
    </div>
  );
}

function Counter(){
  const [count, setCount]= useState(22);
/* 
  const increaseCount =()=>{
    const newCount= count + 1;
    setCount(newCount); */

  const increaseCount =()=>{
    
    setCount(count+1);
  }
  const DecreaseCount =()=>{
    
    setCount(count-1);
  }
  return(
    <div>
      <h1>count:{count} </h1>
      <button onClick={increaseCount} >Increase</button>
      <button onClick={DecreaseCount}>Decrease</button>
    </div>
  )
}

 
export default App;
