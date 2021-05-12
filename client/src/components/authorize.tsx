import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import Settings from './settings';
import { Authorization } from '../types/authorization';
import { SettingsType } from '../types/settings';


export default function Authorize({ }) {
    const [authToken, setAuthToken] = useState<Authorization | undefined>(undefined);
    const [settingsState, setSettingsState] = React.useState<SettingsType>({
        pkce: true,
        version: 'v1',
        env: 'sandbox'
    });

    async function loadInitialData() {
        const authTokenResponse = await axios.get('/api/authorize/currentAuthToken');
        const getSettingsResponse = await axios.get('/api/settings');
    
        setAuthToken(authTokenResponse.data);
        setSettingsState(getSettingsResponse.data);
    }

    useEffect(() => {
        loadInitialData();
    }, []);

    async function goAuthorize() {
        const authUrlResponse = await axios.get(`/api/authorize/authurl`, { params: settingsState });
        console.log('authUrlResponse.data', authUrlResponse.data);
        window.location.href = authUrlResponse.data || '/';
    }

    const patientId = authToken?.patient || 'None';

    const authTokenDisplay = (<div><pre>
        {JSON.stringify(authToken, null, 2) }
    </pre></div>);
    
    return (
        <Box>
            <Typography variant="h2">Authorized Patient: {patientId}</Typography>
            <Settings settingsState={settingsState} setSettingsState={setSettingsState}/>
            <Typography>If you don't have an authorized patient, click the button below to authorize one</Typography><br />
            <Button onClick={goAuthorize} color="primary" variant="contained">Authorize</Button><br />
            <Typography variant="h3">Auth Token Details:</Typography>
            {authTokenDisplay}
        </Box>
    );
}