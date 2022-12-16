import { useState } from "react";

function useAjax(action, isUpload = false) {
  const [isLoading, setIsLoading] = useState(false);

  const url = `https://react-meals-e5a99-default-rtdb.europe-west1.firebasedatabase.app/${
    isUpload ? "orders" : "meals"
  }.json`;

  const fetchMeals = async (uploadData) => {
    const fetchPro = uploadData
      ? fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(uploadData),
        })
      : fetch(url);

    setIsLoading(true);
    const response = await fetchPro;
    const data = await response.json();

    action(data);

    setIsLoading(false);
  };
  return { fetchMeals, isLoading };
}

export default useAjax;
