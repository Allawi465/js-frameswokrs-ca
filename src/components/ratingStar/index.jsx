import StarRatings from 'react-star-ratings';

function ProductStarRating(props) {
  const { rating } = props;

  return (
    <StarRatings
      rating={rating}
      starRatedColor="#eb5757"
      numberOfStars={5}
      starDimension="20px"
      starSpacing="2px"
    />
  );
}

export default ProductStarRating;