import { useReducer, useEffect } from "react";

function useStorage(key, initialValue) {
  function reducer(state, action) {
    switch (action.type) {
      case "SET":
        return action.payload;
      default:
        return state;
    }
  }

  function init() {
    try {
      const stored = localStorage.getItem(key);
      return stored !== null ? JSON.parse(stored) : initialValue;
    } catch (error) {
      console.error("Gagal memuat localStorage", error);
      return initialValue;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialValue, init);

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(state));
    } catch (error) {
      console.error("Gagal menyimpan ke localStorage", error);
    }
  }, [state, key]);

  return [state, dispatch];
}

export default useStorage;
