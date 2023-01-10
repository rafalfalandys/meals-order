import { useState } from "react";

function useAjax(action, isUpload = false) {
  const [isLoading, setIsLoading] = useState(false);

  const url = `https://meals-2-94ac8-default-rtdb.europe-west1.firebasedatabase.app/${
    isUpload ? "orders" : "meals"
  }.json`;

  const fetchMeals = async (uploadData) => {
    setIsLoading(true);

    const fetchPro = uploadData
      ? fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(uploadData),
        })
      : fetch(url);

    const response = await fetchPro;
    if (!response.ok) {
      setIsLoading(false);
      console.log(response);
      throw new Error(`Something went wrong (${response.status})`);
    }
    const data = await response.json();

    action(data);

    setIsLoading(false);
  };
  return { fetchMeals, isLoading };
}

export default useAjax;
