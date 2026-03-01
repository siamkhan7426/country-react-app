import React, { use, useState } from 'react'
import Contry from './Contry';

export default function Countriys({dataLoadCountry}) {
    const [count, setCount] = useState([]);
    const handelCount = (country)=>{
        const dataCount = [...count, country]
        setCount(dataCount)
    };
    const dataCountry = use(dataLoadCountry);
    const country = dataCountry.countries
  return (
    <div>
        <h1 className='text-center text-2xl font-semibold mb-4'>Countriys {country.length}</h1>
        <h2 className='text-center text-lg font-semibold mb-3'>Visited Country: {count.length}</h2>
       <div className='grid gap-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 w-11/12 mx-auto items-center justify-center'>
         {
            country.map(country =><Contry key={country.cca3.cca3} handelCount={handelCount} country={country}></Contry>)
        }
       </div>
    </div>
  )
};
