import { useNavigate } from "react-router-dom";
import { auth } from "../Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import "./LoginPage.css";
import { useState } from "react";
export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  function signIn() {
    signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        if (user != null) {
          navigate("/main");
        }
      })
      .catch((error) => console.log(error));
    navigate("/main");
  }
  return (
    <>
      <div className="column-div">
        <h1 className="main-heading">Welcome to Maxti Land </h1>
        <h2 className="slogan-heading">Maxti rahi rukni chaiye</h2>
        <div className="sign-in-heading-div">
          <h3>Please enter your email and password</h3>
        </div>
        <input
          type="text"
          name="email"
          id="email-input"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          type="password"
          name="password"
          id="password-input"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="login-div">
          <button className="login-button" onClick={signIn}>
            <span className="login-text-span">Login</span>
          </button>
        </div>
        <p className="real-creator-paragraph">Made by Mr Boo </p>
      </div>
    </>
  );
}
