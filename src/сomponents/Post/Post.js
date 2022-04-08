import React from 'react';
import './Post.css'

const Post = ({post}) => {
    const { title, body} = post;
    return (
        <div>
            <ul className="post">
                <li><h3>Title: {title}</h3></li>
                <li>{body}</li>
            </ul>
        </div>
    );
};

export default Post;
