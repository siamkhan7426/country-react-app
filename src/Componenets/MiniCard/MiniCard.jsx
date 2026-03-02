import React, { useState } from 'react'

export default function MiniCard({card}) {


  return (
     
    <div className=' border m-3'> 
    
            <h1>Name: {card.name.common}</h1>
            <img className='w-full h-16 aspect-square object-cover' src={card?.flags?.flags.png} alt={card?.flags?.flags.alt} />
    </div>
  );
};
