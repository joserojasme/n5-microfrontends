import { useEffect, useState } from "react";
import { ApiSingleton } from "../api.singleton";

const api = ApiSingleton.getInstance();

export const useGetCharacters = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    api
      .rickAndMortyCharacters()
      .then((response: any) => {
        return response.data.results;
      })
      .then((data) => setResults(data))
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return { results };
};
