import { useEffect, useState } from "react";

const Fetch = () => {
  const [quote, setQuote] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch("https://dummyjson.com/quotes/random")
      .then((res) => res.json())
      .then((data) => {
        setQuote(data);
        setIsLoading(false)
      });
  }, []);
  return (
    <div>
      {isLoading ? (
        "Loading..."
      ) : (
        <>
          <p>{quote?.quote}</p>
        </>
      )}
    </div>
  );
};

export default Fetch;
