import React from 'react';
import { Typography, AppBar, IconButton, Button, Toolbar } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

export default function Navbar({ }) {
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6">
                    BB2 Sample App
                </Typography>
                <Button color="inherit">Benefits</Button>
                <Button color="inherit">Patients</Button>
                <Button color="inherit">Coverage</Button>
                <Button color="inherit">User Profile</Button>
            </Toolbar>
        </AppBar>
    );
};