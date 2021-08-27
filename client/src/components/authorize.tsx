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
    const [showExampleModal, setShowExampleModal] = useState(false);

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
            <p>If you don't have an authorized patient, click the button below to authorize one</p>
           <Button 
                onClick={() => setShowExampleModal(true)} 
                variation="transparent"
            >
                Auth settings
            </Button>            
            {showExampleModal && (
                <Dialog
                onExit={() => setShowExampleModal(false)}
                getApplicationNode={() => document.getElementById('App')}
                heading="Auth settings"
                actions={[
                    <Button 
                        className="ds-c-button ds-c-button--primary ds-u-margin-right--1" 
                        key="primary"
                        type="submit"
                    onClick={() => setShowExampleModal(false)}

                    >
                    Save settings
                    </Button>,
                    <Button
                    className="ds-c-button ds-c-button--transparent"
                    key="cancel"
                    onClick={() => setShowExampleModal(false)}
                    >
                    Cancel
                    </Button>,
                ]}
                >
                    <Settings settingsState={settingsState} setSettingsState={setSettingsState}/>
                </Dialog>
            )}
            <Button onClick={goAuthorize} variation="primary" size="big" >Authorize</Button><br />
            <h3>Auth Token Details:</h3>
            {authTokenDisplay}
        </div>
    );
}