import React from 'react';
import styles from './style.module.scss';

const Users = ({ user }) => {
    return (
        <li className={styles.user}>
            <img
                className={styles.image}
                src={user.picture.thumbnail}
                alt={`${user.name.first} ${user.name.last}`}
            />
            <h3>
                {user.name.first} {user.name.last}
            </h3>
        </li>
    );
};

export default Users;
