function useAjax(url, settings = null, action) {
  const [isLoading, setIsLoading] = useState(false);

  const fetchMeals = async () => {
    setIsLoading(true);
    const response = await fetch("url");
    const data = await response.json();

    action(data);

    setIsLoading(false);

    return { isLoading };
  };
}

export default useAjax;
