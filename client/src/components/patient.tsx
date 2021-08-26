import { Button } from '@cmsgov/design-system';
// import { Link as RouterLink } from 'react-router-dom';

export default function Patient({ }) {
    return (
        <div className="">
            <h2>Patient information</h2>
            <h3>Clinic</h3>
            <ul>
                <li>
                    <img src="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939" alt="Profile avatar" />
                </li>
                <li>Homer J. Simpson</li>
                <li>Springfield General Hospital</li>
                <li>Dr. Hibbert</li>
            </ul>
            <h3>Medicare records</h3>
            <p>Homer, you can now allow Springfield General Hospital access to your Medicare healthcare records!</p>
            <Button variation="primary">Authorize</Button>
        </div>
    );
};