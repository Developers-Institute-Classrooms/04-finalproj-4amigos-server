const pool = require("./db");

// Create a review
const createReview = async (
  reviewer_name,
  email,
  review_person,
  term,
  class_name,
  q1,
  q2,
  q3,
  q4,
  q5,
  additional_feedback
) => {
  const newReview = await pool.query(
    "INSERT INTO reviews (reviewer_name, email, review_person, term, class_name, q1, q2, q3, q4, q5, additional_feedback) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)",
    [
      reviewer_name,
      email,
      review_person,
      term,
      class_name,
      q1,
      q2,
      q3,
      q4,
      q5,
      additional_feedback,
    ]
  );
  return newReview;
};
// Get All reviews
// get one review
// update review
// delete reviews

module.exports = {
  createReview,
};
