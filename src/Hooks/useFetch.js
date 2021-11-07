import { useState, useEffect } from 'react';

const useFetchData = callback => {
  const [isFetched, setIsFetched] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    callback()
      .then(res => {
        setData(res.data);
        setIsFetched(true);
      })
      .catch(err => {
        setError(err);
      });
  }, [callback]);

  return [isFetched, data, error];
};

export default useFetchData;
