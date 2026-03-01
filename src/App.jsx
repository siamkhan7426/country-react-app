
import { Suspense } from 'react'
import './App.css'
import Countriys from './Componenets/Countriys'
function App() {
 
  const dataLoadCountry = fetch('https://openapi.programming-hero.com/api/all').then(res=>res.json())  
  return (
    <>
    <Suspense fallback={<p className='text-center text-lg font-semibold'>Loading.......</p>}>
       <Countriys dataLoadCountry={dataLoadCountry}></Countriys>
    </Suspense>
    
    </>
  )
}

export default App
