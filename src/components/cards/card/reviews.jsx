import React from 'react';
import ProductStarRating from '../../ratingStar';

function renderReviews(reviews, rating) {
    return (
        <div className='products-card-reviews mt-4'>
            {reviews && reviews.length > 0 && (
                <>
                    <div className='d-flex flex-wrap justify-content-between mt-4'>
                        <h3 className='mt-2'>Reviews</h3>
                        <div className='d-flex mt-2'>
                            <ProductStarRating rating={rating} />
                            <div className='products-card-rating mx-2'>{rating} ({reviews.length})</div>
                        </div>
                    </div>
                    <div className="list-group w-auto">
                        {reviews.map((review) => (
                            <div key={review.id} className="list-group-item d-flex gap-3 py-3 mt-3" aria-current="true">
                                <div className="navbar-logo">
                                    <div><span className="navbar-circle">B</span></div>
                                </div>
                                <div className="d-flex gap-2 w-100 justify-content-between">
                                    <div>
                                        <small className="text-nowrap"><ProductStarRating rating={review.rating} /></small>
                                        <p className="mb-0 mt-2">{review.description}</p>
                                        <h6 className="mb-0 mt-2">{review.username}</h6>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    )
}

export default renderReviews;