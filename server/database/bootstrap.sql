CREATE DATABASE note_app;

CREATE TABLE notes(
    note_id SERIAL PRIMARY KEY,
    note_title VARCHAR(100),
    note_text TEXT
);