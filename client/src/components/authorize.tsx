import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Button, Dialog } from '@cmsgov/design-system';
import Settings from './settings';
import { Authorization } from '../types/authorization';
import { SettingsType } from '../types/settings';


export default function Authorize({ }) {
    const [authToken, setAuthToken] = useState<Authorization | undefined>(undefined);
    const [settingsState, setSettingsState] = useState<SettingsType>({
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
        <div>
            <h2>Authorized Patient: {patientId}</h2>
            <p>If you don't have an authorized patient, click the button below to authorize one.</p>

            <Settings settingsState={settingsState} setSettingsState={setSettingsState}/>
            <Button onClick={goAuthorize} variation="primary" size="big" className='ds-u-margin-top--2'>Authorize</Button><br />
            {/* <h3>Auth Token Details:</h3>
            {authTokenDisplay} */}
            <p className='ds-u-measure--wide'>
                <a href="https://bluebutton.cms.gov/developers/">Learn more about v2/v1, PCKE, and other options from the Blue Button 2.0 documentation</a>
            </p>
        </div>
    );
}