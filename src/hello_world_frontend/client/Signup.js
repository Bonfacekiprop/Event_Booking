import {CopyrightText, StyledTextInput, StyledFormArea, StyledFormButton, StyledLabel,Avatar, StyledTitle, colors, ButtonGroup, ExtraText, TextLink} from '../assets/Style';
import Logo from './../assets/logo.png';
// forms
import {Formik, Form} from 'formik';
import { TextInput } from '../assets/logo2.svg';
// icons for password
 import {FiMail, FiLock, FiUser, FiCalendar} from 'react-icons/fi';
 import * as Yup from 'yup';
 //loaders

const Signup = () => {
    return(
        <div>
            <StyledFormArea>
               <Avatar image={Logo}/>
               <StyledTitle  color={colors.theme} size ={30}>

                Member Signup
               </StyledTitle>
               <Formik 
               
               initialValues = {{
                email: "",
                password: "",
                repeatPassword: "",
                dateOfBirth: "",
                name: "" 
            }}

            validationSchema ={
                Yup.object({
                    email: Yup.string().email("Invalid email address")
                    .required("Required"),
                    password: Yup.string().min(8, "password is too short").max(30, "password is too long ").required(),
                  
                    name: Yup.string().required("Required"),
                    dateOfBirth: Yup.date().required("Required"),
                    repeatPassword: Yup.string().required("Required").oneOf([Yup.ref("password")],"Password must match")
                
                })
            }
            onSubmit={(values, {setSubmitting}) =>{
                console.log(values)
            }}
               
               >  


                    
                     {({isSubmitting}) =>(
                        <Form>
                            <TextInput
                                 name="name"
                                 type="text"
                                 label="Full name"
                                 placeholder="bonnix "
                                 icon={<FiUser/>}
                            
                            />
                             <TextInput
                                 name="email"
                                 type="text"
                                 label="Email Address"
                                 placeholder="bonnix@example.com"
                                 icon={<FiMail/>}
                            
                            />
                            <TextInput 
                                 name="dateOfBirth"
                                 type="date"
                                 label="Date of Birth"
                                 icon={<FiCalendar/>}
                                 
                            />
                            <TextInput 
                                 name="password"
                                 type="password"
                                 label="password"
                                 placeholder="**********"
                                 icon={<FiLock/>}
                                 
                            />
                            <TextInput 
                                 name="repeatPassword"
                                 type="password"
                                 label="repeat Password"
                                 placeholder="**********"
                                 icon={<FiLock/>}
                                 
                            />
                            <ButtonGroup>
                                {!isSubmitting && (
                                <StyledFormButton 
                                type="submit"> Signup

                                </StyledFormButton>)}

                                
                            </ButtonGroup>

                        </Form>
                     )

                     }
               </Formik>
               <ExtraText>
                    Already have an account? <TextLink to="/login"> login</TextLink>
               </ExtraText>


            </StyledFormArea>
            <CopyrightText>
                All rights reserved &copy;2024 
            </CopyrightText>
        </div>
    )
}

export default Signup;