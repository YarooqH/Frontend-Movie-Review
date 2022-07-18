import './styles/App.css'
import React from 'react'
import Heading from './components/Heading'
import Items from './components/Items'
import Movies from './components/Movies'
import Review from './components/Review'
import MovieReview from './components/MovieReview'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {

  return (
    <Router>
      <div>
        <Heading />
        <Routes>
          <Route path="/" element={<><Items /><Movies /></>} />
          {/* <Route path="/" element={} /> */}
          <Route path="/review/:uid" element={<Review />} />
          <Route path="/movie/:uid" element={<MovieReview />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
