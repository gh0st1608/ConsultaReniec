import React from 'react';
import UserList from '../components/UserList';

const Users = () => {
    const USERS = [      
        {
            id: 'u1',
            name: 'Usuario 1',
            image: 'https://cdn.bizneo.com/blog/wp-content/uploads/2020/02/pruebas-de-seleccion-de-personal-810x455.png',
            servicesCount: 3
        },
        {
            id: 'u2',
            name: 'Usuario 2',
            image: 'https://cdn.bizneo.com/blog/wp-content/uploads/2020/02/pruebas-de-seleccion-de-personal-810x455.png',
            servicesCount: 2
        }
    ];

    return <UserList items={USERS} />;
    //return <h2>HOLI</h2>
};

export default Users;