import { useEffect, useState } from "react";

//Server URL
export const url = import.meta.env.VITE_DB_URL as string;
console.log(import.meta.env.VITE_DB_URL);

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
