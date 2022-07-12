import { useState, useEffect } from "react"
import {BrowserRouter as Router, Link} from "react-router-dom"

export default function Items() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    getDataFromAPI();
  }, [])

  const getDataFromAPI = async () => {
    const response = await fetch('http://localhost:1337/api/reviews?populate=*');
    const data = await response.json();
    setProducts(data.data);
  }
  

  return (
    <div>
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Reviews</h2>
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <Link className="group" key={product.id} to={`/review/${product.id}`}>
              {/* <a href="#" className="group"> */}
                {/* <div className="max-h-36 aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                  <img
                    src={product.attributes.reviewimg.data.attributes.name}
                    alt={product.attributes.title}
                    className="object-center object-cover group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-700">{product.attributes.title}</h3>
                <p className="mt-1 text-sm text-gray-900">{product.attributes.plot}</p> */}
              {/* </a> */}
              <div class="bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img class="rounded-t-lg aspect-[10/15] bg-cover" src={product.attributes.reviewimg.data.attributes.name} alt={product.attributes.title} />
                </a>
                <div class="p-5">
                    <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{product.attributes.title}</h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{product.attributes.plot}</p>
                    <a href="#" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Read more
                        <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </a>
                </div>
            </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
  }