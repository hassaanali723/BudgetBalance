import React from "react";
import "./signup.css";
import '../login/Login'
import { Button, TextField, Box, Typography, FormControl, InputLabel,
  OutlinedInput, InputAdornment, IconButton, Link } from "@mui/material";
import { useState } from "react";
import { useMutation } from "react-query";
import { createUser } from "../../../api/auth/authApi";
import { useNavigate } from "react-router-dom";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { formStyle } from "../login/Login";

const Signup = () => {

  // password visibility
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  // managing input states
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const {
    data,
    isLoading,
    error,
    mutate: register,
  } = useMutation("register", createUser, {
    onSuccess: (data) => {
      navigate("/auth/login");
    },
  });

  // button click event
  const handleSubmit = async (event) => {
    event.preventDefault();
    const user = { firstName, lastName, email, password };
    register(user);
  };

  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <h1>Error in loading</h1>;

  return (
    <div className="form-container">
      <Box elevation={10}
        sx={formStyle}>
        <Typography variant='h4' align='center'sx={{fontWeight: '700', marginBottom: 3}}>
          Sign Up
        </Typography>

        <div className="inline-form">
          <TextField id="firstName" label='First Name' placeholder='Enter First Name' 
          type='text' fullWidth required value={firstName} onChange={(e) => {
            setFirstName(e.target.value)
          }} />
          <TextField id="lastName" label='Last NAme' placeholder='Enter Last NAme' 
          type='text' fullWidth required value={lastName} onChange={(e) => {
            setLastName(e.target.value)
          }} />
        </div>

        <TextField label='Email Address' placeholder='Enter Email Adress' 
        type='email' fullWidth required value={email} onChange={(e) => {
          setEmail(e.target.value)
        }} />
            
        <FormControl variant="outlined" required>
          <InputLabel htmlFor="password">Password</InputLabel>
        <OutlinedInput id='password'
          label='Password'
          placeholder='Enter password'
          type={showPassword ? 'text' : 'password'}
          value={password} onChange={(e) => {
            setPassword(e.target.value)
          }}
          endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
            {showPassword ? <Visibility/> : <VisibilityOff />}
          </IconButton>
        </InputAdornment>
        }
        fullWidth/>
        </FormControl>
            
        <Button type='submit' color='primary' variant="contained"
          fullWidth disabled={(!firstName || !lastName || !email || !password)} sx={{
          borderRadius: 30,
          "&.Mui-disabled": {
          bgcolor: "#7fbfff",
          color: 'white'
        }}}
        onClick={handleSubmit}>
          Sign Up
        </Button>
            
        <hr />
        <Typography variant='subtitle2' align='center'> Already have an account ?{' '}
          <Link href="Login" >
            Login 
          </Link>
        </Typography>
      </Box>
      
    </div>
  );
};

export default Signup;


/* <h1>Sign up</h1>
      <form onSubmit={handleSubmit}>
        <TextField
          id="firstName"
          label="First Name"
          variant="outlined"
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <TextField
          id="lastName"
          label="Last Name"
          variant="outlined"
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
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
          Submit
        </Button>
      </form> */