import { Button } from '@cmsgov/design-system';
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