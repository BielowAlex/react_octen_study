import React, {useEffect, useState} from 'react';
import {postServices} from "../../Services/post_services";
import Post from "../Post/Post";

const Posts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postServices.getAll().then(({data})=>setPosts(data));
    }, []);


    return (
        <div style={{width:500}}>
            {posts && posts.map(post=><Post key={post.id} post={post}/> )}
        </div>
    );
};

export default Posts;
