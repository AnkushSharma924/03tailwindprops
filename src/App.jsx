import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'

function App() {
  
  return (
    <>
      <h1 className='bg-green-500 text-black p-4 rounded-xl mb-6'>Tailwind</h1>
      <Card userName='Ankush' btnTxt ='Click Me'/>
      <Card userName='Vishav' btnTxt ='Visit Me'/>
    </>
  )
}

export default App
