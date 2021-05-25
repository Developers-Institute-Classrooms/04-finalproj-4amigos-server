const pool = require("./db");

// Create a review
const createReview = async () => {
  const newReview = await pool.query(
    "INSERT INTO review_persons VALUES id, review_person, reviewer_name, email, q1, q2, q3, q4, q5, person_type RETURNING *"
    // [id, reviewer_name, email, q1, q2, q3, q4, q5, person_type]
  );
  return newReview.rows[0];
};
// Get All reviews
// get one review
// update review
// delete reviews

module.exports = {
  createReview,
};
