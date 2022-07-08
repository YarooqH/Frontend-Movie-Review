import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'

function Review() {
    const { uid } = useParams();

    const [review, setReview] = useState([]);

    useEffect(() => {
        getReview();
    }, []);

    const getReview = async () => {
        const response = await fetch(`http://localhost:1337/api/reviews/${uid}?populate=*`);
        const data = await response.json();
        setReview(data.data);
        console.log(review)
    }

    return (
        <div>Review</div>
    )
}

export default Review