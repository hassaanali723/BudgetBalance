import React, { useState, useEffect } from "react";
import { Grid, Box, Typography, Button, TextField, Stack, Card,
CardContent } from '@mui/material';
import { formStyle } from "./authentication/login/Login";
import { ValidatorForm } from "react-material-ui-form-validator";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import { createAccount, fetchAccounts } from "../api/auth/authApi";
import Account from "./Account";

const Accounts = () => {

  // managing input states
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(0);
  const [accounts, setAccounts] = useState([]);
  const navigate = useNavigate();
  let totalAmount = 0;

  const {acc_data, isFetching, isError} = useQuery(
    'accounts',
    fetchAccounts
  )

  useEffect(() => {
    if(acc_data && !isFetching && !isError) {
      setAccounts(acc_data);
    }
  }, [acc_data, isFetching, isError]);

/*   // Delete Account
  const deleteAccount = async (id) => {
    await fetch(`http://localhost:5000/accounts/${id}`, {method: 'DELETE'})

    setAccounts(accounts.filter((account) => account.id !== id))
  } */

  const {
    data,
    isLoading,
    error,
    mutate: create_account,
  } = useMutation("create account", createAccount, {
    onSuccess: (data) => {
      setAccounts(...accounts, data)
      navigate("");
    },
  });

  // button click event
  const handleSubmit = async (event) => {
    event.preventDefault();
    const account = { name, amount };
    create_account(account);
    setName("");
    setAmount(0);
  };

  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <h1>Error in loading</h1>;

  return (
    <Grid container spacing={2} sx={{justifyContent: 'space-evenly'}}>
      <Grid item>
        <Box elevation={10} sx={formStyle} style={{width: 380}}>
          <Typography
            variant="h4"
            align="center"
            sx={{ fontWeight: "700", marginBottom: 3 }}>
            Create New Account
          </Typography>
          <ValidatorForm onSubmit={handleSubmit}>
            <TextField
              label="Account Name"
              placeholder="Enter Account Name"
              type="text"
              fullWidth
              required
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />

            <TextField
              label="Initial Amount"
              type="number"
              InputProps={{
                inputProps: { min: 0 },
              }}
              fullWidth
              value={amount}
              onChange={(e) => {
                setAmount(e.target.value);
              }}
            />

            <Button
              type="submit"
              color="primary"
              variant="contained"
              fullWidth
              disabled={!name}
              sx={{
                borderRadius: 30,
                "&.Mui-disabled": {
                  bgcolor: "#7fbfff",
                  color: "white",
                },
              }}>
              Save
            </Button>
          </ValidatorForm>
        </Box>
      </Grid>
      <Grid item>
        <Stack spacing={2}>
          <Card sx={{ width: 400 }}>
            <CardContent>
              <Typography 
              variant="h6"
              align="center"
              sx={{ fontWeight: 700 }}>
                Total Amount:
                <span style={{ color: amount>=500 ? 'green' : 'red' }}>
                  {" "}Rs. {accounts.map((account) => (
                    totalAmount += account.amount
                  ))
                }
                </span>
              </Typography>
            </CardContent>
          </Card>
          {accounts.map((account) => (
              <Account key={account.id} account={account} />
            ))}
        </Stack>
      </Grid>
    </Grid>
  )
};

export default Accounts;
