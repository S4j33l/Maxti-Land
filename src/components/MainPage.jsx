import axios from "axios";
import "./MainPage.css";
import { useState } from "react";
export default function MainPage() {
  const baseURL = "https://v2.jokeapi.dev/joke";
  const [myJoke, setMyJoke] = useState("");
  const [isJokeTypeTwoPart, setIsJokeTypeTwoPart] = useState(false);
  const [twoPartJokeDelivery, setTwoPartJokeDelivery] = useState("");
  function callJokeAPI() {
    axios.get(`${baseURL}/Any?blacklistFlags=religious`).then((response) => {
      if (response.data.type === "twopart") {
        setIsJokeTypeTwoPart(true)
        setMyJoke(response.data.setup);
        setTimeout(() => setTwoPartJokeDelivery(response.data.delivery), 2000);
      } else {
        setIsJokeTypeTwoPart(false);
        setMyJoke(response.data.joke);
      }
    });
  }
  return (
    <>
      <div className="welcome-main-heading-div">
        <h1 className="welcome-main-heading">Welcome back!</h1>
        <h2 className="selection-sub-heading">
          Press the button below to generate a random joke!
        </h2>
      </div>
      <div className="main-content-div">
        <button className="joke-generator-button" onClick={callJokeAPI}>
          Joke Around
        </button>
      </div>
      <p className="joke">{myJoke}</p>
      <p className="delivery">
        {isJokeTypeTwoPart ? <p>{twoPartJokeDelivery}</p> : null}
      </p>
    </>
  );
}
