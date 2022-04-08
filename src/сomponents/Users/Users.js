import React, {useEffect, useState} from 'react';

// import UserDetails from "../UserDetails/UserDetails.js";
import {userServices} from "../../Services";
import User from "../User/User";

const Users = ({getUser}) => {
    const [users, setUser] = useState([]);

    useEffect(()=>{
        userServices.getAll().then(({data}) => setUser(data));
    },[])
    return (
        <div className={"usersList"}>
            <h2>Users</h2>
            {users.map(user =><User key={user.id} user={user} getUserDetails={getUser}/>)}
        </div>
    );
};
export default Users;
