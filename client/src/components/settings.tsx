import React from 'react';
// import FormGroup from '@material-ui/core/FormGroup';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Switch from '@material-ui/core/Switch';
// import Radio from '@material-ui/core/Radio';
// import RadioGroup from '@material-ui/core/RadioGroup';
// import FormControl from '@material-ui/core/FormControl';
// import FormLabel from '@material-ui/core/FormLabel';
// import Box from '@material-ui/core/Box';
import { 
    Choice,
    ChoiceList
} from '@cmsgov/design-system';

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
        <div>
            <form>
                <fieldset>
                    <label>Environment</label>
                    {/* <RadioGroup aria-label="env" name="env" value={settingsState.env} onChange={handleRadioChange}>
                        <label value="sandbox" control={<Radio />} label="Sandbox" />
                        <label value="local" control={<Radio />} label="Local" />
                        <label value="production" control={<Radio />} label="Production" />
                    </RadioGroup> */}
                    <ChoiceList
                          choices={[
                            { label: 'Sandbox', value: 'sandbox' },
                            { label: 'Local', value: 'local' },
                            { label: 'Production', value: 'production' },
                        ]}
                        errorMessage="Example error message"
                        label="Radio example"
                        name="env"
                        type="radio"
                        // value={settingsState.env} 
                        onChange={handleRadioChange}
                    />
                </fieldset>
                <fieldset>
                    <label>Version</label>
                    {/* <RadioGroup aria-label="version" name="version" value={settingsState.version} onChange={handleRadioChange}>
                        <label value="v1" control={<Radio />} label="v1" />
                        <label value="v2" control={<Radio />} label="v2" />
                    </RadioGroup> */}
                    <ChoiceList
                          choices={[
                            { label: 'v1', value: 'v1' },
                            { label: 'v2', value: 'v2' },
                        ]}
                        label="Radio example"
                        name="version"
                        type="radio"
                        // value={settingsState.version}
                        onChange={handleRadioChange}
                    />
                </fieldset>
                <label>PKCE</label>
                <Choice
                    checked={settingsState.pkce}
                    onChange={handleSwitchChange}
                    name="pkce"
                    color="primary"
                    label="PKCE"
                    type="radio"
                    value="checked"
                />
            </form>
        </div>
    )
}