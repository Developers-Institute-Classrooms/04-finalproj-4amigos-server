CREATE TABLE review_persons (
    id SERIAL PRIMARY KEY,
    person_name TEXT,
    term VARCHAR(20),
    class_name VARCHAR(100) NOT NULL,
    person_type VARCHAR(25) NOT NULL
);
CREATE TABLE reviews (
    id SERIAL PRIMARY KEY,
    reviewer_name VARCHAR(60) NOT NULL,
    email VARCHAR(60) NOT NULL,
    review_person VARCHAR(60) NOT NULL,
    term VARCHAR(10) NOT NULL,
    class_name VARCHAR(100) NOT NULL,
    q1 INT NOT NULL,
    q2 INT NOT NULL,
    q3 INT NOT NULL,
    q4 INT NOT NULL,
    q5 INT NOT NULL,
    additional_feedback VARCHAR(500) NOT NULL
);
COMMIT;