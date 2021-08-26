import React from 'react';
// import { Typography, AppBar, IconButton, Button, Toolbar } from '@material-ui/core';
import { Badge, Button } from '@cmsgov/design-system';
// import MenuIcon from '@material-ui/icons/Menu';
import { Link as RouterLink } from 'react-router-dom';

export default function Header({ }) {
    return (
        <header className="ds-u-padding--3 ds-u-sm-padding--6 ds-u-display--block ds-u-fill--primary-darkest">
            <h1 className="ds-u-margin--0 ds-u-color--white ds-u-font-size--display ds-u-text-align--center">
                <RouterLink to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                    Blue Button sample test client
                </RouterLink>
            </h1>
            <div className="ds-u-text-align--center">
                <Badge variation="info" size="big">
                    Medicare claims data
                </Badge>
            </div>
        </header>
    );
};