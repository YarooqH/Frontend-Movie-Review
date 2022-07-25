import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import '../styles/items.css'


export default function Items() {
  const [products, setProducts] = useState([]) 
  const [movieNumber, setMovieNumber] = useState(4); 

  let count = 0
  let count1 = 0
  let count2 = 0
  // let flag = false;

  useEffect(() => {
    getDataFromAPI();
    setTimeout(() => {
      getClr(count, count1, count2);
    }, 300);
  }, [movieNumber])

  const getDataFromAPI = async () => {
    const response = await fetch('http://localhost:1337/api/reviews?populate=*&pagination[pageSize]='+movieNumber);
    const data = await response.json();
    setProducts(data.data);
    // return true;
  } 

  const getClr = (count, count1, count2) => {
    let itemsLength = document.getElementsByClassName('imag').length;
    // console.log(itemsLength);
    for (let i = 0; i < itemsLength; i++) {
      let color_thief = new ColorThief();
      let sample_image = new Image();
      let color;
      
      sample_image.onload = () => {
        // console.log(color_thief.getColor(sample_image));
        color = color_thief.getColor(sample_image);
        let template = color_thief.getPalette(sample_image, 3);
        if(color[0] > 120 && color[1] > 120 && color[2] > 120) {
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
        let bkg = document.getElementsByClassName('review');
        let txt = document.getElementsByClassName('sum-text');
        // txtElement = txt.length;
        console.log(txt.length);
        bkg[count1].style.backgroundColor = `rgb(${clr[0]}, ${clr[1]}, ${clr[2]})`;
        // console.log(clr[0] + clr[1]);
        if((clr[0] + clr[1] + clr[2] > 380)){
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

  const handleSeeMore = () => {
    if(movieNumber == 8) {
      let btnTxt = document.getElementsByClassName('button-52');
      btnTxt[0].innerHTML = 'Show More';
      setMovieNumber(4);
    } else if (movieNumber == 4) {
      let btnTxt = document.getElementsByClassName('button-52');
      btnTxt[0].innerHTML = 'Show Less';
      setMovieNumber(8);
    }
  }


  return (
    <div>
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <h1 className="tv-shows">TV SHOWS</h1>
        <h2 className="sr-only">Reviews</h2>
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <Link className="group" key={product.id} to={`/review/${product.id}`}>
              <div className="rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                <div>
                    <img crossOrigin="anonymous" className="imag rounded-t-lg aspect-[10/15] bg-cover" src={product.attributes.reviewimg.data.attributes.name} alt={product.attributes.title} />
                </div>
                <div className="rounded-sm h-[16rem] movie review p-5">
                    <div>
                        <h5 className="sum-text mb-2 text-2xl font-bold text-gray-900 dark:text-white">{product.attributes.title}</h5>
                    </div>
                    <p className=" sum-text h-max-[8rem] mb-3 text-gray-700 dark:text-gray-400">{product.attributes.plot}</p>
                </div>
            </div>
            </Link>
          ))}
        </div>
        <div className="btn-container">
          <button onClick={handleSeeMore} className="button-52" role="button">Show More</button>
        </div>
      </div>
    </div>
  )
  }