import React, { use, useState } from 'react'
import Contry from './Contry';
import MiniCard from './MiniCard/MiniCard';

export default function Countriys({dataLoadCountry}) {
    const [count, setCount] = useState([]);
    const handelCount = (country)=>{
        setCount(prev => {
      const exists = prev.find(c => c.cca3 === country.cca3);
      if(exists) return prev   // আগে থাকলে আর add করবে না
      return [...prev, country]
   });
    };
    const dataCountry = use(dataLoadCountry);
    const country = dataCountry.countries
    return (
    <div>
        <h1 className='text-center text-2xl font-semibold mb-4'>Countriys {country.length}</h1>
        <h2 className='text-center text-lg font-semibold mb-3'>Visited Country: {count.length}</h2>
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-1/3 h-full justify-center items-center mx-auto'>
          { 
           count.map((card)=> <MiniCard key={card.cca3.cca3} card={card}></MiniCard> )
          }
        </div>
      
       <div className='grid gap-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 w-11/12 mx-auto items-center justify-center'>
         {
            country.map(country =><Contry key={country.cca3.cca3} count={count} handelCount={handelCount}  country={country}></Contry>)
        }
       </div>
    </div>
  );
};
