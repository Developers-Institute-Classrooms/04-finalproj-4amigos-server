BEGIN;
INSERT INTO review_persons (person_name, term, class_name, person_type)
VALUES (
        'Lance Cooper',
        'T3-2020',
        'client-side',
        'instructor'
    );
INSERT INTO review_persons (person_name, term, class_name, person_type)
VALUES ('Nik Ho', 'T4-2020', 'server-side', 'instructor');
INSERT INTO review_persons (person_name, term, class_name, person_type)
VALUES ('Nik Ho', 'T1-2021', 'Full-stack', 'instructor');
INSERT INTO review_persons (person_name, term, class_name, person_type)
VALUES ('Raf Gemmail', 'T2-2021', 'agile', 'instructor');
COMMIT;