import './App.css'
import React from 'react'
import Heading from './components/Heading'
import Items from './components/Items'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Items />} />
          <Route path="/review/:uid" element={<Heading />} />
        {/* <Items /> */}
        </Routes>
      </div>
    </Router>
  )
}

export default App
