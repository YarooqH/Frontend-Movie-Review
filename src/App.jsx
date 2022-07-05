import { useState, useEffect } from 'react'
import './App.css'
import React from 'react'
import heading from './components/heading'
import Items from './components/Items'

function App() {
  // const [count, setCount] = useState(0)

  const [products, setProducts] = useState([])
  
  let dataFromAPI;

  useEffect(() => {
    getDataFromAPI();
  }, [])

  const getDataFromAPI = async () => {
    const response = await fetch('http://localhost:1337/api/reviews?populate=*');
    const data = await response.json();
    console.log(data.data);
    setProducts(data.data);
  }

  return (
    <div className="App">
      {
        products.map(product => (
          <div>
            <h1>{product.attributes.title}</h1>
            <p>{product.attributes.review}</p>
            <img src={product.attributes.reviewimg.data.attributes.name} alt="img" />
          </div>
          
          // console.log(product.attributes.title)
        ))
      }
      <Items />
    </div>
  )
}

export default App
