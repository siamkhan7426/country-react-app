import React, { use, useState } from 'react'
// user client server
export default function Contry({country, handelCount}) {
   // console.log(handelCount);
    const [Visited, setVisited] = useState(false)

    const handelClick = ()=>{
       setVisited(!Visited)
       handelCount(country)
    }
    //console.log(country);
  return (
    <div className={`w-full h-full border p-2.5 m-2.5 space-y-4 ${Visited? "bg-purple-500" : ""}`}>
        <img className='w-full h-52 aspect-square  object-cover' src={country?.flags?.flags.png} alt={country?.flags?.flags.alt} ></img>
        <h2 className='  text-2xl font-semibold'>Name: {country.name.common}</h2>
        <p>Big Country: {country?.population?.population}</p>
        <p>Area: {country?.area?.area} {country?.area?.area >30000 ? "Big Country" : "Small Country"}</p>
        <button onClick={ handelClick} className='btn btn-primary'>{Visited? "Visited Country": "Not Visited Country"}</button>
    </div>
  )
}
