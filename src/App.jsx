import './styles/App.css'
import React from 'react'
import Items from './components/Items'
import Review from './components/Review'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Items />} />
          <Route path="/review/:uid" element={<Review />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
