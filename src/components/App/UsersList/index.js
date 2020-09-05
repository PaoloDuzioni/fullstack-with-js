import React from 'react';
import User from '../User';
import styles from './style.module.scss';

const UsersList = ({ users }) => {
    return (
        <section className={styles.users}>
            <ul>
                {users.length > 0 &&
                    users.map(user => (
                        <User
                            key={`${user.name.first}-${user.name.last}`}
                            user={user}
                        />
                    ))}
            </ul>
        </section>
    );
};

export default UsersList;
