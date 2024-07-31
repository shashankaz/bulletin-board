import React, { useEffect, useState } from "react";
import styles from "./Quotes.module.css";
import quotes from "../../../data/quotes.json";

const Quotes = () => {
  const [quote, setQuote] = useState({ q: "", a: "" });

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  }, []);

  return (
    <div className={styles.quote}>
      {quote.q ? (
        <p>
          "{quote.q}" - {quote.a}
        </p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Quotes;
