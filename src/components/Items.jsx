import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import '../styles/items.css'


export default function Items() {
  const [products, setProducts] = useState([]) 

  useEffect(() => {
    let count = 0
    let count1 = 0
    getDataFromAPI();
    setTimeout(() => {
      getClr(count, count1);
    }, 100);
  }, [])

  const getDataFromAPI = async () => {
    const response = await fetch('http://localhost:1337/api/reviews?populate=*');
    const data = await response.json();
    setProducts(data.data);
  } 

  const getClr = (count, count1) => {
    let itemsLength = document.getElementsByClassName('imag').length;
    console.log(itemsLength);
    for (let i = 0; i < itemsLength; i++) {
      let color_thief = new ColorThief();
      let sample_image = new Image();
      let color;
      
      sample_image.onload = () => {
          console.log(color_thief.getColor(sample_image));
          color = color_thief.getColor(sample_image);
          changeColor(color);
      };
    
      sample_image.crossOrigin = 'anonymous';
      sample_image.src = document.getElementsByClassName('imag')[count].src;
      
      const changeColor = (clr) => {
          console.log(clr, count1);
          let bkg = document.getElementsByClassName('review');
          bkg[count1].style.backgroundColor = `rgb(${clr[0]}, ${clr[1]}, ${clr[2]})`;
          count1++;
      }
      count++;        
    }
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
              <div className="rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                <div>
                    <img crossOrigin="anonymous" className="imag rounded-t-lg aspect-[10/15] bg-cover" src={product.attributes.reviewimg.data.attributes.name} alt={product.attributes.title} />
                </div>
                <div className="rounded-sm review p-5">
                    <div>
                        <h5 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">{product.attributes.title}</h5>
                    </div>
                    <p className="h-[8rem] mb-3 text-gray-700 dark:text-gray-400">{product.attributes.plot}</p>
                </div>
            </div>
            {
            
            }
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
  }