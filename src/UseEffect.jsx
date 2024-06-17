import axios from "axios";
import { useEffect, useState } from "react";

const UseEffect = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const fetchQuote = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/quotes/random");
      setQuote(response.data.quote);
      setAuthor(response.data.author);
    } catch (error) {
      console.error("Error fetching the quote:", error);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);
  
  return (
    <div>
      <p>{quote}</p>
      <h4>- {author}</h4>
      <button onClick={fetchQuote}>Get Random Quote</button>
    </div>
  );
};

export default UseEffect;
