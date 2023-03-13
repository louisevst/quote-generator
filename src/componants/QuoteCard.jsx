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
        if (json[0].quote > 305) {
          setQuote(json[1].quote);
          setAuthor(json[1].author);
        }
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
      <main className="flex w-full justify-center">
        <div className="flex flex-col  lg:flex-row w-4/5  h-full md:w-1/3 justify-center">
          <Card>
            <div className=" text-whitish">
              <h1>The quote is loading...</h1>
            </div>
          </Card>
          <Card2></Card2>
        </div>
      </main>
    );
  } else {
    return (
      <main className="w-full h-full p-10 lg:p-20 lg:px-44">
        <div className="flex flex-col lg:flex-row h-full justify-center items-center">
          <Card>
            <Cite quote={quote} author={author} />
            <Button onClick={clickHandler} />
          </Card>
          <Card2></Card2>
          {previousQuotes.length > 1 && (
            <div className=" lg:translate-y-0  h-[400px] w-[90%] rounded-full lg:h-[550px] lg:w-[300px] translate-y-[-30px] lg:translate-x-[-30px] bg-blackGreen flex justify-center items-center p-14 flex-1">
              <Cite
                quote={previousQuotes[previousQuotes.length - 1].quote}
                author={previousQuotes[previousQuotes.length - 1].author}
              />
            </div>
          )}
        </div>
      </main>
    );
  }
};
// lenght>1 pcq beuug donc jms a 0
export default QuoteCard;
