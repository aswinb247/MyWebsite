import React from "react";
import { Route, Routes } from "react-router-dom";
import ResponsiveAppBar from "./Components/NavBar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Research from "./Pages/Research";
import Blog from "./Pages/Blog";
import "./css/App.css";

const App = () => {
  return (
    <>
        <ResponsiveAppBar />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/resume" element={<About/>} />
          <Route path="/blog" element={<Blog/>} />
          <Route path="/research" element={<Research/>} />
          <Route path="*" element={<Home/>} />
        </Routes>
    </>
  );
};

export default App;
