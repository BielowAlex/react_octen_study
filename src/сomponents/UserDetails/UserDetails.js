import React from 'react';
import './UserDetails.css'
const UserDetails = ({user, getUserPosts}) => {
    const {id,name,username, email ,address, phone, website, company} = user;

    if(Object.keys(user).length>0) {



        return (
            <div className={"user_info"}>
                <ul className="user">
                    <li>ID:{id}</li>
                    <li>{name}</li>
                    <li>{username}</li>
                    <li>{email}</li>
                </ul>
                <ul className="address">
                    <li><h2>Address</h2></li>
                    <li>Street:{address.street}</li>
                    <li>Suite:{address.suite}</li>
                    <li>City:{address.city}</li>
                    <li>Zipcode:{address.zipcode}</li>

                </ul>
                <ul>
                    <li><h2>geo</h2></li>
                    <li>lat:{address.geo.lat}</li>
                    <li>lng:{address.geo.lng}</li>
                </ul>
                <ul className="contact">
                    <li><h2>Contact</h2></li>
                    <li>Phone:{phone}</li>
                    <li>Website:{website}</li>
                </ul>
                <ul className="company">
                    <li><h2>Company</h2></li>
                    <li>Company name:{company.name}</li>
                    <li>Catch phrase:{company.catchPhrase}</li>
                    <li>bs:{company.bs}</li>
                </ul>
                <button onClick={()=>getUserPosts(id)}>Show user Posts</button>
            </div>
        );
    }else{
        return null;
    }
};

export default UserDetails;
