import axios from "axios";
import "./MainPage.css";
import { useEffect, useState } from "react";
export default function MainPage() {
  const baseURL = "https://v2.jokeapi.dev/joke";
  const [myJoke, setMyJoke] = useState("");
  function callJokeAPI() {
    axios
      .get(`${baseURL}/Any?format=txt`)
      .then((response) => setMyJoke(response.data));
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
      <div className="checkboxes-div">
        <label className="label-checkbox">
          <input type="checkbox" id="joketype-checkbox" />
        </label>
        <span className="joketype-span">Miscellanous</span>
        <label className="label-checkbox">
          <input type="checkbox" id="joketype-checkbox" />
        </label>
        <span className="joketype-span">Dark</span>
        <label className="label-checkbox">
          <input type="checkbox" id="joketype-checkbox" />
        </label>
        <span className="joketype-span">Programming</span>
        <label className="label-checkbox">
          <input type="checkbox" id="joketype-checkbox" />
        </label>
        <span className="joketype-span">Pun</span>
      </div>
      <p className="joke">{myJoke}</p>
    </>
  );
}
