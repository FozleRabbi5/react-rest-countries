import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Countries from './components/Countries/Countries';



function App() {
  return (
    <div className="App">
      <Countries></Countries>
      
    </div>
  );
}
// function LoadCountries() {
//   const [countries, setCountries] = useState([])
//   useEffect(()=>{
//     fetch('https://restcountries.com/v3.1/all')
//     .then(res=>res.json())
//     .then(data =>setCountries(data))
//   },[])
//   return (
//     <div>
//       {
//         countries.map( country => <Country name = {country.name.common}></Country>)
//       }
//       <h1>Contreies: {countries.length}</h1>
//     </div>
//   )
// }
// function Country(props){
//   return (
//     <div>
//       <p>country name : {props.name}</p>
//     </div>
//   )
// }
export default App;
