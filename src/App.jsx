import { useState } from 'react'
import './App.css'
import React from 'react'
import heading from './components/heading'
import Items from './components/Items'

function App() {
  const [count, setCount] = useState(0)
  
  let dataFromAPI;

  const getDataFromAPI = async () => {
    const response = await fetch('https://http://localhost:1337/api/reviews')
    const data = await response.json()
    console.log(data)
  }

  return (
    <div className="App">
      {/* <h1>sda</h1> */}
      <Items />
      {/* <button onClick={dataFromAPI = getDataFromAPI}>Click</button>
      {dataFromAPI.map(review => (
        <heading title='1'></heading>
      ))}      */}
    </div>
  )
}

export default App
