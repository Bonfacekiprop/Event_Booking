import {
  StyledSubTitle,
  StyledTitle,
  Avatar,
  StyledButton,
  ButtonGroup,
} from "../assets/Style/Styled";
import Logo from "./../assets/logo2.svg";
import React from "react";
const Home = () => {
  return (
    <div>
      <div
        style={{
          position: "relative",
          top: 0,
          right: "60 px",
          backgroundColor: "transparent",
          width: "100",
          padding: "40px",
          display: "flex",
          justifyContent: "flex-start",
        }}
      >
        <Avatar image={Logo} />
      </div>
      <StyledTitle size={65}>Welcome to Event</StyledTitle>
      <StyledSubTitle size={27}>Feel free to explore our page</StyledSubTitle>
      <ButtonGroup>
        <StyledButton to="/login">LogIn</StyledButton>
        <StyledButton to="/signup">SignUp</StyledButton>
      </ButtonGroup>
    </div>
  );
};
export default Home;
