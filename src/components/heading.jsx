
import React, {useState, useEffect} from 'react'
import {useMatch, useParams} from 'react-router-dom'

function Heading() {
  const { uid } = useParams();

  const [review, setReview] = useState([]);
  

  useEffect(() => {
    getReview();
  }, []);

  const getReview = async () => {
    const response = await fetch(`http://localhost:1337/api/reviews/${uid}?populate=*`);
    const data = await response.json();
    setReview(data.data);
  }

  return (
    <div>
      <p className=' text-2xl ' onClick={() => {
        console.log(review);
      }}>CLICK</p>
      <h1>{review.id}</h1>
      {/* <img src={review.attributes.reviewimg.data.attributes.name} alt="" /> */}
      {/* {review ? <h1>{review.attributes.title}</h1> : <h1>Loading...</h1>} */}
    </div>
  )
}

export default Heading