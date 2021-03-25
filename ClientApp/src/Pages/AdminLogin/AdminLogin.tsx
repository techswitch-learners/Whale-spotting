import React, { FormEvent, useState } from 'react';
import './AdminLogin.scss';

function AdminLogin() : JSX.Element {

    const [username, setUsername] = useState<string | null>(null);
    const [password, setPassword] = useState<string | null>(null);
    const submitForm = (e : FormEvent) => {
        e.preventDefault();
        // Code to find user in database, see if password matches
        // If yes, log in and direct to Review Sightings page
        // If not, display error message
    }

    return (
        <div className="center-column">
            <h1>Admin Login</h1>
            <form className="center-column">
                <label>
                    Username: <input type="text" name="username" onChange={e => setUsername(e.target.value)} required />
                </label>
                <label>
                    Password: <input type="password" name="password" onChange={e => setPassword(e.target.value)} required />
                </label>
                <button onClick = {submitForm}>Login</button>
            </form>            
        </div>
    )
}

export { AdminLogin };