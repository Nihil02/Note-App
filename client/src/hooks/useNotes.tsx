import { useEffect, useState } from "react";
import { url } from "./../config";

export const useGetNotes = () => {
  const [notes, setNotes] = useState([]);

  //Get all notes from server
  useEffect(() => {
    try {
      fetch(url)
        .then((res) => res.json())
        .then((notes) => setNotes(notes));
    } catch (error) {
      console.error(error);
    }
  }, [url]);

  return [notes];
};
