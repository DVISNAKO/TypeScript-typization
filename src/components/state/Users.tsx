import React, { useState } from 'react';;

type AuthUser = {
    name: string
    email: string
}


const Users = () => {

    const [user, setUser] = useState<AuthUser | null>(null);

    const handleLogin = () => {
        setUser({
            name: 'Dima',
            email: 'dima@inbox.lv',
        })
    }
    const handleLogout = () => {
        setUser(null)
    }

    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>User name is {user?.name}</div>
            <div>User email is {user?.email}</div>
        </div>
    );
};

export default Users;