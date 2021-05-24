const pool = require("./db");

// Create a review
const createReview = async () => {
  const newReview = await pool.query(
<<<<<<< HEAD
    "INSERT INTO review_persons VALUES (id, reviewer_name, email, q1, q2, q3, q4, q5, person_type) RETURNING *"
    // [id, reviewer_name, email, q1, q2, q3, q4, q5, person_type]
=======
    "INSERT INTO review_persons VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *",
    [id, reviewer_name, email, q1, q2, q3, q4, q5, person_type]
>>>>>>> 4110bac907576395c1932826acc71cd4d0698f21
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
