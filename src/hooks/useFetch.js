import { useEffect, useState } from "react";

const localCache = {};

export const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: false,
    error: null,
  });

  const getFetch = async () => {
    setLoadingState();
    if(localCache[url]) {
      setState({
        data: localCache[url],
        isLoading: false,
        hasError: false,
        error: null,
      });

      return;
    }

    const response = await fetch(url);

    if (!response.ok) {
      setState({
        data: null,
        isLoading: false,
        hasError: true,
        error: {
          code: response.status,
          message: response.statusText,
        },
      });

      return;
    }

    const data = await response.json();

    setState({
      data,
      isLoading: false,
      hasError: false,
      error: null,
    });

    localCache[url] = data;
  };

  useEffect(() => {
    getFetch();
  }, [url]);

  const setLoadingState = () => {
    setState({
      data: null,
      isLoading: true,
      hasError: false,
      error: null,
    });
  }

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
  };
};
