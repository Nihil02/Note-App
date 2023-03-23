CREATE PROCEDURE new_note(
   n_title VARCHAR(100),
   n_text TEXT
)
LANGUAGE SQL
BEGIN ATOMIC
    INSERT INTO notes(note_title, note_text) VALUES (n_title, n_text);
END;


CREATE PROCEDURE delete_note(
   n_id INTEGER
)
LANGUAGE SQL
BEGIN ATOMIC
    DELETE FROM notes WHERE note_id = n_id;
END;


CREATE PROCEDURE change_note(
   n_id INTEGER,
   n_title VARCHAR(100),
   n_text TEXT
)
LANGUAGE SQL
BEGIN ATOMIC
    UPDATE notes 
    SET note_title = n_title, note_text = n_text 
    WHERE note_id = n_id;
END;


CREATE PROCEDURE show_note(
   n_id INTEGER
)
LANGUAGE SQL
BEGIN ATOMIC
    SELECT * FROM notes
    WHERE note_id = n_id;
END;