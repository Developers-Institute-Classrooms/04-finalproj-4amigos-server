const pool = require("./db");

// Create review person
const createPerson = async () => {
  const newPerson = await pool.query(
    "INSERT INTO review_persons VALUES ($1, $2, $3, $4, $5) RETURNING *",
    [id, first_name, last_name, class_name, person_type]
  );
  return newPerson;
};
// Get All student persons
const getAllStudents = async () => {
  const studentSub = await pool.query(
    "SELECT * FROM review_persons WHERE person_type = student"
  );
  return studentSub;
};
// Get All instructor persons
const getAllInstructors = async () => {
  const instructorSub = await pool.query(
    "SELECT * FROM review_persons WHERE person_type = instructor"
  );
  return instructorSub;
};
// get one student subject

// get on instructor subject
// update subject
// delete subject

module.exports = {
  createPerson,
  getAllStudents,
  getAllInstructors,
};
