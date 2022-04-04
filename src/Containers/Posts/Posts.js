import React, {useEffect, useState} from 'react';
import Post from "./Components/Post";

const Posts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/')
            .then(value => value.json())
            .then(value => setPosts(value));
    }, []);

    return (
        <div className={"postsList"}>
            <h2>Posts</h2>
            {posts.map(post=><Post post={post}/>)}
        </div>
    );
};

export default Posts;
