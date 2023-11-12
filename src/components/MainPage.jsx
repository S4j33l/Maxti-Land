import axios from "axios";
import "./MainPage.css";
import { useState } from "react";
export default function MainPage() {
  const baseURL = "https://v2.jokeapi.dev/joke";
  const [myJoke, setMyJoke] = useState("");
  function callJokeAPI() {
    axios
      .get(`${baseURL}/Any?format=txt`)
      .then((response) => setMyJoke(response.data))
      .then(() => console.log(myJoke));
  }
  return (
    <>
      <div className="welcome-main-heading-div">
        <h1 className="welcome-main-heading">Welcome back nigga!</h1>
        <h2 className="selection-sub-heading">
          Press the button below to generate a random joke!
        </h2>
      </div>
      <div className="main-content-div">
        <button className="joke-generator-button" onClick={callJokeAPI}>
          Joke Around
        </button>
      </div>
      <div>
        <p className="joke">{myJoke}</p>
      </div>
    </>
  );
}
