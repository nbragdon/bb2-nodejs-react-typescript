import React, { useState, useEffect } from 'react'
import { Button } from '@cmsgov/design-system';
import Records from './records'
import axios from 'axios';
import chart from '../images/who-charted.png'
import Settings from './settings';
import { Authorization } from '../types/authorization';
import { SettingsType } from '../types/settings';

export default function PatientData({ }) {
    const [header, setHeader] = useState('Add your Medicare data');
    const [show, setShow] = useState(true);     
    const [authToken, setAuthToken] = useState<Authorization | undefined>(undefined);
    const [settingsState, setSettingsState] = useState<SettingsType>({
        pkce: true,
        version: 'v2',
        env: 'sandbox'
    });

    async function goAuthorize() {
        const authUrlResponse = await axios.get(`/api/authorize/authurl`, { params: settingsState });
        console.log('authUrlResponse.data', authUrlResponse.data);
        window.location.href = authUrlResponse.data || '/';
    }

    const patientId = authToken?.patient || 'None';
    
    /* DEVELOPER NOTES:
    * Here we are hard coding the users information for the sake of saving time
    * you would display user information that you have stored in whatever persistence layer/mechcanism 
    * your application is using
    */
    return (
        <div>
            <h3>Medicare records</h3>
            <div className="ds-u-display--flex ds-u-flex-direction--row ds-u-align-items--start">
                <img src={chart} alt="Chart icon" className=""/>
                <p className='ds-u-padding-x--2 ds-u-margin-top--0'>
                    John, you can now allow Springfield General Hospital access to your Medicare healthcare records!
                </p>
            </div>
            <div className='ds-u-margin-top--2 ds-u-border-top--2'>
                <div>
                    <h4>{ header }</h4>
                </div>
                <Button variation="primary" onClick={goAuthorize}>Authorize</Button>
            </div>
        </div>
    );
};