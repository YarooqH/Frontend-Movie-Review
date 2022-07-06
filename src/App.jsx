import { useState, useEffect } from 'react'
import './App.css'
import React from 'react'
import Heading from './components/Heading'
import Items from './components/Items'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {
  // const [count, setCount] = useState(0)

  return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Items />} />
          <Route path="/review/:uid" element={<Heading />} />
        {/* <Items /> */}
        </Routes>
      </div>
  )
}

export default App
