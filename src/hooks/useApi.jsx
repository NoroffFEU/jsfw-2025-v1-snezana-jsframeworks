import { useState, useEffect } from "react";

// ✅ This log helps confirm the hook file is loaded
console.log("🧠 useApi file loaded");

export function useApi(url) {
  const [data, setData] = useState([]);       // store products
  const [isLoading, setIsLoading] = useState(false); // loading spinner
  const [isError, setIsError] = useState(false);     // error handling

  useEffect(() => {
    async function getData() {
      console.log("🚀 useApi called with URL:", url);

      try {
        setIsLoading(true);
        setIsError(false);

        const response = await fetch(url);

        // ❌ if API fails, throw error
        if (!response.ok) throw new Error("Network response not OK");

        const json = await response.json();

        // ✅ Noroff API returns { data: [...] }, so use that
        const products = json.data || [];
        setData(products);

        console.log("✅ Products from API:", products);
      } catch (error) {
        console.error("💥 API error:", error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    getData();
  }, [url]);

  // ✅ Always return these three values
  return { data, isLoading, isError };
}
