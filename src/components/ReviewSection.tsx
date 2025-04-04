import React from "react";
import "../styles/ReviewSection.css"; // Import the CSS file

const ReviewSection: React.FC = () => {
  return (
    <div className="review-container">
      {/* Section Heading */}
      <h2 className="review-heading">Reviews</h2>

      {/* Review Text */}
      <p className="review-text">
        “ <span className="bold-text">
          Very good quality T-shirts and lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua quis ipsum!
        </span> ”
      </p>

      {/* Star Ratings */}
      <div className="star-rating">
        ⭐ ⭐ ⭐ ⭐ ⭐
      </div>

      {/* Reviewer Name */}
      <p className="reviewer-name">Jane Oliver</p>
    </div>
  );
};

export default ReviewSection;
