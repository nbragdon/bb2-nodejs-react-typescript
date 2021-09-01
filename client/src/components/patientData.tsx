import React, { useState } from 'react'
import { Button } from '@cmsgov/design-system';
import Records from './records'
import chart from '../images/who-charted.png'

export default function PatientData({ }) {
    const [header, setHeader] = useState('Add your Medicare data');
    const [show, setShow] = useState(true);     
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
                <Button variation="primary" onClick={() => setHeader('Your data was retreived')}>Authorize</Button>
            </div>
        </div>
    );
};