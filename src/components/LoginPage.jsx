import { useNavigate } from "react-router-dom";
import "./LoginPage.css";
export default function LoginPage({ emojiHolder }) {
  const navigate = useNavigate();
  emojiHolder = ":)";
  return (
    <>
      <div className="column-div">
        <h1 className="main-heading">
          Welcome to{" "}
          <span className="maxti-land-span">Maxti Land {emojiHolder}</span>
        </h1>
        <h2 className="slogan-heading">
          Let's laugh at everything! The more sensitive the better!
        </h2>
        <div className="sign-in-heading-div">
          <h3>Please enter your email and password</h3>
        </div>
        <input type="text" name="email" id="email-input" placeholder="Email" />
        <br />
        <input
          type="password"
          name="password"
          id="password-input"
          placeholder="Password"
        />
        <div className="login-div">
          <button className="login-button" onClick={() => navigate("/main")}>
            <span className="login-text-span">Login</span>
          </button>
        </div>
        <span className="real-nigga-span">
          <p>Made by a real nigga {emojiHolder}</p>
        </span>
      </div>
    </>
  );
}
