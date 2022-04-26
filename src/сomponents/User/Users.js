import React, {useEffect, useState} from 'react';

import {userServices} from "../../Services";
import User from "../Users/User";
import css from './Users.module.css'

const Users = () => {
    const [users,setUsers] = useState([]);
    useEffect(() => {
        userServices.getAll().then(({data})=>setUsers(data))
    }, []);


    return (
        <div className={css.users_list}>
            {users.map(user => <User key={user.id} user={user}/> )}
        </div>
    );
};

export default Users;
