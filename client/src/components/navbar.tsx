import React from 'react';
import { Typography, AppBar, IconButton, Button, Toolbar } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Link as RouterLink } from 'react-router-dom';

export default function Navbar({ }) {
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6">
                    <RouterLink to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                        BB2 Sample App
                    </RouterLink>
                </Typography>
                <Button component={RouterLink} to="/benefit" color="inherit">Benefit</Button>
                <Button component={RouterLink} to="/patient" color="inherit">Patient</Button>
                <Button component={RouterLink} to="/coverage" color="inherit">Coverage</Button>
                <Button component={RouterLink} to="/userprofile" color="inherit">User Profile</Button>
            </Toolbar>
        </AppBar>
    );
};