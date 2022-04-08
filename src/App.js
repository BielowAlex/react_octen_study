import './App.css';
import Users from "./сomponents/Users/Users";

import UserDetails from "./сomponents/UserDetails/UserDetails";

import React, {useEffect, useState} from "react";
import {userServices} from "./Services";
import Post from "./сomponents/Post/Post";


function App() {
    const [user, setUser] = useState();
    const [posts, setPosts] = useState([]);
    let postsSec;
    const getUser = (user) => {
        setUser(user);
        postsSec = document.querySelector('.posts_sec');
        postsSec.classList.add('_hide');
    }

    const getUserPosts = (id) => {
        userServices.getPostByUserID(id).then(({data}) => setPosts(data));
        postsSec = document.querySelector('.posts_sec');
        postsSec.classList.remove('_hide');
    }


    return (
        <div className="App">
            <div className="wrap">
                <Users getUser={getUser}/>
                {user && <UserDetails user={user} getUserPosts={getUserPosts}/>}
            </div>
            <div className="posts_sec _hide">
                    <h2>Posts</h2>
                {posts.map(post => <Post key={post.id} post={post}/>)}
            </div>
        </div>
    );
}

export default App;
