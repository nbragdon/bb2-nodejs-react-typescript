import React from 'react';
// import { Typography, AppBar, IconButton, Button, Toolbar } from '@material-ui/core';
import { Badge, Button } from '@cmsgov/design-system';
// import MenuIcon from '@material-ui/icons/Menu';
import { Link as RouterLink } from 'react-router-dom';

export default function Navbar({ }) {
    return (

        <div>
            <Button component={RouterLink} href="/benefit" color="inherit">Benefit</Button>
            <Button component={RouterLink} href="/patient" color="inherit">Patient</Button>
            <Button component={RouterLink} href="/coverage" color="inherit">Coverage</Button>
            <Button component={RouterLink} href="/userprofile" color="inherit">User Profile</Button>
        </div>
    );
};