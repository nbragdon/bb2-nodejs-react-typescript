import React, { useState, useEffect } from 'react'
import { Button } from '@cmsgov/design-system';
// import eob from '../data/eob.json'
import chart from '../images/who-charted.png'

export default function PatientData({ }) {
    const [eob, setEob] = useState('Add your Medicare data')
    //TODO: Fetch and return data 
    useEffect(() => {
        fetch("../data/eob.json")
        .then(res => res.json())
        .then(data => {
            console.log(data)
            // setEob(data);
        })
    },[])      
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
                <h4>{ eob }</h4>
                <Button variation="primary" onClick={() => setEob('Your data was retreived')}>Authorize</Button>
                {/*
                Button to fetch data and notify of success after auth flow
                {eob && <Button variation="primary" onClick={() => setEob(eob)}>Authorize</Button>}
                */}
            </div>
        </div>
    );
};