import React, { useState, useEffect } from "react";
import Cite from "./Cite";
import Button from "./Button";
import Card from "./Card";
import Card2 from "./Card2";

const QuoteCard = () => {
  // State variables
  const [quote, setQuote] = useState(null);
  const [author, setAuthor] = useState(null);
  const [dataIsLoaded, setDataIsLoaded] = useState(false);
  const [displayPrevious, setDisplayPrevious] = useState(false);
  const [previousQuotes, setPreviousQuotes] = useState([]);

  // Fetch a new quote
  const fetchQuote = () => {
    fetch("https://api.api-ninjas.com/v1/quotes?category=freedom", {
      method: "GET",
      headers: {
        "X-API-Key": "dVj3ouuhM53f0KHguRPyXQ==0XAGccxmI1sFLa69",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setPreviousQuotes([...previousQuotes, { quote, author }]);
        setQuote(json[0].quote);
        setAuthor(json[0].author);
        setDataIsLoaded(true);
      });
  };
  const clickHandler = (event) => {
    setDisplayPrevious(!displayPrevious);
    fetchQuote();
  };
  // Use effect to fetch a quote when the component mounts
  useEffect(() => {
    fetchQuote();
  }, []);

  // Render the component
  if (!dataIsLoaded) {
    return (
      <Card>
        <div className="quote text-whitish p-5 flex justify-center items-center">
          <h1>The quote is loading...</h1>
        </div>
      </Card>
    );
  } else {
    return (
      <>
        <Card>
          <Cite quote={quote} author={author} />
          <Button onClick={clickHandler} />
        </Card>
        <Card2></Card2>
        {previousQuotes.length > 1 && (
          <div className="previous-quotes card text-whitish bg-blackGreen p-5 flex justify-center items-center">
            <Cite
              quote={previousQuotes[previousQuotes.length - 1].quote}
              author={previousQuotes[previousQuotes.length - 1].author}
            />
          </div>
        )}
      </>
    );
  }
};
// lenght>1 pcq beuug donc jms a 0
export default QuoteCard;
