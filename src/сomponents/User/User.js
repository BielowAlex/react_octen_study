import React from 'react';

import './User.css';

const User = ({user, getUserDetails}) => {
    const {id,name,username, email} = user;
    return (
        <div className={"user_sec"}>
            <ul className={"user_bio"}>
                <li>ID:{id}</li>
                <li>{name}</li>
                <li>{username}</li>
                <li>{email}</li>
            </ul>
            <button onClick={()=>getUserDetails(user)}>Show Details</button>
        </div>
    );
};

export default User;
