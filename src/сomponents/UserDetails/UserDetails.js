import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";
import {userServices} from "../../Services";
import css from './UserDetails.module.css'

const UserDetails = () => {
    const [user, setUser] = useState(null);
    const {id} = useParams();
    useEffect(() => {
        userServices.getByID(id).then(({data}) => setUser(data));

    }, [id])

    return (
        <div>
            {user &&
                <div className={css.user_details}>
                    <h2>ID:{user.id}</h2>
                    <h2>Name:{user.name}</h2>
                    <h2>Username:{user.username}</h2>
                    <h2>Email:{user.email}</h2>
                    <h2>Website:{user.website}</h2>
                </div>
            }

        </div>
    );
};

export default UserDetails;
