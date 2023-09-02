import { useEffect, useState } from "react";
import { ApiSingleton } from "../api.singleton";

const api = ApiSingleton.getInstance();

export const useGetCharacters = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    api
      .harryPotterCharacters()
      .then((response: any) => {
        setResults(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return { results };
};
