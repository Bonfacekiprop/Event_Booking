import {
  CopyrightText,
  StyledFormArea,
  StyledFormButton,
  Avatar,
  StyledTitle,
  colors,
  ButtonGroup,
  ExtraText,
  TextLink,
  StyledTextInput,
} from "../assets/Style/Styled";
import Logo from "./../assets/logo2.svg";
// forms
import { Formik, Form } from "formik";
import { TextInput } from "../assets/Style/FormLib";
// icons for password
import { FiMail, FiLock } from "react-icons/fi";
import * as Yup from "yup";

//loaders
import { Bars } from "react-loader-spinner";
import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div >
      <StyledFormArea>
        <Avatar image={Logo} />
        <StyledTitle color={colors.theme} size={30}>
          Member Login
        </StyledTitle>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={Yup.object({
            email: Yup.string()
              .email("Invalid email address")
              .required("Required"),
            password: Yup.string()
              .min(8, "password is too short")
              .max(30, "password is too long ")
              .required(),
          })}
          onSubmit={(values, { setSubmitting }) => {
            console.log("checked here")
            console.log(values);
            navigate("/dashboard", {})
          }}
        >
          {({ isSubmitting }) => (
            <Form style={{flexDirection: "column"}}>
              <StyledTextInput
                name="email"
                type="text"
                label="Email Address"
                placeholder="bonnix@example.com"
                icon={<FiMail />}
              />
              <StyledTextInput
                name="password"
                type="password"
                label="password"
                placeholder="**********"
                icon={<FiLock />}
              />
              <ButtonGroup>
                {!isSubmitting && (
                  <StyledFormButton type="submit"> Login</StyledFormButton>
                )}
                {isSubmitting && (
                  <Bars
                    type="ThreeDots" 
                    color={colors.theme}
                    height={45}
                    width={100}
                  />
                )}
              </ButtonGroup>
            </Form>
          )}
        </Formik>
        <ExtraText>
          New here? <TextLink to="/signup"> Signup</TextLink>
        </ExtraText>
      </StyledFormArea>
      <CopyrightText>All rights reserved &copy;2024</CopyrightText>
    </div>
  );
};

export default Login;
