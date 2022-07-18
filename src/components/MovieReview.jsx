import React, {useEffect, useState, useRef} from 'react'
import { useParams } from 'react-router-dom'

function MovieReview() {
    const { uid } = useParams();

    const [review, setReview] = useState({});
    const refReview = useRef({});

    const getReview = async () => {
        const response = await fetch(`http://localhost:1337/api/movies/${uid}`);
        const newData = await response.json();
        const data = newData.data.attributes;
        
        setReview(data);
        refReview.current = data;
    }

    useEffect(() => {
      getReview();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [refReview, uid]);


    return (
      <>
        <p>{refReview.current.title}</p>
        <p>{refReview.current.review}</p>
      </>

    )
}

export default MovieReview