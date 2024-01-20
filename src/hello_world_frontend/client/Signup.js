import {
  CopyrightText,
  StyledTextInput,
  StyledFormArea,
  StyledFormButton,
  StyledLabel,
  Avatar,
  StyledTitle,
  colors,
  ButtonGroup,
  ExtraText,
  TextLink,
} from "../assets/Style/Styled";
import Logo from "./../assets/Event.jpeg";
import { Formik, Form } from "formik";
import { FiMail, FiLock, FiUser, FiCalendar } from "react-icons/fi";
import * as Yup from "yup";
import React from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {

  const navigate = useNavigate()

  return (
    <div>
      <StyledFormArea>
        <Avatar image={Logo} />
        <StyledTitle color={colors.theme} size={30}>
          Member Signup
        </StyledTitle>
        <Formik
          initialValues={{
            email: "",
            password: "",
            repeatPassword: "",
            dateOfBirth: "",
            name: "",
          }}
          // validationSchema={Yup.object({
          //   email: Yup.string()
          //     .email("Invalid email address")
          //     .required("Required"),
          //   password: Yup.string()
          //     .min(8, "password is too short")
          //     .max(30, "password is too long ")
          //     .required(),

          //   name: Yup.string().required("Required"),
          //   dateOfBirth: Yup.date().required("Required"),
          //   repeatPassword: Yup.string()
          //     .required("Required")
          //     .oneOf([Yup.ref("password")], "Password must match"),
          // })}
          onSubmit={(values, { setSubmitting }) => {
            console.log("checked here")
            console.log(values);
            navigate("/dashboard", {})
          }}
        >
          {({ isSubmitting }) => (
            <Form style={{flexDirection: "column"}}>
              <StyledTextInput
                name="name"
                type="text"
                label="Full name"
                placeholder="bonnix "
                icon={<FiUser />}
              />
              <StyledTextInput
                name="email"
                type="text"
                label="Email Address"
                placeholder="bonnix@example.com"
                icon={<FiMail />}
              />
              <StyledTextInput
                name="dateOfBirth"
                type="date"
                label="Date of Birth"
                icon={<FiCalendar />}
              />
              <StyledTextInput
                name="password"
                type="password"
                label="password"
                placeholder="**********"
                icon={<FiLock />}
              />
              <StyledTextInput
                name="repeatPassword"
                type="password"
                label="repeat Password"
                placeholder="**********"
                icon={<FiLock />}
              />
              <ButtonGroup>
                {!isSubmitting && (
                  <StyledFormButton type="submit"> Signup</StyledFormButton>
                )}
              </ButtonGroup>
            </Form>
          )}
        </Formik>
        <ExtraText>
          Already have an account? <TextLink to="/login"> login</TextLink>
        </ExtraText>
      </StyledFormArea>
      <CopyrightText>All rights reserved &copy;2024</CopyrightText>
    </div>
  );
};

export default Signup;
