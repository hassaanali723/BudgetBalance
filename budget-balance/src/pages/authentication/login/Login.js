import React from "react";
import "../singup/signup.css";
import "../singup/signup.js";
import {
  Button,
  TextField,
  Box,
  Typography,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  Link,
} from "@mui/material";
import { useState } from "react";
import { useMutation } from "react-query";
import { getUser } from "../../../api/auth/authApi";
import { useNavigate } from "react-router-dom";
import Dashboard from "../../Dashboard";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useDispatch } from "react-redux";
import { loginUser } from "../../../store/actions/auth.actions";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

// styling for box
export const formStyle = {
  height: "80vh",
  width: 330,
  bgcolor: "white",
  color: "#1f2a40",
  px: 5,
  py: 2,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  borderRadius: 2,
};

const Login = () => {
  // password visibility
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  // managing input states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    data,
    isLoading,
    error,
    mutate: login,
  } = useMutation("login", getUser, {
    onSuccess: (data) => {
      console.log(data);
      dispatch(loginUser(data.AccessToken));
      navigate("/");
    },
  });

  // button click event
  const handleSubmit = (event) => {
    event.preventDefault();
    const user = { email, password };
    login(user);
  };

  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <h1>Error in loading</h1>;

  return (
    <div align="center" className="form-container">
      <Box elevation={10} sx={formStyle}>
        <Typography
          variant="h4"
          align="center"
          sx={{ fontWeight: "700", marginBottom: 3 }}>
          Login
        </Typography>
        <ValidatorForm onSubmit={handleSubmit}>
          <TextValidator
            label="Email Address"
            placeholder="Enter Email Adress"
            type="email"
            fullWidth
            required
            value={email}
            validators={["required", "isEmail"]}
            errorMessages={["this field is required", "email is not valid"]}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />

          <FormControl variant="outlined" required>
            <InputLabel htmlFor="password">Password</InputLabel>
            <OutlinedInput
              id="password"
              label="Password"
              placeholder="Enter password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end">
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
              fullWidth
            />
          </FormControl>

          <Button
            type="submit"
            color="primary"
            variant="contained"
            fullWidth
            disabled={!email || !password}
            sx={{
              borderRadius: 30,
              "&.Mui-disabled": {
                bgcolor: "#7fbfff",
                color: "white",
              },
            }}>
            Login
          </Button>
        </ValidatorForm>
        <Typography variant="subtitle2">
          <Link href="#">Forgot password ?</Link>
        </Typography>
        <hr />
        <Typography variant="subtitle2" align="center">
          {" "}
          Do you have an account ? <Link href="signup">Sign Up</Link>
        </Typography>
      </Box>
    </div>

    /*     <div className="form-container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <TextField
          id="email"
          label="Email"
          variant="outlined"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          id="password"
          label="Password"
          variant="outlined"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button variant="contained" type="submit">
          Login
        </Button>
      </form>
    </div> */
  );
};

export default Login;
