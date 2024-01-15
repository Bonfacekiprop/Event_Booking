import { StyledContainer } from "../assets/Style/Styled";
import Home from "./Home";
import Dashboard from "./Dashboard";
import Event from "./Event";
import Login from "./Login";
import Signup from "./Signup";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import { BrowserRouter as Router,Switch ,Route } from "react-router-dom";


const App = () =>{
    return (
      <Router>
      <StyledContainer>
        <Switch>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/event">
            <Event />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      
      </StyledContainer>
      </Router>
    );
}

export default App;