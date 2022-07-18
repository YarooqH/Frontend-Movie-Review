import './styles/App.css'
import React from 'react'
import Items from './components/Items'
import Review from './components/Review'
import Heading from './components/Heading'
import Movies from './components/Movies'
import MovieReview from './components/MovieReview'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {

  return (
    <Router>
      <div>
        <Heading />
        <Routes>
          <Route path="/" element={<Items />} />
          <Route path="/review/:uid" element={<Review />} />
          <Route path="/" element={<Movies />} />
          <Route path="/movie/:uid" element={<MovieReview />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
