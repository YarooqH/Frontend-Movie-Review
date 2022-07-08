import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'

function Review() {
    const { uid } = useParams();

    const [review, setReview] = useState({});

    // let notUseState;

    useEffect(() => {
        getReview();
        // console.log(review);
    }, []);

    const getReview = async () => {
        const response = await fetch(`http://localhost:1337/api/reviews/1`);
        const newData = await response.json();
        const data = newData.data;
        // console.log(data)
        // console.log(data)
        setReview(data);

        setReview((data) => {
            console.log(data);
            return data;
        })
        // console.log(review)

        // notUseState = data.data
    }

    return (
        <div>
            {/* <h2>{notUseState.attributes.title}</h2> */}
        </div>

    )
}

export default Review