import { StyledContainer } from "../assets/Style/Styled";
import Home from "./Home";
import Dashboard from "./Dashboard";
import Event from "./Event";
import Login from "./Login";
import Signup from "./Signup";
import React from "react";

// import Loader from "react-loader-spinner";
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <StyledContainer>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/event" element={<Event />} />
        </Routes>
      </StyledContainer>
    </Router>
  );
};

export default App;
