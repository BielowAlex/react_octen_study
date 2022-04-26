import React from 'react';
import {Link} from "react-router-dom";

import css from './Post.module.css'

const Post = ({post}) => {
    const {id,title} = post;

    return (
        <div className={css.post}>
            <h2>{id}--{title}</h2>
            <Link to={id.toString()}>get User Details</Link>
        </div>
    );
};

export default Post;
