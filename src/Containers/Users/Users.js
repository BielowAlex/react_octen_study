import React, {useEffect, useState} from 'react';
import User from "./components/User";

const Users = () => {
    const [users, setUser] = useState([]);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users/")
            .then(value => value.json())
            .then(result=>setUser(result));
    },[])
    return (
        <div className={"usersList"}>
            <h2>Users</h2>
            {users.map(user =><User key={user.id} user={user}/>)}
        </div>
    );
};

export default Users;
