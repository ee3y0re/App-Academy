DROP TABLE IF EXISTS users;
CREATE TABLE users(
    id INTEGER PRIMARY KEY, 
    fname VARCHAR(255),
    lname VARCHAR(255)
    );

DROP TABLE IF EXISTS questions;
CREATE TABLE questions (
    id INTEGER PRIMARY KEY,
    title VARCHAR(255),
    body TEXT NOT NULL
)

DROP TABLE IF EXISTS question_follows;
CREATE TABLE question_follows (
    id INTEGER PRIMARY KEY,
    user_id INTEGER NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id),
    question_id INTEGER NOT NULL,
    FOREIGN KEY (question_id) REFERENCES questions(id)
)

DROP TABLE IF EXISTS replies;
