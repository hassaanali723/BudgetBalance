import React from "react";
import '../singup/signup.css'
import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { useMutation } from "react-query";
import { getUser } from "../../../api/auth/authApi";
import { useNavigate } from "react-router-dom";
import Dashboard from "../../Dashboard";

const Login = () => {

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
    <div className="form-container">
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
    </div>
  );
};

export default Login;
