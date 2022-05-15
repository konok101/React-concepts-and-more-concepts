import logo from './logo.svg';
import './App.css';

function App() {
  const products= [
    {name: 'laptop', price:'324333'},
    {name: 'phone', price:'994333'},
    {name: 'Watch', price:'34333'},
    {name: 'Bike', price:'24333'},
  ]
  return (
    <div className="App">
      {
        products.map(product=> <Product name={product.name} price={product.price}></Product>)
      }
{/*      <Product name='konk'></Product>
     <Product name='konk'></Product>
     <Product name='konk'></Product>
     <Product name='konk'></Product> */}
    </div>
  );
}


function Product(props){
  return(
    <div className='product'>
      <h3>Name:{props.name} </h3>
      <p>Price: {props.price}</p>
    </div>
  )
}
export default App;
