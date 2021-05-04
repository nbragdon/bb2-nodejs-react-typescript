import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Box from '@material-ui/core/Box';

import { SettingsType } from '../types/settings';

type Props = {
    settingsState: SettingsType,
    setSettingsState: Function
}

export default function Settings({ settingsState, setSettingsState}: Props) {

    const handleSwitchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSettingsState({ ...settingsState, [event.target.name]: event.target.checked });
        console.log('state', settingsState);
    };

    const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSettingsState({ ...settingsState, [event.target.name]: event.target.value });
        console.log('state', settingsState);
    };

    return (
        <Box>
            <FormGroup>
                <FormControl component="fieldset">
                    <FormLabel>Environment</FormLabel>
                    <RadioGroup aria-label="env" name="env" value={settingsState.env} onChange={handleRadioChange}>
                        <FormControlLabel value="sandbox" control={<Radio />} label="Sandbox" />
                        <FormControlLabel value="local" control={<Radio />} label="Local" />
                        <FormControlLabel value="production" control={<Radio />} label="Production" />
                    </RadioGroup>
                </FormControl>
                <FormControl component="fieldset">
                    <FormLabel>Version</FormLabel>
                    <RadioGroup aria-label="version" name="version" value={settingsState.version} onChange={handleRadioChange}>
                        <FormControlLabel value="v1" control={<Radio />} label="v1" />
                        <FormControlLabel value="v2" control={<Radio />} label="v2" />
                    </RadioGroup>
                </FormControl>
                <FormLabel>PKCE</FormLabel>
                <Switch
                    checked={settingsState.pkce}
                    onChange={handleSwitchChange}
                    name="pkce"
                    color="primary"
                />
            </FormGroup>
        </Box>
    )
}