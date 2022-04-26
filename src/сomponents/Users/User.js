import React from 'react';
import {Link} from "react-router-dom";
import css from './User.module.css';

const User = ({user}) => {
    const {id,name} = user;

    return (
        <div className={css.user}>
            <h2>{id}--{name}</h2>
            <Link to={id.toString()}>get User Details</Link>
        </div>
    );
};

export default User;
