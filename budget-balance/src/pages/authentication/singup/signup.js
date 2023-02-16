import React from "react";
import "./signup.css";
import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { useMutation } from "react-query";
import { createUser } from "../../../api/auth/authApi";
import { useNavigate } from "react-router-dom";

const Signup = () => {
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

  const handleSubmit = async (event) => {
    event.preventDefault();
    const user = { firstName, lastName, email, password };
    register(user);
  };

  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <h1>Error in loading</h1>;

  return (
    <div className="form-container">
      <h1>Sign up</h1>
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
      </form>
    </div>
  );
};

export default Signup;
