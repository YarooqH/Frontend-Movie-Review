import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import '../styles/items.css'


export default function Movies() {
  const [products, setProducts] = useState([]) 

  useEffect(() => {
    let count = 0
    let count1 = 0
    let count2 = 0
    getDataFromAPI();
    setTimeout(() => {
      getClr(count, count1, count2);
    }, 300);
  }, [])

  const getDataFromAPI = async () => {
    const response = await fetch('http://localhost:1337/api/movies?populate=*');
    const data = await response.json();
    setProducts(data.data);
  } 

  const getClr = (count, count1, count2) => {
    let itemsLength = document.getElementsByClassName('imag').length;
    console.log(itemsLength);
    for (let i = 0; i < itemsLength; i++) {
      let color_thief = new ColorThief();
      let sample_image = new Image();
      let color;
      
      sample_image.onload = () => {
        // console.log(color_thief.getColor(sample_image));
        color = color_thief.getColor(sample_image);
        let template = color_thief.getPalette(sample_image, 3);
        if(color[0] < 120 && color[1] < 120 && color[2] < 120) {
          color = template[1];
          if(color[0] > 120 && color[1] > 120 && color[2] > 120) {
            color = template[2];
          }
        }
        // console.log(template[1]);
        changeColor(color);
    };
    
      sample_image.crossOrigin = 'anonymous';
      sample_image.src = document.getElementsByClassName('imag')[count].src;
      
      const changeColor = (clr) => {
          console.log(clr, count1);
          let bkg = document.getElementsByClassName('review');
          let txt = document.getElementsByClassName('sum-text');
          // txtElement = txt.length;
          console.log(txt.length);
          bkg[count1].style.backgroundColor = `rgb(${clr[0]}, ${clr[1]}, ${clr[2]})`;
          if(clr[0] > 130 && clr[1] > 130 && clr[2] > 130) {
            // for(let i = 0; i < txt.length; i++) {
            //   txt[i].style.color = 'black';
            // }
            txt[count2].style.color = '#000';
            txt[count2+1].style.color = '#000';
            // txt[count2-1].style.color = '#000';
          }

          count1++;
          count2 = count2 + 2;
      }
      count++;        
    }
  }


  return (
    <div>
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <h1 className="tv-shows">MOVIES</h1>
        <h2 className="sr-only">Reviews</h2>
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <Link className="group" key={product.id} to={`/movie/${product.id}`}>
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
                    <img crossOrigin="anonymous" className="imag rounded-t-lg aspect-[10/15] bg-cover" src={product.attributes.movieImg.data.attributes.name} alt={product.attributes.title} />
                </div>
                <div className="rounded-sm h-[16rem] movie review p-5">
                    <div className="h-[4.2rem]">
                        <h5 className="sum-text mb-2 text-2xl font-bold text-gray-900 dark:text-white">{product.attributes.title}</h5>
                    </div>
                      <p className="sum-text h-max-[8rem] mb-3 text-gray-700 dark:text-gray-400">{product.attributes.plot}</p>
                    
                    {/* <div className="flex justify-between items-center">
                        <div className="flex items-center">
                            <div className="flex items-center">
                                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                </svg>
                                <span className="text-gray-700 dark:text-gray-400">{product.attributes.rating}</span>
                              </div>
                            </div>
                           </div>                  */}
                </div>
            </div>
            </Link>
          ))}
        </div>
        <div className="btn-container">
          <button className="button-52" role="button">Show More</button>
        </div>
      </div>
    </div>
  )
  }