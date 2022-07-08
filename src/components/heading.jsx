
import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'

function Heading() {
  const { uid } = useParams();

  const [review, setReview] = useState([]);
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    getReview();
    console.log(review);
  }, []);

  const getReview = async () => {
    const response = await fetch(`http://localhost:1337/api/reviews/${uid}?populate=*`);
    const data = await response.json();
    setReview(data.data);
  }

  return (
    <div>
      {/* <h1>
        {state.attributes.title}
      </h1> */}
    </div>
  )
}

export default Heading