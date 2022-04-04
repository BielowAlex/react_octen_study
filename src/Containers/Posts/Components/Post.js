import React from 'react';
import './Post.css'

const Post = ({post}) => {
    const {userId,id, title, body} = post;
    return (
        <div>
            <ul className="post">
                <li><h2>User id:{userId};Post id:{id} {title}</h2></li>
                <li>{body}</li>
            </ul>
        </div>
    );
};

export default Post;
