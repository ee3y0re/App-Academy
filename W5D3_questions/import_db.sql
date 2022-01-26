DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS questions;
DROP TABLE IF EXISTS question_follows;
DROP TABLE IF EXISTS replies;
DROP TABLE IF EXISTS question_likes;

PRAGMA foreign_keys = ON;

CREATE TABLE users(
    id INTEGER PRIMARY KEY, 
    fname VARCHAR(255),
    lname VARCHAR(255)
);

CREATE TABLE questions (
    id INTEGER PRIMARY KEY,
    title VARCHAR(255),
    body TEXT NOT NULL
);

CREATE TABLE question_follows (
    id INTEGER PRIMARY KEY,
    user_id INTEGER NOT NULL,
    question_id INTEGER NOT NULL,

    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (question_id) REFERENCES questions(id)
);

CREATE TABLE replies(
    id INTEGER PRIMARY KEY,
    reply TEXT NOT NULL,
    question_id INTEGER NOT NULL,
    parent_id INTEGER,
    user_id INTEGER NOT NULL,

    FOREIGN KEY (question_id) REFERENCES questions(id),
    FOREIGN KEY (parent_id) REFERENCES replies(id),
    FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE question_likes (
    id INTEGER PRIMARY KEY,
    user_id INTEGER NOT NULL,
    question_id INTEGER NOT NULL,

    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (question_id) REFERENCES questions(id)
);

INSERT INTO
    users(fname, lname)
VALUES
    ("Elhoussine", "Elouardy"),
    ("Abigail", "Montemayor");

INSERT INTO
    questions(title, body)
VALUES
    ("Lunch", "What's for lunch?");

INSERT INTO
    question_follows(user_id, question_id)
VALUES
    ((SELECT id FROM users WHERE fname = 'Elhoussine'), (SELECT id FROM questions WHERE title = 'Lunch')),
    ((SELECT id FROM users WHERE lname = 'Montemayor'), (SELECT id FROM questions WHERE title = 'Lunch'));

INSERT INTO
    replies(reply, question_id, parent_id, user_id)
VALUES
    ('Spaghetti!', (SELECT id FROM questions WHERE title = 'Lunch'), NULL, (SELECT id FROM users WHERE fname = 'Abigail')),
    ('Burrito!', (SELECT id FROM questions WHERE title = 'Lunch'), (SELECT id FROM replies WHERE parent_id IS NULL), (SELECT id FROM users WHERE lname = 'Elouardy'));

INSERT INTO
    question_likes(user_id, question_id)
VALUES
    ((SELECT id FROM users WHERE fname = 'Elhoussine'), (SELECT id FROM questions WHERE title = 'Lunch'));