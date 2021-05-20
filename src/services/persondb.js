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
// get one student subject

// get one instructor subject

// update subject
// const updatePerson = async (id) => {
//     await pool.query("UPDATE review_persons")
// }
// delete subject

module.exports = {
  createPerson,
  getAllStudents,
  getAllInstructors,
};
