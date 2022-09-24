import React from 'react';
import './Country.css'
const Country = (props) => {
    const {name,area, population,region,flags,capital} = props.country;
    return (
        <div className='country-container'>
            <h1>Country name:{name.common}</h1>
            <img src={flags.png} alt="" />
           
            <h5>Population: {population}</h5>
            <h5>Region: {region}</h5> 
        </div>
    ); 
};

export default Country;