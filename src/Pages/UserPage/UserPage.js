import React from 'react';
import Users from "../../сomponents/User/Users";
import {Outlet} from "react-router-dom";

const UserPage = () => {
    return (
        <div style={{display:"flex"}}>
            <Users/>
            <Outlet/>
        </div>
    );
};

export default UserPage;
