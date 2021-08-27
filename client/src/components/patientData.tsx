import React, { useState, useEffect } from 'react'
import { Button } from '@cmsgov/design-system';
import eob from '../data/eob.json'

export default function PatientData({ }) {

    const [eob, setEob] = useState('No Medicare data added.')    
    return (
        <div className="">
                        <h3>Medicare records</h3>
            <p>Homer, you can now allow Springfield General Hospital access to your Medicare healthcare records!</p>

            <h4>{ eob }</h4>
            <Button variation="primary" onClick={() => setEob('Data retreived')}>Authorize</Button>
        </div>
    );
};