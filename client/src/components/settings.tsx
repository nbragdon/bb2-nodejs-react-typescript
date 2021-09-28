import React from 'react';
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
        
    };

    const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSettingsState({ ...settingsState, [event.target.name]: event.target.value });
        
    };

    return (
        <div>
            <form>
                    <ChoiceList
                          choices={[
                            { label: 'Sandbox', value: 'sandbox' },
                            { label: 'Local', value: 'local' },
                            { label: 'Production', value: 'production' },
                        ]}
                        // errorMessage="Example error message if needed"
                        label="Environment"
                        name="env"
                        type="radio"
                        // value={settingsState.env} 
                        onChange={handleRadioChange}
                    />
                    <ChoiceList
                          choices={[
                            { label: 'v1', value: 'v1' },
                            { label: 'v2', value: 'v2' },
                        ]}
                        label="Version"
                        name="version"
                        type="radio"
                        // value={settingsState.version}
                        onChange={handleRadioChange}
                    />
                    <h4 className="ds-c-label">PCKE</h4>
                        <Choice
                            checked={settingsState.pkce}
                            onChange={handleSwitchChange}
                            name="pkce"
                            color="primary"
                            label="On"
                            type="checkbox"
                            value="checked"
                        />
            </form>
        </div>
    )
}