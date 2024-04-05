import { useState, useEffect } from "react";

export function useFetch(url, options) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const isLoading = data === null && error === null;

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(url, options);
        const data = await response.json();
        setData(data);
      } catch (error) {
        setError(error);
      }
    }

    setTimeout(fetchData, 1000);
  }, [url, options]);

  return {
    data,
    error,
    isLoading,
  };
}
