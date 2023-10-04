import React, { useState } from 'react';

const LoggenIn = () => {

    const [isLoggedIn, setIsLoggenIn] = useState(false);

    const handleLogin = () => {
        setIsLoggenIn(true)
    }
    const handleLogout = () => {
        setIsLoggenIn(false)
    }

    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>User is {isLoggedIn ? 'logged in' : 'logged out'}</div>
        </div>
    );
};

export default LoggenIn;