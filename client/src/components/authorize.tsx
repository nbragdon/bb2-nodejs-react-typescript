import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { Authorization } from '../types/authorization';


export default function Authorize({ }) {
    const [authToken, setAuthToken] = useState<Authorization | undefined>(undefined);
    const [authUrl, setAuthUrl] = useState<string | undefined>(undefined);

    async function loadInitialData() {
        const authUrlResponse = await axios.get(`/api/authorize/authurl`);
        const authTokenResponse = await axios.get('/api/authorize/currentAuthToken');
    
        setAuthUrl(authUrlResponse.data);
        setAuthToken(authTokenResponse.data);
    }

    useEffect(() => {
        loadInitialData();
    }, []);

    function goAuthorize() {
        window.location.href = authUrl || '/';
    }

    const patientId = authToken?.patient || 'None';

    const authTokenDisplay = (<div><pre>
        {JSON.stringify(authToken, null, 2) }
    </pre></div>);
    
    return (
        <div>
            <Typography variant="h2">Authorized Patient: {patientId}</Typography>
            <Typography>If you don't have an authorized patient, click the button below to authorize one</Typography><br />
            <Button onClick={goAuthorize} color="primary" variant="contained">Authorize</Button><br />
            <Typography variant="h3">Auth Token Details:</Typography>
            {authTokenDisplay}
        </div>
    );
}