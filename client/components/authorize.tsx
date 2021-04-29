import React from 'react'
import RoundButton from './round-button';


export default function Authorize({ }: Props) {
    return (
        <div>
            <h1 class="text-black font-semibold text-5xl">Authorized Patient: None</h1>
            <p class="mt-4 text-lg text-blueGray-200">If you don't have an authorized patient, click the button below to authorize one</p>
            <RoundButton text="Authorize"></RoundButton>
        </div>
    );
}