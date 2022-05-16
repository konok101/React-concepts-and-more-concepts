import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
 
  return (
    <div className="App">
      <Counter></Counter>
      <ExternalUser></ExternalUser>
     
    </div>
  );
}

 


function ExternalUser(){
  const [Use , setUse]= useState([]);

  useEffect( () =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data=> setUse(data))

  }, []);
  return (
    <div>
         <h2>External user</h2>
    {
      Use.map(user=> <User name={user.name} email={user.email}></User>)
    }
     
  
    </div>
  )
 
}


function User(props){
  return (
    <div  style={{border: '2px solid red', margin: '20px'}}>
      <h3>Name: {props.name}</h3>
      <p>Email: {props.email}</p>
    </div>
  )
}
function Counter(){
  const [count, setCount]= useState(22);
 

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
