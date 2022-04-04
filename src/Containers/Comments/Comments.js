import React, {useEffect, useState} from 'react';
import Comment from "./Components/Сomment";

const Comments = () => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments/')
            .then(value => value.json())
            .then(value => setComments(value));
    }, []);

    return (
        <div className={"commentsList"}>
            <h2>Comments</h2>
            {comments.map(comment=><Comment comment={comment}/> )}
        </div>
    );
};

export default Comments;
