const pool = require("./db");

// Create review person
// const createPerson = async () => {
//   const newPerson = await pool.query(
//     "INSERT INTO review_persons(person_name, term, class_name, person_type) VALUES ($1, $2, $3, $4) RETURNING id",
//     [person_name, term, class_name, person_type]
//   );
//   return newPerson;
// };

// Get All student persons
const getAllStudents = async () => {
  const studentSub = await pool.query(
    "SELECT * FROM review_persons WHERE person_type = 'student'"
  );
  return studentSub.rows;
};
// Get All instructor persons
const getAllInstructors = async () => {
  const instructorSub = await pool.query(
    "SELECT * FROM review_persons WHERE person_type = 'instructor'"
  );
  return instructorSub.rows;
};

module.exports = {
  getAllStudents,
  getAllInstructors,
};
