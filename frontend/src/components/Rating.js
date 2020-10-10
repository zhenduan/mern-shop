import React from 'react';
import StarRatings from 'react-star-ratings';

const Rating = ({ value, text }) => {
  return (
    <div>
      <StarRatings
        rating={value}
        starRatedColor="blue"
        numberOfStars={5}
        starDimension="20px"
        name="rating"
        starRatedColor="rgb(252, 223, 76)"
        starSpacing="3px"
      />
      <p>{text} of reviews</p>
    </div>
  );
};

export default Rating;
