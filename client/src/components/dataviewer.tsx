import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { 
    TextField,
    Button
} from '@cmsgov/design-system';

type Props = {
    dataUrl: string,
    name: string
}

export default function({dataUrl, name}: Props) {
    const [responseData, setResponseData] = useState<any>({});
    const [urlQueryString, setUrlQueryString] = React.useState<string>('');

    async function getData() {
        const getDataResponse = await axios.get(dataUrl + '?' + urlQueryString);
        setResponseData(getDataResponse.data);
    }

    async function onTextChange(e: React.ChangeEvent<HTMLInputElement>) {
        setUrlQueryString(e.target.value);
    }

    const authTokenDisplay = (<div><pre>
        {JSON.stringify(responseData, null, 2) }
    </pre></div>);

    return (
        <div>
            <h2>{name}</h2>
            <form noValidate autoComplete="off">
                <TextField 
                name="paramenter"
                value={urlQueryString} 
                onChange={onTextChange} 
                id="outlined-basic" 
                label="Query Params"
                />
            </form><br />
            <Button onClick={getData} color="primary">Retrieve</Button><br />
            {authTokenDisplay}
        </div>
    )
}