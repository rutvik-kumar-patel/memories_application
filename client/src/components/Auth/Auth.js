import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Grid, Typography, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { jwtDecode } from "jwt-decode";

import { signin, signup } from "../../actions/auth";
import { AUTH } from "../../constants/actionTypes";
import { StyledPaper, StyledAvatar, StyledButton } from "./styles"; // Import new styles
import Input from "./Input";

const initialState = { firstName: "", lastName: "", email: "", password: "", confirmPassword: "" };

const SignUp = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const [form, setForm] = useState(initialState);
  const [isSignup, setIsSignup] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => setShowPassword(!showPassword);

  const switchMode = () => {
    setForm(initialState);
    setIsSignup((prevIsSignup) => !prevIsSignup);
    setShowPassword(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignup) {
      dispatch(signup(form, navigate));
    } else {
      dispatch(signin(form, navigate));
    }
  };

  const googleSuccess = (credentialResponse) => {
    const token = credentialResponse.credential;
    const decoded = jwtDecode(token);
    const result = { name: decoded.name, email: decoded.email, picture: decoded.picture };

    try {
      dispatch({ type: AUTH, data: { result, token } });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const googleError = () => console.log("Google Sign In was unsuccessful. Try again later");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <GoogleOAuthProvider clientId="128507865323-vhp1b0qjvafff4p7iab34v8p0b555lqq.apps.googleusercontent.com">
      <Container component="main" maxWidth="xs">
        <StyledPaper elevation={3}>
          <StyledAvatar>
            <LockOutlinedIcon />
          </StyledAvatar>
          <Typography component="h1" variant="h5">
            {isSignup ? "Sign up" : "Sign in"}
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              {isSignup && (
                <>
                  <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
                  <Input name="lastName" label="Last Name" handleChange={handleChange} half />
                </>
              )}
              <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
              <Input
                name="password"
                label="Password"
                handleChange={handleChange}
                type={showPassword ? "text" : "password"}
                handleShowPassword={handleShowPassword}
              />
              {isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" />}
            </Grid>
            <StyledButton type="submit" fullWidth variant="contained" color="primary">
              {isSignup ? "Sign Up" : "Sign In"}
            </StyledButton>
            <GoogleLogin onSuccess={googleSuccess} onError={googleError} />
            <Grid container justifyContent="flex-end">
              <Grid item>
                <StyledButton onClick={switchMode}>
                  {isSignup ? "Already have an account? Sign in" : "Don't have an account? Sign Up"}
                </StyledButton>
              </Grid>
            </Grid>
          </form>
        </StyledPaper>
      </Container>
    </GoogleOAuthProvider>
  );
};

export default SignUp;
