import React from "react";
import '../singup/signup.css'
import { Button, TextField, Box, Typography, FormControl, InputLabel,
OutlinedInput, InputAdornment, IconButton, Link } from "@mui/material";
import { useState } from "react";
import { useMutation } from "react-query";
import { getUser } from "../../../api/auth/authApi";
import { useNavigate } from "react-router-dom";
import Dashboard from "../../Dashboard";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export const formStyle = {height: '70vh', width: 300, bgcolor: 'white', color:'black',
px: 5, py: 4, display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly'}

const Login = () => {

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const {
    data,
    isLoading,
    error,
    mutate: login,
  } = useMutation("login", getUser, {
    onSuccess: (data) => {
      console.log(data);
      navigate(Dashboard);
    },
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = { email, password };
    login(user);
  };

  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <h1>Error in loading</h1>;

  return (
    <div align='center' className="form-container">
      <Box elevation={10}
      className
        sx={formStyle}>
        <Typography variant='h4' align='center'sx={{fontWeight: '700'}}>
          Login
        </Typography>

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
          fullWidth disabled={(!email || !password)} sx={{
          borderRadius: 30,
          "&.Mui-disabled": {
          bgcolor: "#7fbfff",
          color: 'white'
        }}}
        onClick={handleSubmit}>
          Sign In
        </Button>
            
        <Typography variant='subtitle2'>
              <Link href="#" >
                Forgot password ?
        </Link>
        </Typography>
        <hr style={{color: '#black', width:270, opacity: '50%'}} />
        <Typography variant='subtitle2' align='center'> Do you have an account ?
          <Link href="#" >
            Sign Up 
          </Link>
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
