import React, { useState, useEffect } from 'react'
import axios from 'axios';
import RoundButton from './round-button';


export default function Authorize({ }) {
    const [authToken, setAuthToken] = useState();
    const [authUrl, setAuthUrl] = useState();

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

    const patientId = authToken && authToken.patient ? authToken.patient : 'None';
    const authTokenDisplay = (<div><pre>
        {JSON.stringify(authToken, null, 2) }
    </pre></div>);
    
    return (
        <div>
            <h1 className="text-black font-semibold text-5xl">Authorized Patient: {patientId}</h1>
            <p className="mt-4 text-lg text-blueGray-200">If you don't have an authorized patient, click the button below to authorize one</p><br />
            <RoundButton onClick={goAuthorize} text="Authorize"></RoundButton><br />
            <h1 className="text-black font-semibold text-5xl">Auth Token Details:</h1>
            {authTokenDisplay}
        </div>
    );
}