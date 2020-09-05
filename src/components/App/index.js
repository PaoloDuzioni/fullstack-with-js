import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UsersList from './UsersList';
import styles from './style.module.scss';

function App() {
    const [users, setUsers] = useState([]);

    // Get users from server
    useEffect(() => {
        axios.get('http://localhost:4000/users').then(response => {
            setUsers(response.data.results);
        });
    }, []);

    return (
        <div className={styles.app}>
            <header>
                <h1 className={`${styles.mainTitle} ${styles.red}`}>
                    Welcome to User Random App
                </h1>
            </header>

            <UsersList users={users} />
        </div>
    );
}

export default App;
