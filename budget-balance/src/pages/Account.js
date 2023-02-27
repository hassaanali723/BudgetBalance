import React, { useState } from "react";
import { Typography, Card, CardContent, CardActions, IconButton, Menu, MenuItem } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { deleteAccount } from "../api/auth/authApi";

const Account = ({ account }) => {

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleDeleteAccount = () => {
        deleteAccount(account.id);
    };

    return (
        <Card sx={{ width: 400, display: "flex", flexDirection: 'row', justifyContent: 'space-evenly' }}>
            <CardContent sx={{ display: 'flex', flexGrow: 2 }}>
                <Typography variant="h6" sx={{ fontWeight: 600, flexGrow: 2 }}>
                    {account.name}
                </Typography>
                <Typography variant="h6">
                    Rs. {account.amount}
                </Typography>
            </CardContent>
            <CardActions>
                <IconButton 
                onClick={handleClick} 
                aria-controls={open ? 'account-menu' : undefined} 
                aria-haspopup="true" 
                aria-expanded={open ? 'true' : undefined}>
                    <MoreVertIcon />
                </IconButton>
                <Menu anchorEl={anchorEl} id="account-menu" open={open} onClose={handleClose} PaperProps={{
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
                        },
                    },
                }}
                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}>
                    <MenuItem onClick={handleClose}>Edit Account</MenuItem>
                    <MenuItem onClick={handleDeleteAccount}>Delete Account</MenuItem>
                </Menu>
            </CardActions>
        </Card>
    );
};

export default Account;
