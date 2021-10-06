import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [results, setResults] = useState({ data: null, isLoading: true });
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log("data ===> ", data);
        setResults({ ...results, data, isLoading: false });
      })
      .catch((error) => {
        console.log("Error...");
        setResults({ ...results, data: null, isLoading: false });
      });
  }, [url]);
  return results;
};
