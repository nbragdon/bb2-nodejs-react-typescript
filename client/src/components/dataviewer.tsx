import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { 
    Typography, 
    Box, 
    TextField,
    Button
} from '@material-ui/core';

type Props = {
    dataUrl: string,
    name: string
}

export default function({dataUrl, name}: Props) {
    const [responseData, setResponseData] = useState<any>({});
    const [urlQueryString, setUrlQueryString] = React.useState<string>('');

    async function getData() {
        const getDataResponse = await axios.get(dataUrl + '?' + urlQueryString);
        console.log('getDataResponse.data', getDataResponse.data);
        setResponseData(getDataResponse.data);
    }

    async function onTextChange(e: React.ChangeEvent<HTMLInputElement>) {
        setUrlQueryString(e.target.value);
    }

    const authTokenDisplay = (<div><pre>
        {JSON.stringify(responseData, null, 2) }
    </pre></div>);

    return (
        <Box>
            <Typography variant="h2">{name}</Typography>
            <form noValidate autoComplete="off">
                <TextField fullWidth value={urlQueryString} onChange={onTextChange} id="outlined-basic" label="Query Params" variant="outlined"/>
            </form><br />
            <Button onClick={getData} variant="contained" color="primary">Retrieve</Button><br />
            {authTokenDisplay}
        </Box>
    )
}