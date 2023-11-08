import { Route, Routes } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import MainPage from "./components/MainPage";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" Component={LoginPage} />
        <Route path="/main" Component={MainPage} />
      </Routes>
    </>
  );
}
