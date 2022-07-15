import { useState, useEffect } from "react"
import { BrowserRouter as Router, Link } from "react-router-dom"
// import ColorThief from './node_modules/colorthief/dist/color-thief.mjs'
// import ColorThief from '../colorthief.min.js'


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

  const myColor = async () => {
    let color_thief = new ColorThief();
    let sample_image = new Image();
    let color;
    let box = document.getElementsByClassName('box');
    let image1 = document.images[0];

    sample_image.crossOrigin = 'anonymous';
    

    // if (sample_image.complete) {
    //   color_thief.getColor(sample_image);
    //   console.log("sads")
    // } else {
    //   console.log("sads")
    //   sample_image.addEventListener('load', function() {
    //     console.log("sadsdf")
    //     color_thief.getColor(sample_image);
    //   });
    // }

    // for (let i = 0; i < 1; i++) {
    //   sample_image.src = box[i].style.backgroundImage.slice(5, -2);
    //   color = color_thief.getColor(sample_image);
    //   console.log(color)
    //   console.log("sads")
    //   box[i].style.backgroundColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
    // }

    // sample_image.src = box[0].style.backgroundImage.slice(5, -2);
    // color = color_thief.getColor(sample_image);
    // console.log(color)
    // console.log("sads")
    // box[0].style.backgroundColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;

    console.log("henlo")
    
    // setTimeout(() => {
    //   console.log(color_thief.getColor(sample_image));
    //   color = color_thief.getColor(sample_image);
    //   changeColor(box, color);
    // }, 3000);

    // sample_image.addEventListener('load', function () {
    //   console.log(color_thief.getColor(sample_image));
    //   color = color_thief.getColor(sample_image);
    //   changeColor(box, color);
    // })
    
    sample_image.onload = () => {
      image1.src = this.src;
      console.log(color_thief.getColor(sample_image));
      color = color_thief.getColor(sample_image);
      changeColor(box, color);
      // color_thief.getColor(sample_image);
      // sad
    };

    sample_image.src = document.getElementsByClassName('img')[0].src;  

  
    const changeColor = (ele, clr) => {
      // heading.style.color = clr;
      // box.style.color = "rgb(" + color + ")";    
      // box.style.color = 'red'
      box.style.color = 'pink';
    
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
              <div className="bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                <div href="#">
                    <img onLoad={myColor} crossOrigin="anonymous" className="img rounded-t-lg aspect-[10/15] bg-cover" src={product.attributes.reviewimg.data.attributes.name} alt={product.attributes.title} />
                </div>
                <div className="p-5">
                    <div href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{product.attributes.title}</h5>
                    </div>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{product.attributes.plot}</p>
                </div>
            </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
  }