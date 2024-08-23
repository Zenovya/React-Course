import {  Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import LoginPage from "./LoginPage";
import AboutPage from "./AboutPage";
import NavBar from "./NavBar";
import UserProvider from "./context/UserProvider";

const MainApp = () => {
  return (
    <UserProvider>
      {/* <h1>MainApp</h1> */}

      {/* <a href="/">Home</a>
    <br />
    <a href="/about">About</a>
    <br />
    <a href="/login">Login</a> */}

      <NavBar />

      <hr />
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="about" element={<AboutPage />} />

        {/* <Route path="*" element={<h1>404 Not Found</h1>} /> */}
        <Route path="*" element={<Navigate to="/about" />} />
      </Routes>
    </UserProvider>
  );
};

export default MainApp;
