import axios from "axios";
import "./MainPage.css";
import { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
export default function MainPage() {
  const fade = useSpring({
    from: {
      x: -500,
      opacity: 0,
    },
    to: {
      x: 0,
      opacity: 1,
    },
    config: {
      duration: 1000,
    },
  });
  const baseURL = "https://v2.jokeapi.dev/joke";
  const [myJoke, setMyJoke] = useState("");
  const [isJokeTypeTwoPart, setIsJokeTypeTwoPart] = useState(false);
  const [twoPartJokeDelivery, setTwoPartJokeDelivery] = useState("");
  function callJokeAPI() {
    axios.get(`${baseURL}/Dark?blacklistFlags=religious`).then((response) => {
      if (response.data.type === "twopart") {
        setIsJokeTypeTwoPart(true);
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
      <animated.div className="welcome-main-heading-div" style={fade}>
        <h1 className="welcome-main-heading">Welcome back!</h1>
        <h2 className="selection-sub-heading">
          Press the button below to generate a random joke!
        </h2>
        <button className="joke-generator-button" onClick={callJokeAPI}>
          Joke Around
        </button>
      </animated.div>
      <div className="joke-div">
        <p>{myJoke}</p>
        {isJokeTypeTwoPart ? (
          <p className="delivery">{twoPartJokeDelivery}</p>
        ) : null}
      </div>
    </>
  );
}
