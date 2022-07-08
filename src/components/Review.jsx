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

        // setReview((data) => {
        //     console.log(data);
        //     return data;
        // })
        // console.log(review)

        // notUseState = data.data
    }

    return (
<div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Reviews</h2>
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
              <a href="#" className="group">
                {/* <div className="max-h-36 aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                  <img
                    src={product.attributes.reviewimg.data.attributes.name}
                    alt={product.attributes.title}
                    className="object-center object-cover group-hover:opacity-75"
                  />
                </div> */}
                <h3 className="mt-4 text-sm text-gray-700">{review.attributes.title}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">{review.attributes.review}</p>
              </a>          
        </div>
      </div>
    </div>

    )
}

export default Review