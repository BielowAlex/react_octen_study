import React from 'react';

const Comment = ({comment}) => {
    const {postId, id, name, email, body} = comment;
    return (
        <div>
            <ul className="comment">
                <li><h2>Post id:{postId};Comment ID:{id};User:{name}--{email}</h2></li>
                <li>{body}</li>
            </ul>
        </div>
    );
};

export default Comment;
