import { useState, useEffect } from "react";
import axios from "axios";

export function useAxios(url) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    const cancelToken = axios.CancelToken.source();
    setLoading(true);
    axios
      .get(url, {
        cancelToken: cancelToken.token,
      })
      .then(setData)
      .catch(setError)
      //   .catch((err) =>
      //     axios.isCancel(err) ? setError("cancelled") : setError("ERR")
      //   )
      .finally(() => setLoading(false));

    return () => {
      cancelToken.cancel();
    };
  }, [url]);

  return { loading, data, error };
}
