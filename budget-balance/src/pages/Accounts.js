import React, { useState } from "react";
import { Grid, Box, Typography, Button, TextField, Stack, Card,
CardContent, CardActions, IconButton, Menu, MenuItem } from '@mui/material';
import { formStyle } from "./authentication/login/Login";
import { ValidatorForm } from "react-material-ui-form-validator";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { createAccount, getAccount } from "../api/auth/authApi";

const Accounts = () => {

  // managing input states
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(0);
  const navigate = useNavigate();


  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const {
    data,
    isLoading,
    error,
    mutate: create_account,
  } = useMutation("create account", createAccount, {
    onSuccess: (data) => {
      console.log(data)
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
                <span style={{ color: amount>=500 ? 'green' : 'red' }}>{" "}Rs. {amount}</span>
              </Typography>
            </CardContent>
          </Card>
          <Card 
          sx={{ width: 400, display: "flex", flexDirection: 'row', 
          justifyContent: 'space-evenly' }}>
            <CardContent sx={{display: 'flex', flexGrow: 2}}>
              <Typography variant="h6"
              sx={{  fontWeight: 600, flexGrow: 2 }}>
                Bank
              </Typography>
              <Typography
              variant="h6">
                Rs. 100
              </Typography>
            </CardContent>
            <CardActions>
              <IconButton
              onClick={handleClick}
              aria-controls={open ? 'account-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined} >
                <MoreVertIcon />
              </IconButton>

              <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              PaperProps={{
              elevation: 0,
              sx: {
                overflow: 'visible',
                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                mt: 1.5,
                '& .MuiAvatar-root': {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
              },},}}
              transformOrigin={{ horizontal: 'right', vertical: 'top' }}
              anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
              >
                <MenuItem onClick={handleClose}>
                  Edit Account
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  Delete Account
                </MenuItem>
              </Menu>

            </CardActions>
          </Card>
        </Stack>
      </Grid>
    </Grid>
  )
};

export default Accounts;
