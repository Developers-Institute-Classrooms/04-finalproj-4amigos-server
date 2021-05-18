BEGIN TRANSACTION;
CREATE TABLE instructor (
    instructor_id SERIAL PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    class VARCHAR(255) NOT NULL,
    user_type VARCHAR(25) NOT NULL,
);
CREATE TABLE term2_2021_reviews (
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    q1 NUMBER(5) NOT NULL,
    q2 NUMBER(5) NOT NULL,
    q3 NUMBER(5) NOT NULL,
    q4 NUMBER(5) NOT NULL,
    q5 NUMBER(5) NOT NULL,
    additional_feedback VARCHAR(500) NOT NULL
);
COMMIT;