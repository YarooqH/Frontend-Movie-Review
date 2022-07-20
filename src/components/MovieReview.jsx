import React, {useEffect, useState, useRef} from 'react'
import { useParams } from 'react-router-dom'

import '../styles/items.css'

function MovieReview() {
  const { uid } = useParams();

  const [review, setReview] = useState({});
  const refReview = useRef({});
  const refimg = useRef(null);

  const getReview = async () => {
      const response = await fetch(`http://localhost:1337/api/movies/${uid}?populate=*`);
      const newData = await response.json();
      const data = newData.data.attributes;

      console.log(data);
      
      setReview(data);
      refReview.current = data;
      refimg.current = data.movieImg.data.attributes.name;
  }

  const getClr = () => {
    let itemsLength = document.getElementsByClassName('review-img').length;
    console.log(itemsLength);
    // for (let i = 0; i < itemsLength; i++) {
      let color_thief = new ColorThief();
      let sample_image = new Image();
      let color;
      
      sample_image.onload = () => {
          console.log(color_thief.getColor(sample_image));
          color = color_thief.getColor(sample_image);
          let template = color_thief.getPalette(sample_image, 2);
          if(color[0] < 120 && color[1] < 120 && color[2] < 120) {
            color = template[1];
          }
          console.log(template[1]);
          changeColor(color);
      };
    
      sample_image.crossOrigin = 'anonymous';
      sample_image.src = document.getElementsByClassName('review-img')[0].src;
      
      const changeColor = (clr) => {
        if(clr)
          console.log(clr);
          let bkg = document.getElementsByClassName('review-heading');
          let star = document.getElementsByClassName('star');
          // let txt = document.getElementsByClassName('sum-text');
          // txtElement = txt.length;
          // console.log(txt.length);
          bkg[0].style.color = `rgb(${clr[0]}, ${clr[1]}, ${clr[2]})`;
          star[0].style.color = `rgb(${clr[0]}, ${clr[1]}, ${clr[2]})`;
          // if(clr[0] > 130 && clr[1] > 130 && clr[2] > 130) {
            // for(let i = 0; i < txt.length; i++) {
            //   txt[i].style.color = 'black';
            // }
            // txt[count2].style.color = '#000';
            // txt[count2+1].style.color = '#000';
            // txt[count2-1].style.color = '#000';
          // }

      //     count1++;
      //     count2 = count2 + 2;
      // }
      // count++;        
    }
  }

  useEffect(() => {
    getReview();

      getClr();
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refReview, uid, refimg.current]);


  return (
    <>
     <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">        
      <section className="text-gray-400 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap justify-center">
          <img alt={refReview.current.title} className="h-[40rem] object-cover object-center review-img rounded" src={refimg.current}/>
          <div className="lg:w-1/2 w-full lg:pl-10">
            <h1 className="review-heading text-white text-left mb-1">{refReview.current.title}</h1>
            <div className="flex mb-4 mt-4">
              <span className="flex items-center">
                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="star w-4 h-4 text-white" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                {/* <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidh="2" className="w-4 h-4 text-red-400" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidh="2" className="w-4 h-4 text-red-400" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidh="2" className="w-4 h-4 text-red-400" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidh="2" className="w-4 h-4 text-red-400" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg> */}
                {/* <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidh="2" className="w-4 h-4 text-red-400" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg> */}
                <span className="ml-3 text-white">{refReview.current.rating + " Star Ratings"}</span>
              </span>               
            </div>
            <h1 className='review-title'>Review</h1>
            <p className="leading-relaxed">{refReview.current.review}</p>
          </div>
        </div>
      </div>
    </section>
     </div>
    </>

  )
}

export default MovieReview